import { Component, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
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
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  onChange: Function;
  control: FormControl = new FormControl();
  errors: [];

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) this.control.disable({emitEvent: false});
    else this.control.enable({emitEvent: false});
  }
  registerOnTouched(fn: any): void {
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  writeValue(obj: any): void {
    this.control.setValue(obj, {emitEvent: false});
  }

  constructor() { }

  ngOnInit() {
  }

}
