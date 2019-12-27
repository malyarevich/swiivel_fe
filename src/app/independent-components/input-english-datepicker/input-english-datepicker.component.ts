import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';
import { ButtonExpandEnum } from '@shared/buttons/buttonExpand.enum';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarMonthViewDay,
} from 'angular-calendar';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DateFormatter } from './date-formatter.provider';

const ENGDATEPICKER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputEnglishDatepickerComponent),
  multi: true,
};

@Component({
  selector: 'sw-input-english-datepicker',
  templateUrl: './input-english-datepicker.component.html',
  styleUrls: ['./input-english-datepicker.component.scss'],
  providers: [ENGDATEPICKER_CONTROL_ACCESSOR,
    {
      provide: CalendarDateFormatter,
      useClass: DateFormatter,
    }
  ]
})
export class InputEnglishDatepickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor {

  constructor(private popup: Popup, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.selectDateForm = this.fb.group({
      month: new FormControl(this.months[0], Validators.required),
      year: new FormControl(new Date().getFullYear(), Validators.required)
    });
    this.inputDateForm = this.fb.group({
      dateFrom: new FormControl(''),
      dateTo: new FormControl(''),
    });
  }

  get dateFormat(): string {
    return this.format.replace(/m/g, 'M').replace(/-/g, this.separator);
  }
  // === variables for calendar ===
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
  selectDateForm: FormGroup;
  inputDateForm: FormGroup;

  public mask = '00/00/0000';

  private destroyed$ = new Subject();
  private ref: PopupRef;
  public days: CalendarMonthViewDay[];
  public buttonExpand = ButtonExpandEnum;
  public inputStartDateInFocus = false;
  public inputEndDateInFocus = false;

  @Input() class = 'online_form__data_picker';
  @Input() format: 'mm-dd-yyyy' | 'dd-mm-yyyy' | 'yyyy-mm-dd' = 'mm-dd-yyyy';
  @Input() isActive = true;
  @Input() placeholder = 'English date';
  @Input() range = false;
  @Input() separator: '-' | '/' | '.' = '/';
  @Input() value: string = null;

  @Output() readonly change: EventEmitter<any> = new EventEmitter();

  @ViewChild('datepicker', { static: false }) datepicker;
  @ViewChild('holder', { static: false }) holder;

  // ===

  private onChange: (value: any) => void = (value: any) => {
    this.change.emit(value);
  };
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.mask = this.range ? '00/00/0000 - 00/00/0000' : '00/00/0000';
    this.changeCalenderViewDate();
    this.selectDateForm.valueChanges.subscribe(value => {
      this.viewDate = new Date(value.year, value.month[0].id, 1);
    });
    this.inputDateForm.controls.dateFrom.valueChanges.subscribe(value => {
      if (this.inputStartDateInFocus) {
        this.updateCalendarValues(value, 'start');
      }
    });
    this.inputDateForm.controls.dateTo.valueChanges.subscribe(value => {
      if (this.inputEndDateInFocus) {
        this.updateCalendarValues(value, 'end');
      }
    });
  }

  updateCalendarValues(value: string, extreme: string): void {
    if (value && value.length === 8) {
      const dateInput =  new Date(value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8));
      if (!isNaN(dateInput.getTime())) {
        const monthIndex = parseInt(value.slice(0, 2), 10) - 1;
        this.selectDateForm.get('month').setValue([this.months[monthIndex]], { emitEvent: true});
        this.selectDateForm.get('year').setValue([value.slice(4, 8)], { emitEvent: true});
        setTimeout(() => {
          this.clearCalendar();
          this.selectInputDay(dateInput, extreme);
          if (!this.range) {
            this.value = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
          } else {
            if (this.selectedRange.startDate) {
              this.value = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
            }
            if (this.selectedRange.endDate) {
              this.value += ' - ' + DateTime.fromJSDate(this.selectedRange.endDate.date).toFormat(this.dateFormat);
            }
          }
        });
      }
    } else if (value.length === 0) {
        if (extreme === 'start') {
          this.selectedRange.startDate = null;
        } else {
          this.selectedRange.endDate = null;
        }
        this.clearCalendar();
        this.colorRange();
    }
  }

  changeCalenderViewDate(): void {
    this.selectDateForm.get('month').setValue([this.months[this.viewDate.getMonth()]], { emitEvent: true});
    this.selectDateForm.get('year').setValue(this.viewDate.getFullYear(), { emitEvent: true});
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
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
          this.inputDateForm.get('dateFrom').setValue(DateTime.fromJSDate(day.date).toFormat(this.dateFormat), { emitEvent: true});
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

      if (this.selectedRange.startDate) {
        this.value = DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat);
        this.inputDateForm.get('dateFrom').setValue(
          DateTime.fromJSDate(this.selectedRange.startDate.date).toFormat(this.dateFormat),
          { emitEvent: true}
        );
        this.inputDateForm.get('dateTo').setValue('', { emitEvent: true});
      }
      if (this.selectedRange.endDate) {
        this.value += ' - ' + DateTime.fromJSDate(this.selectedRange.endDate.date).toFormat(this.dateFormat);
        this.inputDateForm.get('dateTo').setValue(
          DateTime.fromJSDate(this.selectedRange.endDate.date).toFormat(this.dateFormat),
          { emitEvent: true}
          );
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

  selectInputDay(selectDay: Date, extreme: string): void {
    this.days.forEach(day => {
      if (day.date.getTime() === selectDay.getTime()) {
        if (extreme === 'start') {
          this.selectedRange.startDate = day;
        } else {
          this.selectedRange.endDate = day;
        }
      }
    });
    this.colorRange();
  }

  clearInputs(): void {
    this.inputDateForm.get('dateFrom').setValue(null, { emitEvent: true});
    this.inputDateForm.get('dateTo').setValue( null, { emitEvent: true});
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
    this.clearInputs();
    this.value = '';
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
    if (!this.range) {
      this.value = value;
    }
  }

  apply(): void {
    if (!this.range) {
      this.onChange(this.value);
    } else {
      this.onChange(this.selectedRange);
    }
    this.close();
  }

  disabledApply() {
    if (!this.range) {
      return !(this.inputDateForm.get('dateFrom').value && this.inputDateForm.get('dateFrom').value.length === 8);
    }

    return !(this.inputDateForm.get('dateFrom').value && this.inputDateForm.get('dateFrom').value.length === 8 &&
      this.inputDateForm.get('dateTo').value && this.inputDateForm.get('dateTo').value.length === 8);
  }
}
