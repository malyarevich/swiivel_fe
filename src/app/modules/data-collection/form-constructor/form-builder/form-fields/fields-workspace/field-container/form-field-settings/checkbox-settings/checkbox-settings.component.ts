import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Field } from '@app/models/data-collection/field.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-settings',
  templateUrl: './checkbox-settings.component.html'
})
export class CheckboxSettingsComponent {


  @Input() form: FormGroup;

  options = [
    { title: 'Yes', value: true },
    { title: 'No', value: false }
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
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      defaultValue: new FormControl([]),
      showDefaultValue: new FormControl(false)
    });
    this.form.valueChanges.subscribe(v => {
      if (v) { this.updateField(v); }
    });
  }

  private setValueToForm(f: Field) {
    this.form.patchValue({
      showDefaultValue: f.options ? !!f.options.default : false,
      defaultValue: f.options ? f.options.default ? this.options.filter(o => o.value === f.options.default) : [] : false
    });
    this.cdr.markForCheck();
  }

  private updateField(v: any) {
    if (!this.field.options) { this.field.options = {}; }
    this.field.options.default = v.defaultValue && v.defaultValue.length > 0 ? v.defaultValue[0].value : null;
  }

}
