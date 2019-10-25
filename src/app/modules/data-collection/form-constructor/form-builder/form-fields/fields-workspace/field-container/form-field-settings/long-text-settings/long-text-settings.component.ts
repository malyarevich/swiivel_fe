import { Component, Input, OnInit } from '@angular/core';
import { Field, ITypeFieldSettings, fieldValidators } from "@app/models/data-collection/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

export const aLongTextCriteriaValidators: string[] = [
  fieldValidators.Alphabetic,
  fieldValidators.Alphanumeric
];

@Component({
  selector: 'app-long-text-settings',
  templateUrl: './long-text-settings.component.html',
})
export class LongTextSettingsComponent {
  typeform;
  _form;
  @Input() set form(_form: any) {
    if (!_form.get('options.showDefaultValue')) {
      _form.get('options').addControl('showDefaultValue', new FormControl(null));
    }
    if (!_form.get('options.showValidators')) {
      _form.get('options').addControl('showValidators', new FormControl(null));
    }
    if (!_form.get('options.columnWide')) {
      _form.get('options').addControl('columnWide', new FormControl(null));
    }
    if (!_form.get('options.rowHeight')) {
      _form.get('options').addControl('rowHeight', new FormControl(null));
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
  validatorsOptions = ['Alphabetic', 'Alphanumeric'].map(t => ({ title: t }));

  private field: Field

  @Input()
  set inputField(f: Field) {
    if (f) {
      this.field = f;
      this.setValueToForm(f);
    }
  }

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue(obj);
    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.typeform = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      default: new FormControl([]),
      columnWide: new FormControl([]),
      rowHeigth: new FormControl([]),
      validators: new FormGroup({
        [fieldValidators.minLength]: new FormControl(null),
        [fieldValidators.maxLength]: new FormControl(null),
        criteria: new FormControl([])
      })
    });
    this.typeform.valueChanges.subscribe(v => {
      this._form.get('options').patchValue(v);
    });
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.typeform.patchValue({
      default: f.options.default || null,
      showDefaultValue: f.options.default ? true : false,
      showValidators: f.options.showValidators ? true : false,
      allowList: f.options.allowList ? true : false,
      columnWide: f.options.columnWide || null,
      rowHeigth: f.options.rowHeigth || null,
      validators: {
        criteria: f.validators.criteria ? f.validators.criteria : null,
        [fieldValidators.minLength]: f.validators.minLength || null,
        [fieldValidators.maxLength]: f.validators.maxLength || null,
      }
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      this.field.validators = formValue.validators;
      delete formValue.validators;
      delete formValue.showDefaultValue;
      Object.assign(this.field.options, formValue);
    }
  }


}
