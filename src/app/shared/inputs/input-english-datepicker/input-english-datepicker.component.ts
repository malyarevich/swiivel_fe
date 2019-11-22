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
import { DateFormatter } from '@shared/inputs/input-english-datepicker/date-formatter.provider';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarMonthViewDay,
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

const ENGDATEPICKER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputEnglishDatepickerComponent),
  multi: true
};

@Component({
  selector: 'sw-input-english-datepicker',
  templateUrl: './input-english-datepicker.component.html',
  styleUrls: ['./input-english-datepicker.component.scss'],
  providers: [ENGDATEPICKER_CONTROL_ACCESSOR,
    {
      provide: CalendarDateFormatter,
      useClass: DateFormatter
    }
  ]
})
export class InputEnglishDatepickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  // === variables for calendar ===
  view = 'month';
  viewDate = new Date();
  events: CalendarEvent[] = [];
  selectedMonthViewDay: CalendarMonthViewDay;
  selectedRange: { startDate: CalendarMonthViewDay, endDate: CalendarMonthViewDay } = { startDate: null, endDate: null };
  mouths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public mask = '00/00/0000';

  // ===

  onChange: Function;
  onTouched: Function;

  // value: string = null;
  private destroyed$ = new Subject();
  private ref: PopupRef;
  public days: CalendarMonthViewDay[];

  @Input() isActive = true;
  @Input() value: string = null;
  @Input() placeholder = 'English date';
  @Input() class = 'online_form__data_picker';
  @Input() range = false;
  @Input() separator: '-' | '/' | '.' = '/';
  @Input() format: 'mm-dd-yyyy' | 'dd-mm-yyyy' | 'yyyy-mm-dd' = 'mm-dd-yyyy';

  @ViewChild('datepicker', { static: false }) datepicker;
  @ViewChild('holder', { static: false }) holder;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.mask = this.range ? '00/00/0000 - 00/00/0000' : '00/00/0000';
  }

  get dateFormat(): string {
    return this.format.replace(/m/g, 'M').replace(/-/g, this.separator);
  }

  writeValue(value: string): void {
    this.value = value;
  }

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

  dayClicked(day: any): void {
    if (!this.range) {
      if (this.isActive) {
        if (this.selectedMonthViewDay) {
          delete this.selectedMonthViewDay.cssClass;
        }
        if (this.selectedMonthViewDay === day) {
          this.value = '';
          this.onChange(this.value);
          this.selectedMonthViewDay = null;
        } else {
          this.value = DateTime.fromJSDate(day.date).toFormat(this.dateFormat);
          day.cssClass = 'cal-day-selected';
          this.selectedMonthViewDay = day;
          this.onChange(this.value);
        }
        this.cdr.markForCheck();
      }
    } else {
      if (!this.selectedRange.startDate || !this.selectedRange.endDate) {
        if (!this.selectedRange.startDate) {
          this.selectedRange.startDate = day;
        } else if (day.date.getTime() < this.selectedRange.startDate.date.getTime()) {
          this.selectedRange.endDate = this.selectedRange.startDate;
          this.selectedRange.startDate = day;
        } else {
          this.selectedRange.endDate = day;
        }
      } else {
        this.clearCalendar();
        this.selectedRange.startDate = day;
        this.selectedRange.endDate = null;
      }
      if (this.selectedRange.startDate) {
        this.value = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
      }
      if (this.selectedRange.endDate) {
        this.value += ' - ' + DateTime.fromJSDate(this.selectedRange.endDate.date).toFormat(this.dateFormat);
      }
      this.cdr.markForCheck();
      this.colorRange();
      this.onChange(this.selectedRange);
    }
  }

  colorRange(): void {
    this.days.forEach(day => {
      if ((this.selectedRange.startDate && day.date.getTime() === this.selectedRange.startDate.date.getTime() ) ||
        (this.selectedRange.endDate && this.selectedRange.endDate.date.getTime() === day.date.getTime())) {
        day.cssClass = 'cal-day-selected';
      }
      if (this.selectedRange.startDate &&
        day.date > this.selectedRange.startDate.date &&
        this.selectedRange.endDate &&
        day.date < this.selectedRange.endDate.date) {
        day.cssClass = 'cal-day-selected-range';
      }
    });
  }

  clearCalendar(): void {
    this.days.forEach(day => {
      delete day.cssClass;
    });
  }

  openDatepicker(e: any): void {

    if (e && e.target && e.target.className && e.target.className.includes('fa-times')) {
      e.preventDefault();
      this.value = '';
      this.onChange(this.value);
    } else {
      this.ref = this.popup.open({
        origin: this.holder,
        content: this.datepicker,
        panelClass: 'dropdown-overlay'
      });
      this.ref.afterClosed$.pipe(takeUntil(this.destroyed$)).subscribe(result => {
        this.ref = null;
        this.onTouched();
      });
    }
  }

  close(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  public isEmpty(value: string): boolean {
    return !(value && value.trim().length > 0);
  }

  public clear(): void {
    this.selectedRange.startDate = null;
    this.selectedRange.endDate = null;
    this.clearCalendar();
    this.value = '';
    this.onChange(this.value);
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    this.days = body;
    this.clearCalendar();
    this.colorRange();
  }

  public changeValue(value: any): void {
    if (!this.range) {
      this.value = value;
      this.onChange(this.value);
    }
  }


}
