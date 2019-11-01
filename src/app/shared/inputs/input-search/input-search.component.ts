import {
  Component,
  Input,
  OnInit,
  Optional,
  Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'sw-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() id: string;
  @Input() isInvalid = false;
  @Input() placeholder = '';
  @Input() type;
  @Input() isFistSpaceIgnore = false;

  value = '';

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

  writeValue(value: string): void {
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

  onChange(value: string) {
    return value;
  }

  chaneInput() {
    if (this.isFistSpaceIgnore) {
      this.value = this.value.replace(/^\s+|\s+$/g, '');
    }
    this.onChange(this.value);
  }

  onTouched() {}
}
