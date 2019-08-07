import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../../../model/form.model";
import {Field} from "../../../../../../../../models/data-collection/field.model";

@Component({
  selector: 'app-form-field-settings',
  templateUrl: './form-field-settings.component.html',
  styleUrls: ['./form-field-settings.component.scss']
})
export class FormFieldSettingsComponent implements OnInit {
  @Input() inputField: Field;
  @Input() form: Form;
  @Input() fieldTypeName: string;

  tab: string = 'general';

  constructor() {
  }

  ngOnInit() {
  }
}
