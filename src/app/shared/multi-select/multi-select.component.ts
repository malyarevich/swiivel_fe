import { Component, OnInit, Input, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

const MULTISELECT_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelectComponent),
  multi: true
}; 

@Component({
  selector: 'sw-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [MULTISELECT_CONTROL_ACCESSOR]
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor {

  private _onChange: Function;
  private _onTouched: Function;
  private _sm: SelectionModel<any>;

  public _multiple: boolean = true;
  public _mode: string = 'none';

  @Input() set multi(m: boolean) {
    if (m === true) this._mode = 'checkbox';
    this._multiple = m;
    this._sm = new SelectionModel(this._multiple);    
  }
  // Type can be 'radio', 'checkbox', 'none'. Defaults to 'none';
  @Input() set mode(t: string) {
    if (t === 'radio') {
      this._multiple = false;
      this._sm = new SelectionModel(this._multiple);  
    } 
    this._mode = t;
  }
  @Input() list: any;
  
  constructor() { }

  ngOnInit() {
    this._sm = new SelectionModel(this._multiple);
  }


  writeValue(): void {

  }

  registerOnTouched(fn:  Function): void {
    this._onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  isSelected(item) {
    const selected = this._sm.selected.find(option => option.title === item.title);
    return selected;
  }
  
  select(value): void {
    if (this._multiple === true) { // Need to add filter params
      const selected = this._sm.selected.find((s) => (s.title == value.title));
      if (selected) {
        this._sm.deselect(selected);
      } else {
        this._sm.select(value);
      }
    } else if (this._multiple === false) {
      this._sm.select(value)
    }
    this._onChange(this._sm.selected);
    this._onTouched();
  }
}
