import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Field } from 'src/app/models/data-collection/field.model';

//TODO: Refactoring of the class
@Component({
  selector: 'app-hebrew-date-field',
  templateUrl: './hebrew-date-field.component.html',
  styleUrls: ['./hebrew-date-field.component.scss']
  // providers: [
  //   { provide: NgbCalendar, useClass: NgbCalendarHebrew },
  //   { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew }
  // ]
})
export class HebrewDateFieldComponent implements OnInit, OnDestroy {
  // model: NgbDateStruct;
  model: any;
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  isLoaded: boolean = false;
  onValueChangeSubscription: Subscription;
  // private calendar: NgbCalendar, public i18n: NgbDatepickerI18n

  constructor() {
    // this.dayTemplateData = this.dayTemplateData.bind(this);
  }

  ngOnInit() {
    if (this.field._id) {
      this.value = this.fg.get(this.field._id).value;
      if (!this.field.options.readonly) {
        this.onValueChangeSubscription = this.fg
          .get(this.field._id)
          .valueChanges.subscribe(val => {
            this.value = val;
          });
      }

      if (this.field.options.readonly) {
        this.fg.controls[this.field._id].disable();
      }
    }
    this.isLoaded = true;
  }

  // dayTemplateData(date: NgbDate) {
  //   return {
  //     gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
  //   };
  // }

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
