import {Component, Input, OnInit} from '@angular/core';
import {Field, FieldSettingConditional} from "../../../../../../../../models/vertical-data-collection/field.model";
import {cloneDeep} from 'lodash';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

const defaultConditional: FieldSettingConditional = {
  logic: 'hide',
  when: 'all',
  field: '',
  rules: [{name: 'is', value: ''}, {name: 'start', value: ''}]
};

@Component({
  selector: 'app-v-fields-conditional-logic',
  templateUrl: './v-fields-conditional-logic.component.html',
  styleUrls: ['./v-fields-conditional-logic.component.css']
})
export class VFieldsConditionalLogicComponent implements OnInit {
  @Input() inputField: Field;
  conditionalForm: FormGroup;

  conditLogic = ['hide', 'visible', 'required', 'unrequired'];

  get rules() {
    return this.conditionalForm.get('rules') as FormArray;
  }

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
      rules: this.fb.array(this.initRules()),
    });
  }

  initRules() {
    let rules = [];
    this.inputField.conditional.rules.map((rule) => {
      rules.push(this.fb.group({
        name: [rule.name],
        value: [rule.value]
      }));
    });
    return rules;
  }

  onChangesConditionalForm() {
    this.conditionalForm.valueChanges.subscribe((val) => {
      this.inputField.conditional = Object.assign(val);
    });
  }

  addRule() {
    this.rules.push(this.fb.group({
      name: '',
      value: ''
    }));
  }

  removeRule(index) {
    this.rules.removeAt(index);
  }
}
