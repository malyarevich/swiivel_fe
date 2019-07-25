import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {FieldTypesModel} from "../../../../../../../../../models/vertical-data-collection/field-types.model";

@Component({
  selector: 'app-v-field-type-settings-container',
  templateUrl: './v-field-type-settings-container.component.html',
  styleUrls: ['./v-field-type-settings-container.component.css']
})
export class VFieldTypeSettingsContainerComponent implements OnInit {
  @Input() inputField: Field;
  fieldTypes = FieldTypesModel.fieldTypes;

  constructor() { }

  ngOnInit() {
  }

}
