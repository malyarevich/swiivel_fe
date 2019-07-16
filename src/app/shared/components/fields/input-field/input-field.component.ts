import {
  Component, EventEmitter,
  Input,
  OnInit,
  Output,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() fieldType: 'table' = null;
  @Input() id: string;
  @Input() label = '';
  @Input() pattern: string;
  @Input() isInvalid = false;
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() value: any = '';
  @Input() maxLength?: number = null;
  @Input() max?: number = null;
  @Input() min?: number = null;

  @Output() onChangeField = new EventEmitter();

  // value: any = '';

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}

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

  onChange(value) {
    if (this.type === 'number' && this.max && (value > this.max)) {
      this.value = value = this.max;
    }
    this.onChangeField.emit({ fieldValue: value, id: this.id, type: 'input' });
    return value;
  }
  onTouched() {}
}
