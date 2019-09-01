import {
  AfterContentInit,
  Component,
  Input, OnDestroy,
  OnInit, ViewChild, ElementRef, forwardRef, ViewEncapsulation, ChangeDetectorRef,
} from '@angular/core';

import {Subject} from 'rxjs';
import { Popup } from '@app/core/services/popup/popup.service';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

const DROPDOWN_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'sw-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [DROPDOWN_CONTROL_ACCESSOR],
})

export class DropdownComponent implements OnInit, ControlValueAccessor {

  private _ref;
  private _onChange: Function;
  private control: FormControl = new FormControl('');

  public value;
  public multi: boolean = false;
  public dropdownActive: boolean = false;

  @Input() opts;
  @Input() placeholder: string = 'Placeholder';
  @Input() dropdownList: any;
  @Input() panelClass: string = 'dropdown-overlay';
  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;


  constructor(
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) {
    this.control.valueChanges.subscribe(v => {
      console.log('New value', v, this.dropdownActive);
    })
  }

  ngOnInit(): void {
  
  }

  writeValue(v) {
    this.value = v;
  }

  registerOnTouched(fn: Function) {
  }

  registerOnChange(fn: Function) {
    this._onChange = fn;
  }

  select(item) {
    this._onChange(item);
  }

  showPopup() {
    this.dropdownActive = true;
    this._ref = this.popup.open({
      origin: this.holder,
      content: this.droplist,
      panelClass: this.panelClass
    });
    this._ref.afterClosed$.subscribe((result) => {
      this.dropdownActive = false;
      console.log(result);
      this.cdr.markForCheck();
    })
  }

}



