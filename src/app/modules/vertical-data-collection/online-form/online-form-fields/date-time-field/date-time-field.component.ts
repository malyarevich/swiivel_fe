import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-date-time-field",
  templateUrl: "./date-time-field.component.html",
  styleUrls: ["./date-time-field.component.scss"]
})
export class DateTimeFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  onValueChangeSubscription: Subscription;

  formatDate;
  constructor(private parserFormatter: NgbDateParserFormatter) {}

  ngOnInit() {
    this.value = this.field._id
      ? this.fg.get(this.field._id).value
      : "12/12/2020";
    this.onValueChangeSubscription = this.field._id
      ? this.fg.get(this.field._id).valueChanges.subscribe(val => {
          this.value = val;
        })
      : undefined;
    // this.formatDate = this.value && this.value !== ""
    //   ? this.parserFormatter.parse(this.value)
    //   : { day: 19, month: 7, year: 2019};
  }

  blurChanges(event) {
    this.value = this.parserFormatter.format(event);
  }

  getPlaceholder() {
    return this.field.options.placeholder &&
      this.field.options.placeholder !== "string"
      ? this.field.options.placeholder
      : "12/12/2020";
  }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
