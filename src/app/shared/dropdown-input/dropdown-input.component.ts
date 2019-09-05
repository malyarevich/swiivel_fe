import { Component, OnInit, forwardRef, Input, ViewChild, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Popup } from '@app/core/popup.service';
import { SelectionModel } from '@angular/cdk/collections';

const DROPDOWN_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownInputComponent),
  multi: true
};

@Component({
  selector: 'sw-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['dropdown-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DROPDOWN_CONTROL_ACCESSOR]
})
export class DropdownInputComponent implements OnInit, ControlValueAccessor {

  private _ref;
  private _sm: SelectionModel<any>;
  
  onChange: Function;
  onTouched: Function;
  dropdownList: any[];
  disable: boolean = false;
  _multiple: boolean = false;
  
  @Input() panelClass: string = 'dropdown-overlay';
  @Input() 
  set multiple(opt: boolean) {
    this._multiple = opt === undefined ? false : opt;
    this._sm = new SelectionModel(this._multiple);
  }
  @Input()
  set options(opts: any[]) {
    if (opts) {
      this.dropdownList = opts;
    }
  }

  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this._sm = new SelectionModel(this._multiple);  
  }

  get value() {
    return this._sm.selected;
  }

  get active() {
    return !!this._ref;
  }
    
  writeValue(items: any[]): void {
    this._sm.select(...items);
    this.cdr.markForCheck();
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  isSelected(item) {
    const selected = this._sm.selected.find(option => option === item);
    return selected;
  }

  isEmpty() {
    return !this.active && this._sm.isEmpty();
  }

  select(item): void {
    this._sm.toggle(item);
    if (!this._multiple) this._ref.close();
    this.onChange(this._sm.selected);
    this.cdr.markForCheck();
  }
  
  remove(item, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    this._sm.deselect(item);
    this.onChange(this._sm.selected);
    this.cdr.markForCheck();
    return false;
  }

  showPopup(): void {
    if (!!this.disable) return ;
    
    this._ref = this.popup.open({
      origin: this.holder,
      content: this.droplist,
      panelClass: this.panelClass
    });
    this._ref.afterClosed$.subscribe((result) => {
      this._ref = null;
      this.onTouched();
      this.cdr.markForCheck();
    })
  }

}
