import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Form} from "../../../../../../model/form.model";
import {Field} from "../../../../../../../../models/vertical-data-collection/field.model";

@Component({
  selector: 'app-v-form-field-settings',
  templateUrl: './v-form-field-settings.component.html',
  styleUrls: ['./v-form-field-settings.component.scss']
})
export class VFormFieldSettingsComponent implements OnInit, OnChanges {
  @Input() inputField: Field;
  @Input() form: Form;
  @Input() fieldTypeName: string;

  tab: string = 'settings';

  validationRules = [
    {name: 'Alphabetic', rule: 'alpha', min: true, max: true, param: false},
    {name: 'Alpha Numeric', rule: 'alpha_num', min: true, max: true, param: false},
    {name: 'Alpha Numeric Dash', rule: 'alpha_dash', min: true, max: true, param: false},
    {name: 'Data', rule: 'data', min: false, max: false, param: false},
    {name: 'Email', rule: 'email', min: false, max: false, param: false},
    {name: 'Numeric', rule: 'numeric', min: true, max: true, param: false},
    {name: 'String', rule: 'string', min: true, max: true, param: false},
    {name: 'URL', rule: 'url', min: false, max: false, param: false},
    {name: 'IN', rule: 'in', min: false, max: false, param: ''}
  ];

  rule: { name: string, rule: string, min: number | boolean, max: number | boolean, param: string | boolean };
  ruleDefault = {name: '', rule: '', min: false, max: false, param: false};
  field: Field;

  constructor() {
  }

  ngOnInit() {
    this.field = this.inputField;
    this.rule = this.field.validators[0] ? this.field.validators[0] : this.ruleDefault;
  }

  ngOnChanges() {
    this.field = this.inputField;
    this.rule = this.field.validators[0] ? this.field.validators[0] : this.ruleDefault;
  }

  isValidatorChanged(event) {
    this.field.options.isValidator = event;
  }

  changeValidatorRule(rule) {
    this.rule = this.validationRules.find(elem => elem.rule == rule);
    this.addValidatorRule();
  }

  addValidatorRule() {
    this.field.validators = [this.rule];
  }

  changeIsErrorMessage(event) {
    this.field.options.isErrorMessage = event;
  }

  changeIsProhibitDataEntry(event) {
    this.field.options.isProhibitDataEntry = event;
  }

  addTextError(event) {
    this.field.options.textError = event;
  }

  changeMinFieldSize(event) {
    this.field.options.minFieldSize = event;
  }

  changeMaxFieldSize(event) {
    this.field.options.maxFieldSize = event;
  }

  changeInputMask(event) {
    this.field.options.inputMask = event;
  }
}
