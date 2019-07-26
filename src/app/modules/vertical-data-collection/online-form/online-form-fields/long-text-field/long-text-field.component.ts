import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-long-text-field",
  templateUrl: "./long-text-field.component.html",
  styleUrls: ["./long-text-field.component.scss"]
})
export class LongTextFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  onValueChangeSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    if (this.field._id && !this.field.options.readonly) {
      this.value = this.fg.get(this.field._id).value;
      this.onValueChangeSubscription = this.fg
        .get(this.field._id)
        .valueChanges.subscribe(val => {
          this.value = val;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
