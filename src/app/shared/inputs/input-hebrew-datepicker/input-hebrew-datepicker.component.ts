import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarView,
  DAYS_OF_WEEK
} from 'angular-calendar';
import {
  addDays,
  addMonths,
  addWeeks,
  subDays,
  subMonths,
  subWeeks
} from 'date-fns';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const HEBREWDATEPICKER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputHebrewDatepickerComponent),
  multi: true
};

@Component({
  selector: 'sw-input-hebrew-datepicker',
  templateUrl: './input-hebrew-datepicker.component.html',
  styleUrls: ['./input-hebrew-datepicker.component.scss'],
  providers: [HEBREWDATEPICKER_CONTROL_ACCESSOR]
})
export class InputHebrewDatepickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  // === variables for calendar ===
  view = 'month';
  clickedDate: Date;
  viewDate = new Date();
  events: CalendarEvent[] = [];
  selectedMonthViewDay: CalendarMonthViewDay;
  selectedDays: any = [];
  // ===

  onChange: Function;
  onTouched: Function;

  // value: string = null;
  private destroyed$ = new Subject();
  private ref: PopupRef;

  @Input() isActive = true;
  @Input() value: string = null;
  @Input() placeholder = 'Hebrew date';
  @Input() range = false;
  @Input() separator: '-' | '/' | '.' = '/';
  @Input() format: 'mm-dd-yyyy' | 'dd-mm-yyyy' | 'yyyy-mm-dd' = 'mm-dd-yyyy';

  @ViewChild('datepicker', { static: false }) datepicker;
  @ViewChild('holder', { static: false }) holder;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  get dateFormat(): string {
    return this.format.replace(/m/g, 'M').replace(/-/g, this.separator);
  }

  writeValue(): void {}

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  decrement(): void {
    const subFn: any = {
      day: subDays,
      week: subWeeks,
      month: subMonths
    }[this.view];

    this.viewDate = subFn(this.viewDate, 1);
  }

  increment(): void {
    const addFn: any = {
      day: addDays,
      week: addWeeks,
      month: addMonths
    }[this.view];

    this.viewDate = addFn(this.viewDate, 1);
  }

  dayClicked(day: CalendarMonthViewDay): void {
    if (this.isActive) {
      if (this.selectedMonthViewDay) {
        delete this.selectedMonthViewDay.cssClass;
      }
      if (this.selectedMonthViewDay === day) {
        this.value = '';
        this.selectedMonthViewDay = null;
        this.onChange(this.value);
      } else {
        this.value = DateTime.fromJSDate(day.date).toFormat(this.dateFormat);
        day.cssClass = 'cal-day-selected';
        this.selectedMonthViewDay = day;
        this.onChange(this.value);
      }
      this.cdr.markForCheck();
    }
  }

  openDatepicker(): void {
    // if (this.isActive) {
    this.ref = this.popup.open({
      origin: this.holder,
      content: this.datepicker,
      panelClass: 'dropdown-overlay'
    });
    this.ref.afterClosed$.pipe(takeUntil(this.destroyed$)).subscribe(result => {
      // console.log('Datepiker result:', result)
      this.ref = null;
      this.onTouched();
    });
    // }
  }

  close(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }
}
