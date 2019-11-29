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
  multi: true,
};

@Component({
  selector: 'sw-dropdown-select-year',
  templateUrl: './dropdown-select-year.component.html',
  styleUrls: ['dropdown-select-year.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DROPDOWN_CONTROL_ACCESSOR],
})
export class DropdownSelectYearComponent implements OnInit, ControlValueAccessor {
  private _ref;
  private _sm: SelectionModel<any>;

  dropdownList: any[];
  onChange: Function;
  onTouched: Function;
  @Input() disabled = false;
  @Input() date: Date;
  @Input() isActive = true;
  @Input() panelClass = 'dropdown-overlay';
  public colors = ButtonColorsEnum;
  public nowYear = new Date().getFullYear();
  public size = ButtonSizeEnum;

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
    this._sm = new SelectionModel(false);
    this.dropdownList = this.getYears(this.nowYear);
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

  writeValue(item?: number): void {
    this._sm.clear();

    if (item) {
      this._sm.select(item);
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

  select(item: number): void {
    if (this.isActive && !this.isYearMoreNowYear(item)) {
      this._sm.select(item);

      this.onChange(item);
      this.cdr.markForCheck();
      this._ref.close();
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
    if (!this.isNextYearsMoreNowYear()) {
      this.dropdownList = this.getYears(this.dropdownList[0] + 24);
    }
  }

  isYearMoreNowYear(year: number): boolean {
    return year > this.nowYear;
  }

  isNextYearsMoreNowYear(): boolean {
    return this.dropdownList[0] + 1 > this.nowYear;
  }
}
