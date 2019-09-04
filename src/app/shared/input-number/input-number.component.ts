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

  public writeValue(obj: any): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', obj);
  }

  onInputChange(event) {
    // this.onChange(value);
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    this.input.nativeElement.value = this.input.nativeElement.value.replace(/\D+/g, '');
    this.onChange(this.input.nativeElement.value);
    // console.log(event);
    // console.log(isNaN(parseFloat(value)));
    // if (!isNaN(parseFloat(value))) {
    //   // return false;
    //   console.log(value);
    // } else {
    //   return false;
    // }
    // const regexp = new RegExp('/^[-+]?[0-9]+\\.[0-9]+$/gi');
    // const result = regexp.exec(value);
    // console.log(parseFloat(value));
    // console.log(value);
    // const value = new Decimal(inputValue);
    // if (value) {
    //   console.log(value);
      // switch (this.options.type) {
      //   case 'Decimal':
      //     value = value.split('.');
      //     const integer = value[0];
      //     const fraction = value[1];
      //     if (fraction.length > this.options.places) {
      //       return false;
      //     } else {
      //       this.onChange(value);
      //     }
      //     break;
      //   case 'Percentage':
      //     break;
      //   case 'Currency':
      //     break;
      // }
    // }
  }

}
