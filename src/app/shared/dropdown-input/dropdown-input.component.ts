import { Component, OnInit, forwardRef, Input, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { Popup } from '@app/core/popup.service';

const DROPDOWN_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownInputComponent),
  multi: true
};

@Component({
  selector: 'sw-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  providers: [DROPDOWN_CONTROL_ACCESSOR]
})
export class DropdownInputComponent implements OnInit, ControlValueAccessor {

  private _ref;
  private _onChange: Function;
  private _onTouched: Function;
  private _dropdownList: any;

  public _inputControl: FormControl = new FormControl('');
  public _dropdownControl: FormControl = new FormControl([]);
  public dropdownActive: boolean = false;
  public list: any;
  public _disable: boolean = false;

  @Input() opts;
  @Input() multi: boolean = true;
  @Input() 
  set disable(opt: boolean) {
    this._disable = opt;
    this._inputControl.disable();
  }
  @Input() 
  set dropdownList(list) {
    this.list = list;
    this._dropdownList = list;
  };
  @Input() placeholder: string = 'Placeholder';
  @Input() panelClass: string = 'dropdown-overlay';
  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;


  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {
    this._dropdownControl.valueChanges.subscribe(v => {
      this._onChange(v);
      this._onTouched();
    });
    this._inputControl.valueChanges.subscribe(v => {
      this.list = this.filterList(v);
    });
  }

  ngOnInit(): void {
  
  }

  writeValue(v): void {
    this._dropdownControl.setValue(v, { emitEvent: false });
  }

  registerOnTouched(fn: Function): void {
    this._onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  filterList(s: string) {
    if (this._dropdownList) {
      const result = this._dropdownList.filter((o) => {
        return o['title'].toString().toLowerCase().indexOf(s.toLowerCase()) != -1;
      });
      return result;
    }
  }

  select(item): void {
    this._onChange(item);
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
