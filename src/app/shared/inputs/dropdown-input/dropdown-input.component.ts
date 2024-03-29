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
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
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
  dropdownRawList: any[];
  _multiple = false;
  form: FormGroup;
  @Input() isActive = true;
  @Input() isClearable = false;
  @Input() canDeselect = true;
  @Input() disabled = false;
  @Input() dropdownSubHeader = false;
  @Input() dropdownUsers = false;
  @Input() isDisplaySelected = true;
  @Input() isSumDisplay = false;
  @Input() maxHeight = 'auto';
  @Input() panelClass = 'dropdown-overlay';
  @Input() search = false;
  @Input() style = '';
  @Input() type: 'outline' | 'table-header';
  @Input() typeItem: 'purpure';

  @Input() set selectValue(opt: [any]) {
    if (opt[0] === null) {
      this._sm.clear();
    }
  }

  @Input()
  set multiple(opt: boolean) {
    this._multiple = !!opt;
    this._sm = new SelectionModel(this._multiple);
  }

  @Input()
  set options(opts: any[]) {
    if (opts) {
      this.dropdownList = opts;
      this.dropdownRawList = opts;
    }
  }

  @Output() isPopupShown = new EventEmitter();

  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.form = this.fb.group({
      search: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this._sm = new SelectionModel(this._multiple);
    this.form.valueChanges.subscribe(value => {
      if (this.dropdownUsers) {
        if (!value.search.length) {
          this.dropdownList = this.dropdownRawList;
        } else {
          this.dropdownList = this.dropdownRawList.map(item => {
            if (item.name.toLowerCase().includes(value.search.toLowerCase())) {
              return item;
            }
          }).filter(item => item);
        }
      }
    });
  }

  get value() {
    return this._sm.selected;
  }

  get active() {
    return !!this._ref;
  }

  writeValue(items?: any[]): void {
    this._sm.clear();

    if (items && items.length) {
      this._sm.select(...items);
    }

    this.cdr.markForCheck();
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  isSelected(item) {
    return this._sm.selected.find(option => option === item);
  }

  isEmpty() {
    return !this.active && this._sm.isEmpty();
  }

  select(item: any): void {
    if (this.isActive) {
      if (this.canDeselect) {
        this._sm.toggle(item);
      } else {
        this._sm.select(item);
      }

      if (!this._multiple) {
        this._ref.close();
      }

      this.onChange(this._sm.selected);
      this.cdr.markForCheck();
    }
  }

  remove(item, event?: Event) {
    if (!this.disabled) {
      if (this.isActive) {
        if (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }

        this._sm.deselect(item);
        this.onChange(this._sm.selected);
        this.cdr.markForCheck();

        return false;
      }
    }
  }

  showPopup(e: any): void {
    if (!(e && e.target && e.target.className && e.target.className.includes('container__icon--clear'))) {
      this.isPopupShown.emit(true);
      if (!!this.disabled) {
        return;
      }

      this._ref = this.popup.open({
        origin: this.holder,
        content: this.droplist,
        panelClass: this.panelClass
      });

      this._ref.afterClosed$.subscribe(result => {
        this.isPopupShown.emit(false);
        this._ref = null;
        this.form.controls.search.setValue('', {emitEvent: false});
        this.dropdownList = this.dropdownRawList;
        if (this.onTouched) this.onTouched();
        this.cdr.markForCheck();
      });
    }
  }

  clear(): void {
    if (!this.disabled) {
      this._sm.clear();
      this.onChange(this._sm.selected);
    }
  }
}
