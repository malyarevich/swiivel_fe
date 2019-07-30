import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../../../../model/form.model";
import {Field} from "../../../../../../../../models/vertical-data-collection/field.model";

@Component({
  selector: 'app-v-form-field-settings',
  templateUrl: './v-form-field-settings.component.html',
  styleUrls: ['./v-form-field-settings.component.scss']
})
export class VFormFieldSettingsComponent implements OnInit {
  @Input() inputField: Field;
  @Input() form: Form;
  @Input() fieldTypeName: string;

  tab: string = 'general';

  constructor() {
  }

  ngOnInit() {
  }
}
