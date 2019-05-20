import {
  Component,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select-multi-search-field',
  templateUrl: './select-multi-search-field.component.html',
  styleUrls: ['./select-multi-search-field.component.scss']
})
export class SelectMultiSearchFieldComponent implements OnInit, ControlValueAccessor {
  @Input() defaultItemIndex: number;
  @Input() disabled: boolean;
  @Input() labelTitle: string;
  @Input() idElement: string;
  @Input() isInvalid = false;
  @Input() items: [any];
  @Input() bindLabel = 'label';
  @Input() bindValue = 'value';
  @Input() showClearBtn = false;

  value: any;

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
    if (Array.isArray(value)) {
      this.value = value.map(item => item.id);
    }
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

  onChange(e) {
    e.preventDefault();
  }
  onTouched() {}
}
