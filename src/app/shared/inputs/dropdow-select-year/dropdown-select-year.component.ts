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
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';

const DROPDOWN_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownSelectYearComponent),
  multi: true
};

@Component({
  selector: 'sw-dropdown-select-year',
  templateUrl: './dropdown-select-year.component.html',
  styleUrls: ['dropdown-select-year.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DROPDOWN_CONTROL_ACCESSOR]
})
export class DropdownSelectYearComponent implements OnInit, ControlValueAccessor {
  private _ref;
  private _sm: SelectionModel<any>;

  dropdownList: any[];
  _multiple = false;
  onChange: Function;
  onTouched: Function;
  @Input() disabled = false;
  @Input() date: Date;
  @Input() isActive = true;
  @Input() panelClass = 'dropdown-overlay';
  public colors = ButtonColorsEnum;
  public size = ButtonSizeEnum;

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
    }
  }

  @Output() isPopupShown = new EventEmitter();

  @ViewChild('droplist', { static: false }) droplist;
  @ViewChild('holder', { static: false, read: ElementRef }) holder: ElementRef;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef) {
    console.log(this);
  }

  ngOnInit(): void {
    this._sm = new SelectionModel(this._multiple);
    this.dropdownList = this.getYears(this.date.getFullYear());
  }

  getYears(year: number): number[] {
    const years = [year + 1];
    for (let i = 0; i < 24; i ++) {
      years.push(year - i);
    }
    return years;
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

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }

  registerOnChange(fn): void {
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
      this._sm.toggle(item);

      if (!this._multiple) {
        this._ref.close();
      }

      this.onChange(2020);
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

  clickPreviousYears(): void {
    this.dropdownList = this.getYears(this.dropdownList[0] - 26);
  }

  clickNextYears(): void {
    this.dropdownList = this.getYears(this.dropdownList[0] + 24);
  }
}


