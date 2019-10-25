import { Component, Input, OnInit } from "@angular/core";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";
import { FieldTypesModel } from '@app/models/data-collection/field-types.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-form-field-settings",
  templateUrl: "./form-field-settings.component.html",
  styleUrls: ["./form-field-settings.component.scss"]
})
export class FormFieldSettingsComponent implements OnInit {
  @Input() inputField: Field;
  @Input() fieldTypeName: string;
  @Input() form;

  fieldTypes = FieldTypesModel.fieldTypes;

  tab: string = "general";

  constructor() { }

  ngOnInit() { }
}
