import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-multiple-options-field",
  templateUrl: "./multiple-options-field.component.html",
  styleUrls: ["./multiple-options-field.component.scss"]
})
export class MultipleOptionsFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  isLoaded: boolean = false;
  onValueChangeSubscription: Subscription;

  list: Array<string> = [
    "Options 1",
    "Options 2",
    "Options 3",
    "Options 4",
    "Options 5"
  ];

  constructor() {}

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

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
