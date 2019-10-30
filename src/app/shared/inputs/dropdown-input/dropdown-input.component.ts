import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Popup } from '@app/core/popup.service';

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
<<<<<<< HEAD
  isMultiple = false;

  @Input() isActive = true;
=======
  _multiple = false;

  @Input() disabled = false;
>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
  @Input() dropdownSubHeader = false;
  @Input() isActive = true;
  @Input() isClearable = false;
  @Input() isDisplaySelected = true;
  @Input() disabled = false;
  @Input() isClearable = false;
  @Input() style = '';
  @Input() panelClass = 'dropdown-overlay';
<<<<<<< HEAD
=======
  @Input() style = '';
  @Input() type: 'filter' | 'table-header';
  @Input() typeItem: 'purpure';

>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
  @Input() set selectValue(opt: boolean) {
    if (opt[0] === null) {
      this._sm.clear();
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
  @Input()
  set multiple(opt: boolean) {
    this.isMultiple = opt === undefined ? false : opt;
    this._sm = new SelectionModel(this.isMultiple);
  }

  @Input()
  set options(opts: any[]) {
    if (opts) {
      this.dropdownList = opts;
    }
  }

  @Output() isPopupShown = new EventEmitter();

  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._sm = new SelectionModel(this.isMultiple);
  }

  get value() {
    return this._sm.selected;
  }

  get active() {
    return !!this._ref;
  }

  writeValue(items: any[]): void {
<<<<<<< HEAD
    if (items && items.length > 0) { this._sm.select(...items); }
=======
    this._sm.clear();

    if (items && items.length) {
      this._sm.select(...items);
    }

>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
    this.cdr.markForCheck();
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  isSelected(item) {
    return this._sm.selected.find(option => option === item);
  }

  isEmpty() {
    return !this.active && this._sm.isEmpty();
  }

  select(item: any): void {
    if (this.isActive) {
      this._sm.toggle(item);
<<<<<<< HEAD
      if (!this.isMultiple) {
        this._ref.close();
      }
=======

      if (!this._multiple) {
        this._ref.close();
      }

>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
      this.onChange(this._sm.selected);
      this.cdr.markForCheck();
    }
  }

  remove(item, event?: Event) {
    if (this.isActive) {
      if (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
<<<<<<< HEAD
      this._sm.deselect(item);
      this.onChange(this._sm.selected);
      this.cdr.markForCheck();
=======

      this._sm.deselect(item);
      this.onChange(this._sm.selected);
      this.cdr.markForCheck();

>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
      return false;
    }
  }

  showPopup(e: any): void {
<<<<<<< HEAD
    if (!(e && e.target && e.target.className && e.target.className.includes('dropdown_input_container__icon--clear'))) {
=======
    if (!(e && e.target && e.target.className && e.target.className.includes('container__icon--clear'))) {
>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
      this.isPopupShown.emit(true);
      if (!!this.disabled) {
        return;
      }

      this._ref = this.popup.open({
        origin: this.holder,
        content: this.droplist,
        panelClass: this.panelClass
      });
<<<<<<< HEAD
=======

>>>>>>> 1ac37743160ee40bcd2f5918dcc8899d8e751366
      this._ref.afterClosed$.subscribe(result => {
        this.isPopupShown.emit(false);
        this._ref = null;
        this.onTouched();
        this.cdr.markForCheck();
      });
    }
  }

  clear(): void {
    this._sm.clear();
    this.onChange(this._sm.selected);
  }
}
