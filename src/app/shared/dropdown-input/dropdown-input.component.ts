import { Component, OnInit, forwardRef, Input, ViewChild, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Popup } from '@app/core/popup.service';
import { SelectionModel } from '@angular/cdk/collections';
import { pull } from 'lodash';

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
  private _onChange: Function;
  private _onTouched: Function;
  private _sm: SelectionModel<any>;
  
  public _dropdownList: any[];
  public dropdownActive: boolean = false;
  public _disable: boolean = false;
  public _multiple: boolean = false;
  public value: any;
  
  @Input() panelClass: string = 'dropdown-overlay';
  @Input() 
  set multiple(opt: boolean) {
    this._multiple = opt === undefined ? false : opt;
    this._sm = new SelectionModel(this._multiple);
  }
  @Input()
  set options(opts: any[]) {
    this._dropdownList = opts;
  }
  @Input() 
  set disable(opt: boolean) {
    this._disable = opt === undefined ? false : opt;
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

  writeValue(items: any[]): void {
    if (items) {
      this._sm.select(...items.map(opt => opt.value));
      this.setValue();
    } else {
      this.value = [];
    }
  }

  registerOnTouched(fn: Function): void {
    this._onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  isSelected(item) {
    const selected = this._sm.selected.find(option => option.title === item.title);
    return selected;
  }

  select(item): void {
    const selected = this._sm.selected.find((s) => (s == item));
        
    if (selected) {
      this._sm.deselect(selected);
    }
    else {
      this._sm.select(item);
    }
    this.setValue();
    this._onChange(this._sm.selected);
    this._onTouched();
    this.cdr.markForCheck();
  }

  setValue() {
    this.value = this._sm.selected;
  }
  
  remove(item, event: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    pull(this.value, item);
    this._sm.deselect(item);
    this._onChange(this._sm.selected);
    this.cdr.markForCheck();
  }

  showPopup(): void {
    if (this._disable === true) return ;
    
    this.dropdownActive = true;
    this._ref = this.popup.open({
      origin: this.holder,
      content: this.droplist,
      panelClass: this.panelClass
    });
    this._ref.afterClosed$.subscribe((result) => {
      this.dropdownActive = false;
      this._onTouched();
      this.cdr.markForCheck();
    })
  }

}
