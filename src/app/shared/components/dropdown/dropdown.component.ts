import {
  AfterContentInit,
  Component,
  Input, OnDestroy,
  OnInit, ViewChild, ElementRef, forwardRef,
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
  providers: [DROPDOWN_CONTROL_ACCESSOR]
})

export class DropdownComponent implements OnInit, ControlValueAccessor, OnDestroy {

  private _ref;
  private _onChange: Function;
  private control: FormControl = new FormControl([]);

  public value;

  @Input() dropdownList: any;
  @Input() nested = false;
  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  private dropdownActive = false;

  constructor(
    private popup: Popup
  ) {
    this.control.valueChanges.subscribe(v => {
      console.log('New value', v);
    })
  }

  ngOnInit(): void {
  
  }

  writeValue(v) {
    this.value = v;
  }

  registerOnTouched(fn: Function) {
    console.log('toched');
  }

  registerOnChange(fn: Function) {
    console.log('on change set');
    this._onChange = fn;
  }

  select(item) {
    this._onChange(item);
  }

  showPopup() {
    this._ref = this.popup.open({
      origin: this.holder,
      content: this.droplist,
      panelClass: ''
    })
    console.log(this._ref);
  }

  ngOnDestroy(): void {
  }

}



