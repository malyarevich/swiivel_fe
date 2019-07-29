import {Component, Input, OnInit} from '@angular/core';
import {
  Field,
  IFieldValidators,
  IFieldValidatorsRule
} from "../../../../../../../../../models/vertical-data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {isEmpty} from 'lodash';
import {ValidationRulesModel} from "../../../../../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/validation-rules.model";
import {FieldTypesModel} from "../../../../../../../../../models/vertical-data-collection/field-types.model";

export const defaultValidators: IFieldValidators = {
  isValidator: false,
  rule: {label: null, value: null},
  minChar: null,
  maxChar: null,
  isErrorMessage: false,
  isProhibitDataEntry: true,
  errorText: '',
};

@Component({
  selector: 'app-v-field-validation',
  templateUrl: './v-field-validation.component.html',
  styleUrls: ['./v-field-validation.component.css']
})
export class VFieldValidationComponent implements OnInit {
  @Input() inputField: Field;
  fieldTypes = FieldTypesModel.fieldTypes;

  get validationRules() {
    let fieldType = this.inputField.type;
    switch (fieldType) {
      case FieldTypesModel.fieldTypes.shortTextField:
        return ValidationRulesModel.shortTextValidators;
      case FieldTypesModel.fieldTypes.longTextField:
        return ValidationRulesModel.longTextValidators;
      case FieldTypesModel.fieldTypes.numberTextField:
        return ValidationRulesModel.numberTextValidators;
      case FieldTypesModel.fieldTypes.dropDownListField:
        return ValidationRulesModel.dropDownListValidators;
      case FieldTypesModel.fieldTypes.multipleOptionsField:
        return ValidationRulesModel.multipleOptionsValidators;
      case FieldTypesModel.fieldTypes.dateTimeField:
        return ValidationRulesModel.dateTimeValidators;
      case FieldTypesModel.fieldTypes.timeField:
        return ValidationRulesModel.timeValidators;
      case FieldTypesModel.fieldTypes.emailField:
        return ValidationRulesModel.emailValidators;
      case FieldTypesModel.fieldTypes.phoneNumberField:
        return ValidationRulesModel.phoneNumberValidators;
      case FieldTypesModel.fieldTypes.hebrewDateField:
        return ValidationRulesModel.hebrewDateValidators;
      case FieldTypesModel.fieldTypes.labelField:
        return ValidationRulesModel.labelValidators;
      case FieldTypesModel.fieldTypes.emptyLineField:
        return ValidationRulesModel.emailValidators;
    }
  }

  validatorsForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initValidators();
    this.initValidatorsForm();
    this.onChangesValidatorsForm();
  }

  initValidators() {
    if (isEmpty(this.inputField.validators)) {
      this.inputField.validators = Object.assign({}, defaultValidators);
    }
  }

  initValidatorsForm() {
    this.validatorsForm = this.fb.group({
      isValidator: [this.inputField.validators.isValidator],
      rule: [this.inputField.validators.rule],
      minChar: [this.inputField.validators.minChar],
      maxChar: [this.inputField.validators.maxChar],
      isErrorMessage: [this.inputField.validators.isErrorMessage],
      isProhibitDataEntry: [this.inputField.validators.isProhibitDataEntry],
      errorText: [this.inputField.validators.errorText],
    });
  }

  onChangesValidatorsForm() {
    this.validatorsForm.valueChanges.subscribe((val) => {
      this.inputField.validators = Object.assign({}, val);
    });
  }

}
