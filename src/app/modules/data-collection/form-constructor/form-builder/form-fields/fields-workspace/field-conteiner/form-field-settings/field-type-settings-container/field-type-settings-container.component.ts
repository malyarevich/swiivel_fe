import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../../../../../../../../models/data-collection/field.model";
import {FieldTypesModel} from "../../../../../../../../../models/data-collection/field-types.model";

@Component({
  selector: 'app-v-field-type-settings-container',
  templateUrl: './field-type-settings-container.component.html',
  styleUrls: ['./field-type-settings-container.component.css']
})
export class FieldTypeSettingsContainerComponent implements OnInit {
  @Input() inputField: Field;
  fieldTypes = FieldTypesModel.fieldTypes;

  constructor() { }

  ngOnInit() {
  }

}
