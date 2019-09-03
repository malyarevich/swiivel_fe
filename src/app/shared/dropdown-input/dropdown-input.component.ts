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
  styleUrls: ['./dropdown-input.component.scss'],
  providers: [DROPDOWN_CONTROL_ACCESSOR]
})
export class DropdownInputComponent implements OnInit, ControlValueAccessor {

  private _ref;
  private _onChange: Function;
  private _onTouched: Function;
  public _control: FormControl = new FormControl('');

  public value;
  public multi: boolean = true;
  public dropdownActive: boolean = false;
  public list = [
    {title: '1 short ssss'},
    {title: '2 short sfvvad'},
    {title: '3 shorasa'},
    {title: '4 asdaks okapsd '},
    {title: '5 asdokaposkdpao '},
    {title: '6asdk  askmd ask m'},
    {title: '7 okaoweas as mas '},
    {title: '8 asd;alsd malamdwe'},
    {title: '9 dsad plwerls ss'}
  ];

  @Input() opts;
  @Input() dropdownList: any;
  @Input() placeholder: string = 'Placeholder';
  @Input() panelClass: string = 'dropdown-overlay';
  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;


  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {
    this._control.valueChanges.subscribe(v => {
      console.log('New value', v, this.dropdownActive);
    })
  }

  ngOnInit(): void {
  
  }

  writeValue(v): void {
    this.value = v;
  }

  registerOnTouched(fn: Function): void {
    this._onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  select(item): void {
    this._onChange(item);
  }

  showPopup(): void {
    this.dropdownActive = true;
    this._ref = this.popup.open({
      origin: this.holder,
      content: this.droplist,
      panelClass: this.panelClass
    });
    this._ref.afterClosed$.subscribe((result) => {
      this.dropdownActive = false;
      this._onTouched();
      console.log(result);
      this.cdr.markForCheck();
    })
  }

}
