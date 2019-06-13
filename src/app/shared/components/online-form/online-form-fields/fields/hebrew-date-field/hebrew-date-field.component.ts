import {Component, Input, OnInit} from '@angular/core';
import {
  NgbCalendar,
    NgbCalendarHebrew, NgbDate,
    NgbDatepickerI18n,
    NgbDatepickerI18nHebrew,
    NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import {Field} from '../../../../../../models/vertical-data-collection/field.model';



@Component({
  selector: 'app-hebrew-date-field',
  templateUrl: './hebrew-date-field.component.html',
  styleUrls: ['./hebrew-date-field.component.scss'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarHebrew},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
  ]
})
export class HebrewDateFieldComponent  implements OnInit {

  model: NgbDateStruct;
  @Input() data: Field;

  constructor(private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
    this.dayTemplateData = this.dayTemplateData.bind(this);
    // console.log(this.dayTemplateData);
  }



  dayTemplateData(date: NgbDate) {
    return {
      gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
    };
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
    // console.log(this.calendar);
  }
}
