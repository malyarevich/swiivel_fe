import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "src/app/models/vertical-data-collection/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-empty-line-field",
  templateUrl: "./empty-line-field.component.html",
  styleUrls: ["./empty-line-field.component.scss"]
})
export class EmptyLineFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
