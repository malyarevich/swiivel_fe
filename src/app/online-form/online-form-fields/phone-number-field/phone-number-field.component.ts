import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-phone-number-field",
  templateUrl: "./phone-number-field.component.html",
  styleUrls: ["./phone-number-field.component.scss"]
})
export class PhoneNumberFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() fg: FormGroup;
  @Input() validationText: string;

  constructor() {}

  ngOnInit() {}
}
