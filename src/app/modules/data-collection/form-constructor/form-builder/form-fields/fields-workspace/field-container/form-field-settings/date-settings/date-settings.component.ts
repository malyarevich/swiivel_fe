import { Component, Input, OnInit } from '@angular/core';
import { Field } from "@app/models/data-collection/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-date-settings',
  templateUrl: './date-settings.component.html'
})
export class DateSettingsComponent {

  @Input() 
  set form(_form: any) {
    if (!_form.get('options.showDefaultValue')) {
      _form.get('options').addControl('showDefaultValue', new FormControl(null));
    }
    if (!_form.get('options.default')) {
      _form.get('options').addControl('default', new FormControl(null));
    }
    if (!_form.get('options.dateFormat')) {
      _form.get('options').addControl('dateFormat', new FormControl(null));
    }
    if (!_form.get('options.separator')) {
      _form.get('options').addControl('separator', new FormControl(null));
    }
    this._form = _form;
  }
  _form;

  separators = [
    { title: '- (Dash)', value: 'dash' },
    { title: '/ (Backslash)', value: 'backslash' },
    { title: '. (Dot)', value: 'dot' },
  ];

  dateFormats = [
    { title: 'mm-dd-yyyy', value: 'mm-dd-yyyy' },
    { title: 'dd-mm-yyyy', value: 'dd-mm-yyyy' },
    { title: 'yyyy-mm-dd', value: 'yyyy-mm-dd' },
  ];

  private field: Field;
  loacalForm;

  @Input()
  set inputField(f: Field) {
    if (f) {
      this.field = f;
      this.setValueToForm(f);
    }
  }

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.loacalForm = this.fb.group({
      showDefaultValue: [false],
      default: [null],
      separator: [null],
      dateFormat: [null]
    });
    this.loacalForm.valueChanges.subscribe(v => {
      this.updateField(v);
    });
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.loacalForm.patchValue({
      default: f.options.default || null,
      showDefaultValue: f.options.default ? true : false,
      separator: f.options.separator || [],
      dateFormat: f.options.dateFormat || [],
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      delete formValue.showDefaultValue;
      // Object.assign(this.field.options, formValue);
      this._form.get('options').patchValue(formValue)
    }
  }

}
