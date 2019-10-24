import { Component, Input, OnInit } from '@angular/core';
import { Field, ITypeFieldSettings, fieldValidators } from "../../../../../../../../../models/data-collection/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

// const defaultSettings: ITypeFieldSettings = {
//   minSizeChar: 1,
//   maxSizeChar: 30,
//   inputMask: '',
//   isDefaultValue: false,
//   defaultValue: '',
// };

export const aShortTextCriteriaValidators: string[] = [
  fieldValidators.Alphabetic,
  fieldValidators.Alphanumeric,
  fieldValidators.Url
];

@Component({
  selector: 'app-short-text-settings',
  templateUrl: './short-text-settings.component.html'
})
export class ShortTextSettingsComponent {
  typeform;
  _form;
  @Input() set form(_form: any) {
    if (!_form.get('options.showDefaultValue')) {
      _form.get('options').addControl('showDefaultValue', new FormControl(null));
    }
    if (!_form.get('options.showValidators')) {
      _form.get('options').addControl('showValidators', new FormControl(null));
    }
    if (!_form.get('options.allowList')) {
      _form.get('options').addControl('allowList', new FormControl(null));
    }
    if (!_form.get('options.default')) {
      _form.get('options').addControl('default', new FormControl(null));
    }
    if (!_form.get('options.validators')) {
      _form.get('options').addControl('validators', new FormGroup({
        [fieldValidators.minLength]: new FormControl(null),
        [fieldValidators.maxLength]: new FormControl(null),
        criteria: new FormControl([])
      }));
    }
    this._form = _form;
  }
  validatorsOptions = aShortTextCriteriaValidators.map(t => ({ title: t }));

  private field: Field;

  @Input()
  set inputField(inputField: Field) {
    if (inputField) {
      this.field = inputField;
      this.setValueToForm(inputField);
    }
  }
  constructor(
    private fb: FormBuilder
  ) {
    this.typeform = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      allowList: new FormControl(false),
      default: new FormControl(null),
      validators: new FormGroup({
        [fieldValidators.minLength]: new FormControl(null),
        [fieldValidators.maxLength]: new FormControl(null),
        criteria: new FormControl([])
      })
    });
    this.typeform.valueChanges.subscribe(v => {
      this._form.get('options').patchValue(v);
      // this.updateField(v);
    });
  }

  private setValueToForm(f: any): void {
    if (!f.options) { f.options = {}; }
    if (!f.validators) { f.validators = {}; }
    this.typeform.patchValue({
      default: f.options.default || null,
      showDefaultValue: f.options.default ? true : false,
      showValidators: f.options.showValidators ? true : false,
      allowList: f.options.allowList ? true : false,
      validators: {
        criteria: f.validators.criteria ? f.validators.criteria : null,
        [fieldValidators.minLength]: f.validators.minLength || null,
        [fieldValidators.maxLength]: f.validators.maxLength || null,
      }
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      if (formValue.validators.criteria && formValue.validators.criteria > 0) {
        formValue.validators.criteria = formValue.validators.criteria[0].title
      }
      this._form.get('options.validators').setValue(formValue.validators);
      delete formValue.validators;
      delete formValue.showDefaultValue;
      Object.assign(this.field.options, formValue);
    }
  }

}
