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
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';


const deprecated = (_this: any, name = '') => {
  console.warn(`Input ${name} is deprecated`, _this);
};
@Component({
  selector: 'sw-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  host: {
    '[class.checked]': 'checked',
    // Note: under normal conditions focus shouldn't land on this element, however it may be
    // programmatically set, for example inside of a focus trap, in this case we want to forward
    // the focus to the native element.
    '(focus)': '_inputElement.nativeElement.focus()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRadioComponent implements OnInit, AfterViewInit {

  
  @Input() get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    value = coerceBooleanProperty(value);
    if (this._checked !== value) {
      this._checked = value;
      this.onChange(this._checked ? this.value : null);
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

  @Input() get disabled(): boolean { return this._disabled || (this.group !== null && this.group.disabled); }
  set disabled(value: boolean) {
    value = coerceBooleanProperty(value);
    if (this._disabled !== value) {
      this._disabled = value;
      this.cdr.markForCheck();
    }
  }

  @Input() get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = coerceBooleanProperty(value); }


  @Output() readonly change: EventEmitter<any> = new EventEmitter();
  // @Output() readonly blur: EventEmitter<any> = new EventEmitter();
  // @Output() readonly _indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  group: RadioGroupComponent;
  private _checked = false;
  private _disabled: boolean;
  private _required: boolean;
  private _value: any = null;
  public name: string;

  private _removeUniqueSelectionListener: () => void = () => {};

  @ViewChild('input', { static: false }) _inputElement: ElementRef<HTMLInputElement>;


  @HostListener('click', ['$event'])
  @HostListener('keydown', ['$event']) onEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target === event.target) {
      if (event instanceof KeyboardEvent) {
        if (event.code === 'Space') {
          if (!this.disabled) {
            this.group.value = this._value;
          }
        }
        else if (event.code === 'Tab') {
          let next = this.element.nativeElement.nextElementSibling;
          if (next) {
            next.focus();
          }
        }
      } else if (event instanceof MouseEvent) {
        if (!this.disabled) {
          this.group.value = this._value;
        }
      } else {
        console.log(event)
      }

    }
  }
  @HostListener('blur', ['$event']) onBlur(event: Event) {
    this.onTouched();
  };
  @HostBinding() tabIndex: number = 0;
 
  private onChange: (value: any) => void = (value: any) => {
    this.change.emit(value);
  };
  private onTouched: () => void = () => {
    // this.blur.emit();
  };
  
  

  constructor(@Optional() group: RadioGroupComponent,
    public cdr: ChangeDetectorRef,
    public renderer: Renderer2,
    private _focusMonitor: FocusMonitor,
    private _radioDispatcher: UniqueSelectionDispatcher,
    public element: ElementRef
  ) {
    // super(element);
    this.group = group;

    this._removeUniqueSelectionListener =
      _radioDispatcher.listen((id: string, name: string) => {
        // if (id !== this.id && name === this.name) {
          this.checked = false;
        // }
      });
  }

  focus(options?: FocusOptions): void {
    this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
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
      if (!origin && this.group) {
        this.group._touch();
      }
    })
  }

  prevent(event) {
    event.stopPropagation();
  }
  onInputChange(event) {
    event.stopPropagation();
    this.checked = true;
    if (this.group) {
      this.group.value = this._value;
      this.onChange(this.value);
    }
  }
}
