import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-label-field",
  templateUrl: "./label-field.component.html",
  styleUrls: ["./label-field.component.scss"]
})
export class LabelFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  isLoaded: boolean = false;
  onValueChangeSubscription: Subscription;

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
