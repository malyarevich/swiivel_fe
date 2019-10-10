import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "../../../../../../../../../models/data-collection/field.model";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";

// const defaultSettings: ITypeFieldSettings = {
//   minSizeChar: 1,
//   maxSizeChar: 30,
//   inputMask: '',
//   isDefaultValue: false,
//   defaultValue: '',
// };

@Component({
  selector: 'app-short-text-settings',
  templateUrl: './short-text-settings.component.html'
})
export class ShortTextSettingsComponent {
  
  form: FormGroup;
  validatorsOptions = ['Alphabetic', 'Alphanumeric', 'Url'].map(t => ({ title: t }));

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
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      allowList: new FormControl(false),
      default: new FormControl(null),
      validators: new FormGroup({
        minLength: new FormControl(null),
        maxLength: new FormControl(null),
        criteria: new FormControl([])
      })
    });
    this.form.valueChanges.subscribe(v => {
      this.updateField(v);
    });
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.form.patchValue({
      default: f.options.default || null,
      showDefaultValue: f.options.default ? true : false,
      showValidators: f.options.showValidators ? true : false,
      allowList: f.options.allowList ? true : false,
      validators: {
        criteria: f.validators.criteria ? f.validators.criteria : null,
        minLength: f.validators.minLength || null,
        maxLength: f.validators.maxLength || null,
      }
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      if (formValue.validators.criteria && formValue.validators.criteria > 0) {
        formValue.validators.criteria = formValue.validators.criteria[0].title
      }
      this.field.validators = formValue.validators;
      delete formValue.validators;
      delete formValue.showDefaultValue;
      Object.assign(this.field.options, formValue);
    }
  }

}
