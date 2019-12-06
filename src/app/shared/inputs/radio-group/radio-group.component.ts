import { SelectionModel } from '@angular/cdk/collections';
import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const RADIOGROUP_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'sw-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [RADIOGROUP_CONTROL_ACCESSOR]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {
  _options: any[];
  onChange: Function;
  onTouched: Function;
  private _sm: SelectionModel<any>;
  @Input() readonly;

  @Input()
  set options(opt: any[]) {
    if (opt) {
      this._options = opt;
    }
  }
  @Output() readonly change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this._sm = new SelectionModel(false);
  }

  isSelected(item: any) {
    const selected = this._sm.selected.find(option => option === item);
    return selected;
  }

  select(item: any) {
    if (!this.readonly) {
      this._sm.select(item);
      this.onChange(item);
      this.onTouched();
      this.change.emit(item);
    }
  }

  writeValue(item): void {
    if (item) { this._sm.select(item); }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
