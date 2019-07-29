import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import {
  NgbCalendar,
  NgbCalendarHebrew,
  NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-hebrew-date-field",
  templateUrl: "./hebrew-date-field.component.html",
  styleUrls: ["./hebrew-date-field.component.scss"],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarHebrew },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew }
  ]
})
export class HebrewDateFieldComponent implements OnInit, OnDestroy {
  model: NgbDateStruct;
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  onValueChangeSubscription: Subscription;

  constructor(private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
    this.dayTemplateData = this.dayTemplateData.bind(this);
  }

  ngOnInit() {
    this.value = this.field._id ? this.fg.get(this.field._id).value : undefined;
    this.onValueChangeSubscription = this.field._id
      ? this.fg.get(this.field._id).valueChanges.subscribe(val => {
          this.value = val;
        })
      : undefined;
  }

  dayTemplateData(date: NgbDate) {
    return {
      gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
    };
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
