import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from 'src/app/models/vertical-data-collection/field.model';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-empty-line-field",
  templateUrl: "./empty-line-field.component.html",
  styleUrls: ["./empty-line-field.component.scss"]
})
export class EmptyLineFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  value: string;
  onValueChangeSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.value = this.field._id ? this.fg.get(this.field._id).value : undefined;
    this.onValueChangeSubscription = this.field._id
      ? this.fg.get(this.field._id).valueChanges.subscribe(val => {
          this.value = val;
        })
      : undefined;
  }

  ngOnDestroy(): void {
    if (this.onValueChangeSubscription) {
      this.onValueChangeSubscription.unsubscribe();
    }
  }
}
