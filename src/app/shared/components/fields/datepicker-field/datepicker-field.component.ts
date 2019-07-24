import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-field',
  templateUrl: './datepicker-field.component.html',
  styleUrls: ['./datepicker-field.component.scss']
})
export class DatePickerFieldComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() value: Date;
  @Input() id: string;
  @Input() label = '';
  @Input() isInvalid = false;
  @Input() width?: number = null;
  @Output() onChangeField = new EventEmitter();

  bsConfig = { containerClass: 'theme-blue', showWeekNumbers: false, dateInputFormat: 'MMMM DD, YYYY' };

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange = (_: any) => {};
  onTouched = () => {};


  onInput() {
    this.isInvalid = this.validateValue();
    this.onChange(this.value);
  }

  validateValue(): boolean {
    return !this.value;
  }

}
