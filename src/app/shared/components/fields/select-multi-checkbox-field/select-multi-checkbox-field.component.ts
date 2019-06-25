import {
  Component, EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select-multi-checkbox-field',
  templateUrl: './select-multi-checkbox-field.component.html',
  styleUrls: ['./select-multi-checkbox-field.component.scss']
})
export class SelectMultiCheckboxFieldComponent  implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() labelTitle: string;
  @Input() id: string;
  @Input() items: [any];
  @Input() isInvalid = false;
  @Input() idElement: string;
  @Input() bindLabel = 'label';
  @Input() bindValue = 'value';
  @Input() searchable = false;
  @Input() showClearBtn = false;
  @Output() selectedItems: EventEmitter<any> = new EventEmitter<any>();

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
    this.selectedItems.emit(value);
    return value;
  }
  onTouched() {}
}
