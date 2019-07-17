import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Field, FieldSettingMultiplier} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {cloneDeep, isEmpty} from 'lodash';
import {Form} from "../../../../../../../model/form.model";

const defaultMultiplier: FieldSettingMultiplier = {
  enabled: false,
  mapped_type: 'multiple',
  mapping_field: "amount_of_students_in_family",
  prefill: true,
  limit: false,
  limit_amount: 10
};

@Component({
  selector: 'app-v-group-setting-multiplier',
  templateUrl: './v-group-setting-multiplier.component.html',
  styleUrls: ['./v-group-setting-multiplier.component.css']
})

export class VGroupSettingMultiplierComponent implements OnInit {
  @Input() inputGroup: Field;
  @Input() form: Form;
  manualMultiplierOptions: [{name: string, value: string}] | any = [];

  constructor() { }

  ngOnInit() {
    this.initMultiplier();
    this.getFieldsRecursive(this.form.fields);
  }

  initMultiplier() {
    if(isEmpty(this.inputGroup.settings.multiplier)) {
      this.inputGroup.settings['multiplier'] = cloneDeep(defaultMultiplier);
    }
  }

  getFieldsRecursive(fields, fieldName?, fieldMapped?) {
    fields.map((field)=> {
      if(field.type === 114) {
        this.getFieldsRecursive(field.fields, field.name, field.mapped);
      }
      if(field.type == 113) {
        this.getFieldsRecursive(
          field.fields,
          fieldName ? fieldName + ' - ' + field.name : field.name ,
          fieldMapped ? fieldMapped + '|' + field.mapped : field.mapped
        );
      }
      if(field.type && field.type !== 113 && field.type !== 114) {
        this.manualMultiplierOptions.push({
          name: fieldName ? fieldName + ' - ' + field.name : field.name,
          value: fieldMapped ? fieldMapped + '|' + field.mapped : field.mapped
        });
      }

    })
  }



}
