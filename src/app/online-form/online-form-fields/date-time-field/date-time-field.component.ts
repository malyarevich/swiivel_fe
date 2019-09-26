import { Component, Input, OnInit } from '@angular/core';
// import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Field } from 'src/app/models/data-collection/field.model';

@Component({
  selector: 'app-date-time-field',
  templateUrl: './date-time-field.component.html',
  styleUrls: ['./date-time-field.component.scss']
})
export class DateTimeFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  isLoaded = false;
  onValueChangeSubscription: Subscription;

  formatDate;
  constructor() {}

  ngOnInit() {
    // if (this.field._id) {
    //   if (!this.fg.get(this.field._id).value) {
    //     this.fg.patchValue({
    //       [this.field._id]: { year: 1970, month: 1, day: 1 }
    //     });
    //   }

    //   this.value = this.fg.get(this.field._id).value;

    //   if (!this.field.options.readonly) {
    //     this.onValueChangeSubscription = this.fg
    //       .get(this.field._id)
    //       .valueChanges.subscribe(val => {
    //         this.value = val;
    //       });
    //   }

    //   if (this.field.options.readonly) {
    //     this.fg.controls[this.field._id].disable();
    //   }
    // }
    // this.isLoaded = true;
  }

  blurChanges(event) {
    this.value = this.parseDate(event);
  }

  parseDate(event: any): string {
    return event;
  }

  getPlaceholder() {
    return this.field.options.placeholder &&
      this.field.options.placeholder !== 'string'
      ? this.field.options.placeholder
      : '12/12/2020';
  }
}
