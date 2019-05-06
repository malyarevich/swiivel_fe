import {
  Component,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['select-field.component.scss'],
})
export class SelectFieldComponent  implements OnInit, ControlValueAccessor {
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

  onChange(e) {
    e.preventDefault();
  }
  onTouched() {}
}
