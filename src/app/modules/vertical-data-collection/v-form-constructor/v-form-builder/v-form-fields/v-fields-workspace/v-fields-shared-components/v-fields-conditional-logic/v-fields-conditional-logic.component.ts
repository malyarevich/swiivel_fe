import {Component, Input, OnInit} from '@angular/core';
import {Field, FieldSettingConditional} from "../../../../../../../../models/vertical-data-collection/field.model";
import {cloneDeep} from 'lodash';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

const defaultConditional: FieldSettingConditional = {
  logic: 'hide',
  when: 'all',
  field: '',
  rule: 'is',
  value: '',
};

@Component({
  selector: 'app-v-fields-conditional-logic',
  templateUrl: './v-fields-conditional-logic.component.html',
  styleUrls: ['./v-fields-conditional-logic.component.css']
})
export class VFieldsConditionalLogicComponent implements OnInit {
  @Input() inputField: Field;
  conditionalForm: FormGroup;

  conditLogic = ['hide', 'visible'];

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit() {
    this.initConditional();
    this.initConditionalForm();
    this.onChangesConditionalForm();
  }

  initConditional() {
    if (!this.inputField.conditional) {
      this.inputField['conditional'] = Object.assign(defaultConditional);
    }
  }

  initConditionalForm() {
    this.conditionalForm = this.fb.group({
      logic: [this.inputField.conditional.logic],
      when: [this.inputField.conditional.when],
      field: [this.inputField.conditional.field],
      rule: [this.inputField.conditional.rule],
      value: [this.inputField.conditional.value]
    });
  }

  onChangesConditionalForm() {
    this.conditionalForm.valueChanges.subscribe((val) => {
      this.inputField.conditional = Object.assign(val);
    });
  }


}
