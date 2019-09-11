import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Decimal } from 'decimal.js';

@Component({
  selector: 'sw-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ]
})

export class InputNumberComponent implements ControlValueAccessor {
  oldValue;
  prefix = {
    usd: '$',
    cad: 'C$',
    percent: '%',
    integer: ''
  };
  @Input() type: 'usd' | 'cad' | 'percent' | 'integer' = 'integer';


  @ViewChild('input', {static: true}) input: ElementRef;
  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    private renderer: Renderer2
  ) {}

  get icon() {
    return this.prefix[this.type];
  }

  public setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(value: string | number): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', value);
  }
  onBlur(event?: Event) {
    this.onTouched();
  }

  isEmpty(value) {
    return !(value && value.valueOf().length > 0);
  }

  setValue(value) {
    this.onChange(value);
    this.renderer.setProperty(this.input.nativeElement, 'value', value.valueOf());
    this.oldValue = value;
  }

  resetValue() {
    this.onChange(null);
    this.renderer.setProperty(this.input.nativeElement, 'value', '');
    this.oldValue = null;
  }

  revertValue() {
    if (this.oldValue) {
      this.renderer.setProperty(this.input.nativeElement, 'value', this.oldValue);
    }
  }

  changed(event: Event) {
    const newValue = this.input.nativeElement.value.replace(/[^0-9\.]+/g, '');
    try {
      if (newValue.length > 0) {
        newValue = new Decimal(newValue);
        if (!newValue.isNaN()) {
          if (this.type === 'integer') {
            if (newValue.isInt() === false) {
              if (this.oldValue) {
                this.revertValue();
              } else {
                this.resetValue();
              }
            } else {
              this.setValue(newValue);
            }

          } else {
            this.setValue(newValue);
          }
        }
      } else {
        this.resetValue();
      }
    } catch (error) {
      if (this.oldValue) {
        this.revertValue();
      } else {
        console.error(error);
      }
    }
  }

}
