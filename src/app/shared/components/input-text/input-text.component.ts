import { Component, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sw-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class InputTextComponent implements ControlValueAccessor {

  private control: FormControl = new FormControl();
  private onChange: any;
  private errors: [];

  @Input() readonly: boolean = false;

  constructor() {
    this.control.valueChanges.subscribe(value => this.onChange(value));
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable({emitEvent: false});
    } else {
      this.control.enable({emitEvent: false});
    }
  }

  public registerOnTouched(fn: any): void {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public writeValue(obj: any): void {
    this.control.setValue(obj, {emitEvent: false});
  }

}
