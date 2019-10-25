import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Field } from '@app/models/data-collection/field.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-settings',
  templateUrl: './checkbox-settings.component.html'
})
export class CheckboxSettingsComponent {


  @Input() 
  set form(_form: any) {
    if (!_form.get('options.showDefaultValue')) {
      _form.get('options').addControl('showDefaultValue', new FormControl(null));
    }
    if (!_form.get('options.default')) {
      _form.get('options').addControl('default', new FormControl(null));
    }
    this._form = _form;
  }

  options = [
    { title: 'Yes', value: true },
    { title: 'No', value: false }
  ];

  _form;
  localForm: FormGroup;

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
    this.localForm = this.fb.group({
      defaultValue: new FormControl([]),
      showDefaultValue: new FormControl(false)
    });
    this.localForm.valueChanges.subscribe(v => {
      if (v) { this.updateField(v); }
    });
  }

  private setValueToForm(f: Field) {
    this.localForm.patchValue({
      showDefaultValue: f.options ? !!f.options.default : false,
      defaultValue: f.options ? f.options.default ? this.options.filter(o => o.value === f.options.default) : [] : false
    });
    this.cdr.markForCheck();
  }

  private updateField(v: any) {
    // if (!this.field.options) { this.field.options = {}; }
    // this.field.options.default = v.defaultValue && v.defaultValue.length > 0 ? v.defaultValue[0].value : null;
    this._form.get('options').patchValue({
      default: v.defaultValue && v.defaultValue.length > 0 ? v.defaultValue[0].value : null,
      showDefaultValue: v.showDefaultValue
    })
  }

}
