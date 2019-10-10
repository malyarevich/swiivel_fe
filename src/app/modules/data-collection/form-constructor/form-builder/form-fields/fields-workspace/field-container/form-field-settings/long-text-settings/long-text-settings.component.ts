import {Component, Input, OnInit} from '@angular/core';
import {Field, ITypeFieldSettings} from "@app/models/data-collection/field.model";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-long-text-settings',
  templateUrl: './long-text-settings.component.html',
})
export class LongTextSettingsComponent  {

  form: FormGroup;
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
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      default: new FormControl([]),
      columnWide: new FormControl([]),
      rowHeigth: new FormControl([]),
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
      columnWide: f.options.columnWide || null,
      rowHeigth: f.options.rowHeigth || null,
      validators: {
        criteria: f.validators.criteria ? f.validators.criteria : null,
        minLength: f.validators.minLength || null,
        maxLength: f.validators.maxLength || null,
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
