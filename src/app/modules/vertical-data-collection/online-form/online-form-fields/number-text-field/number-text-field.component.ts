import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Field } from "../../model/field.model";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-number-text-field",
  templateUrl: "./number-text-field.component.html",
  styleUrls: ["./number-text-field.component.scss"]
})
export class NumberTextFieldComponent implements OnInit, OnDestroy {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
