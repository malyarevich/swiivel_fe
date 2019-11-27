import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';
import { ButtonExpandEnum } from '@shared/buttons/buttonExpand.enum';
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
  setDate,
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
  months = [
    { id: 0, title: 'January' },
    { id: 1, title: 'February' },
    { id: 2, title: 'March' },
    { id: 3, title: 'April' },
    { id: 4, title: 'May'  },
    { id: 5, title: 'June' },
    { id: 6, title: 'July' },
    { id: 7, title: 'August' },
    { id: 8, title: 'September' },
    { id: 9, title: 'October' },
    { id: 10, title: 'November' },
    { id: 11, title: 'December'}
    ];
  form: FormGroup;

  public mask = '00/00/0000';

  // ===

  onChange: Function;
  onTouched: Function;

  // value: string = null;
  private destroyed$ = new Subject();
  private ref: PopupRef;
  public days: CalendarMonthViewDay[];
  public buttonExpand = ButtonExpandEnum;

  @Input() isActive = true;
  @Input() value: string = null;
  @Input() valueTo: string = null;
  @Input() placeholder = 'English date';
  @Input() class = 'online_form__data_picker';
  @Input() range = 'none';
  @Input() separator: '-' | '/' | '.' = '/';
  @Input() format: 'mm-dd-yyyy' | 'dd-mm-yyyy' | 'yyyy-mm-dd' = 'mm-dd-yyyy';

  @ViewChild('datepicker', { static: false }) datepicker;
  @ViewChild('holder', { static: false }) holder;

  constructor(private popup: Popup, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.form = this.fb.group({
      month: new FormControl(this.months[0], Validators.required),
      year: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.viewDate = new Date();
    this.mask = this.range === 'one-input' ? '00/00/0000 - 00/00/0000' : '00/00/0000';
    this.form.get('month').setValue([this.months[this.viewDate.getMonth()]], { emitEvent: true});
    this.form.get('year').setValue(this.viewDate.getFullYear(), { emitEvent: true});
    this.form.valueChanges.subscribe(value => {
      this.viewDate = new Date(value.year, value.month[0].id, 1);
    });
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
    if (this.range === 'none') {
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

      if (this.range === 'one-input') {
        if (this.selectedRange.startDate) {
          this.value = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
        }
        if (this.selectedRange.endDate) {
          this.value += ' - ' + DateTime.fromJSDate(this.selectedRange.endDate.date).toFormat(this.dateFormat);
        }
      } else {
        if (this.selectedRange.startDate) {
          this.value = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
        }
        if (this.selectedRange.endDate) {
          this.valueTo = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
        }

      }
      this.cdr.markForCheck();
      this.colorRange();
    }
  }

  colorRange(): void {
    this.days.forEach(day => {
      if ((this.selectedRange.startDate && day.date.getTime() === this.selectedRange.startDate.date.getTime() )) {
        day.cssClass = this.selectedRange.endDate ? 'cal-day-selected cal-day-selected-start' : 'cal-day-selected';
      }
      if (this.selectedRange.endDate && this.selectedRange.endDate.date.getTime() === day.date.getTime()) {
        day.cssClass = 'cal-day-selected cal-day-selected-end';
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
    this.valueTo = '';
    this.onChange(this.value);
    this.close();
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
    if (this.range === 'none' || this.range === 'two-inputs') {
      this.value = value;
    }
  }

  public changeValueTo(value: any): void {
      this.valueTo = value;
  }

  apply(): void {
    if (!this.range) {
      this.onChange(this.value);
    } else {
      this.onChange(this.selectedRange);
    }
    this.close();
  }

}
