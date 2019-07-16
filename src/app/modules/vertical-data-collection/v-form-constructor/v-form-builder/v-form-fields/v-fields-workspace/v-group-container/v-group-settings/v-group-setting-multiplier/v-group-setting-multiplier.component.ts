import {Component, Input, OnInit} from '@angular/core';
import {Field, FieldSettingMultiplier} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {cloneDeep, isEmpty} from 'lodash';

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

  constructor() { }

  ngOnInit() {
    this.initMultiplier();
  }

  initMultiplier() {
    if(isEmpty(this.inputGroup.settings.multiplier)) {
      this.inputGroup.settings['multiplier'] = cloneDeep(defaultMultiplier);
    }
  }

}
