import {Component, forwardRef, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, Input} from '@angular/core';
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
  @Input() options: any;

  @ViewChild('input', {static: true}) input: ElementRef;

  private onChange: (value: any) => void;
  private onTouched: () => void;

  constructor(
    private renderer: Renderer2
  ) {}

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
  onBlur(event: Event) {
    this.onTouched();
  }

  onInput(event: Event) {
    let newValue = this.input.nativeElement.value.replace(/[^0-9\.]+/g, '');
    try {
      if (newValue.length > 0) {
        newValue = new Decimal(newValue);
        if (!newValue.isNaN()) {
          this.onChange(newValue);
          this.renderer.setProperty(this.input.nativeElement, 'value', newValue.valueOf());
          this.oldValue = newValue;
        }
      } else {
        this.onChange(null);
        this.renderer.setProperty(this.input.nativeElement, 'value', '');
        this.oldValue = null;
      }
    } catch (error) {
      if (this.oldValue) {
        this.renderer.setProperty(this.input.nativeElement, 'value', this.oldValue);
      } else {
        console.error(error);
      }
    }
  }

}
