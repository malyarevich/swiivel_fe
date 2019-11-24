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

  constructor(
    @Self()
    @Optional()
    public control: NgControl
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }
  @Input() id: string;
  @Input() placeholder: string;
  @Input('isFistSpaceIgnore') isFirstSpaceIgnore = false;
  @Input() type: string;
  writeValue = (value: string) => {};
  registerOnChange = (fn: any) => {};
  registerOnTouched = (fn: any) => {};

  ngOnInit() {}

  onInput() {
    if (this.isFirstSpaceIgnore) {
      this.control.control.setValue(this.control.control.value.trimStart());
    }
  }

}
