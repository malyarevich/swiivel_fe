import {Component, Input, OnInit} from '@angular/core';
import {Field} from "@app/models/data-collection/field.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-settings',
  templateUrl: './date-settings.component.html'
})
export class DateSettingsComponent  {
  
  form: FormGroup;

  separators = [
    {title: '- (Dash)', value: 'dash'},
    {title: '/ (Backslash)', value: 'backslash'},
    {title: '. (Dot)', value: 'dot'},
  ];

  dateFormats = [
    {title: 'mm-dd-yyyy', value: 'mm-dd-yyyy'},
    {title: 'dd-mm-yyyy', value: 'dd-mm-yyyy'},
    {title: 'yyyy-mm-dd', value: 'yyyy-mm-dd'},
  ];

  private field: Field;

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
    this.form = this.fb.group({
      showDefaultValue: [false],
      default: [null],
      separator: [null],
      dateFormat: [null]
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
      separator: f.options.separator || [],
      dateFormat: f.options.dateFormat || [],
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      delete formValue.showDefaultValue;
      Object.assign(this.field.options, formValue);
    }
  }

}
