import { Component, Input } from '@angular/core';
import { Field, fieldValidators } from "../../../../../../../../../models/data-collection/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html'
})
export class EmailSettingsComponent {


  @Input() 
  set form(_form: any) {
    console.log('input form ', _form);
    if (!_form.get('options.showDefaultValue')) {
      _form.get('options').addControl('showDefaultValue', new FormControl(null));
    }
    if (!_form.get('options.default')) {
      _form.get('options').addControl('default', new FormControl(null));
    }
    if (!_form.get('options.askForConfirm')) {
      _form.get('options').addControl('askForConfirm', new FormControl(null));
    }
    this._form = _form;
  }
  _form;
  localform;
  private field: Field;

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
      this.localform.patchValue({
        showDefaultValue: !!obj.defaultValue,
        defaultValue: obj.defaultValue || '',
        askForConfirm: !!obj.askForConfirm
      });
    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.localform = this.fb.group({
      showDefaultValue: new FormControl(false),
      default: new FormControl(null),
      askForConfirm: new FormControl(false),
    });
    this.localform.valueChanges.subscribe(v => {
      // v.validators[fieldValidators.Email] = true;
      this.updateField(v);
    });
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.localform.patchValue({
      default: f.options.default || null,
      showDefaultValue: f.options.default ? true : false,
      askForConfirm: f.options.askForConfirm ? true : false,
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      delete formValue.showDefaultValue;
      // Object.assign(this.field.options, formValue);
      this._form.get('options').patchValue(formValue);
    }
  }

}
