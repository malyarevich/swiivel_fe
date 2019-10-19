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
  _multiple = false;

  @Input() isActive = true;
  @Input() dropdownSubHeader = false;
  @Input() isDisplaySelected = true;
  @Input() disabled = false;
  @Input() panelClass = 'dropdown-overlay';
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

  @Output() isPopupShown = new EventEmitter();

  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef) {}

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
    if (items && items.length > 0) this._sm.select(...items);
    this.cdr.markForCheck();
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  isSelected(item) {
    const selected = this._sm.selected.find(option => option === item);
    return selected;
  }

  isEmpty() {
    return !this.active && this._sm.isEmpty();
  }

  select(item: any): void {
    if (this.isActive) {
      this._sm.toggle(item);
      if (!this._multiple) {
        this._ref.close();
      }
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
      this._sm.deselect(item);
      this.onChange(this._sm.selected);
      this.cdr.markForCheck();
      return false;
    }
  }

  showPopup(): void {
    // if (this.isActive) {
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
      this.onTouched();
      this.cdr.markForCheck();
    });
    // }
  }
}
