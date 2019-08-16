import { Component, Input, OnInit } from "@angular/core";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";

@Component({
  selector: "app-form-field-settings",
  templateUrl: "./form-field-settings.component.html",
  styleUrls: ["./form-field-settings.component.scss"]
})
export class FormFieldSettingsComponent implements OnInit {
  @Input() inputField: Field;
  @Input() form: Form;
  @Input() fieldTypeName: string;

  tab: string = "general";

  constructor() {}

  ngOnInit() {}
}
