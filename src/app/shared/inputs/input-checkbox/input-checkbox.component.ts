import {FocusableOption, FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  HostListener,
  Self,
  ViewChild,
  Renderer2,
  HostBinding
} from '@angular/core';

import { ControlValueAccessor, NgControl } from '@angular/forms';


const deprecated = (_this: any, name = '') => {
  console.warn(`Input ${name} is deprecated`, _this);
};
@Component({
  selector: 'sw-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCheckboxComponent implements ControlValueAccessor {
  @HostListener('click', ['$event'])
  @HostListener('keydown', ['$event']) onEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target === event.target) {
      if (event instanceof KeyboardEvent) {
        if (event.code === 'Space') this.toggle();
        else if (event.code === 'Tab') {
          let next = this.element.nativeElement.nextElementSibling;
          if (next) {
            next.focus();
          }
        }
      } else if (event instanceof MouseEvent) {
        this.toggle();
      } else {
        console.log(event)
      }

    }
  }
  @HostListener('blur', ['$event']) onBlur(event: Event) {
    this.onTouched();
  };
  @HostBinding() tabIndex: number = 0;
  @Input() isActive() {
    deprecated(this, 'isActive');
  }
  @Input() check() {
    deprecated(this, 'check');
  }
  @Input() value = 'on';

  @Output() readonly change: EventEmitter<any> = new EventEmitter();
  @Output() readonly blur: EventEmitter<any> = new EventEmitter();
  @Output() readonly checkedChange: EventEmitter<any> = new EventEmitter();
  @Output() readonly _indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('input', { static: false }) _inputElement: ElementRef<HTMLInputElement>;
  
  private _checked = false;
  private _disabled: boolean;
  private _indeterminate: boolean;
  private _required: boolean;
  private onChange: (value: any) => void = (value: any) => {
    this.change.emit(value);
  };
  private onTouched: () => void = () => {
    // this.blur.emit();
  };
  
  @Input() get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = coerceBooleanProperty(value); }

  @Input() get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    value = coerceBooleanProperty(value);
    if (this._checked !== value) {
      this._checked = value;
      this.onChange(this._checked ? this.value : null);
      this.cdr.markForCheck();
    }
  }
  @Input() get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    value = coerceBooleanProperty(value);
    if (this._disabled !== value) {
      this._disabled = value;
      this.cdr.markForCheck();
    }
  }
  @Input() get indeterminate(): boolean { return this._indeterminate; }
  set indeterminate(value: boolean) {
    value = coerceBooleanProperty(value);
    if (this._indeterminate != value) {
      this._indeterminate = value;
      if (this._inputElement) {
        if (this._indeterminate) {
          this.checked = false;
          this.renderer.setAttribute(this._inputElement.nativeElement, 'indeterminate', 'true');
        } else {
          this.renderer.removeAttribute(this._inputElement.nativeElement, 'indeterminate');
        }
      }
      this._indeterminateChange.emit(this.indeterminate);
      this.cdr.markForCheck();
    }
  }
  

  constructor(@Self() @Optional() public control: NgControl, public cdr: ChangeDetectorRef,
  public renderer: Renderer2, private _focusMonitor: FocusMonitor, public element: ElementRef) {
    if (control) {
      control.valueAccessor = this;
    }
    this._focusMonitor.monitor(this.element, true).subscribe((origin) => {
      console.log(origin);
    })
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(value: any) {
    this.checked = !!value;
  }

  toggle(): void {
    if (!this.disabled) {
      if (!this.checked && this.indeterminate) {
        this._inputElement.nativeElement.indeterminate = false;
        this._inputElement.nativeElement.checked = false;
        this._indeterminate = false;
        this._checked = false;
      } else {
        this.checked = !this.checked;
      }
      this.cdr.markForCheck()
    }
  }
  prevent(event) {
    event.stopPropagation();
  }
  onClick(event) {
    event.stopPropagation();
    if (this.indeterminate) {
      this.toggle()
    } else {
      if (event.target === this._inputElement.nativeElement) {
        this.toggle()
      }
    }
  }
}
