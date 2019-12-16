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
  HostBinding,
  AfterViewInit,
  OnInit
} from '@angular/core';

import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RadioGroupComponent } from './input-group.component';


const deprecated = (_this: any, name = '') => {
  console.warn(`Input ${name} is deprecated`, _this);
};
@Component({
  selector: 'sw-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRadioComponent implements OnInit, AfterViewInit {
  @HostListener('click', ['$event'])
  @HostListener('keydown', ['$event']) onEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target === event.target) {
      if (event instanceof KeyboardEvent) {
        if (event.code === 'Space') this.checked=true;
        else if (event.code === 'Tab') {
          let next = this.element.nativeElement.nextElementSibling;
          if (next) {
            next.focus();
          }
        }
      } else if (event instanceof MouseEvent) {
        this.checked = true;;
      } else {
        console.log(event)
      }

    }
  }
  @HostListener('blur', ['$event']) onBlur(event: Event) {
    this.onTouched();
  };
  @HostBinding() tabIndex: number = 0;

  @Output() readonly change: EventEmitter<any> = new EventEmitter();
  @Output() readonly blur: EventEmitter<any> = new EventEmitter();
  @Output() readonly _indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('input', { static: false }) _inputElement: ElementRef<HTMLInputElement>;
  // group: RadioGroupComponent;
  private _checked = false;
  private _disabled: boolean;
  private _required: boolean;
  private _value: any = null;
  public name: string;
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
  @Input() get value(): any { return this._value; }
  set value(value: any) {
    if (this._value != value) {
      this._value = value;
      if (this.group !== null) {
        if (!this.checked) {
          this.checked = this.group.value === value;
        } 
        if (this.checked) {
          this.group.selected = this;
        }
      }
    }
  }
  

  constructor(@Optional() public group: RadioGroupComponent, public cdr: ChangeDetectorRef,
  public renderer: Renderer2, private _focusMonitor: FocusMonitor, public element: ElementRef) {
    if (group) this.group = group;
  }
  public _markForCheck() {
    this.cdr.markForCheck();
  }
  ngOnInit() {
    if (this.group) {
      this.checked = this.group.value === this._value;
      this.name = this.group.name;
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.element, true).subscribe((origin) => {
      console.log(origin);
    })
  }

  prevent(event) {
    event.stopPropagation();
  }
  onInputChange(event) {
    event.stopPropagation();
    this.checked = true;
    if (this.group) {
      this.onChange(this.value);
    }
  }
}
