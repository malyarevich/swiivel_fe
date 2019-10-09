import { Component, Input } from '@angular/core';
import { Field } from "@app/models/data-collection/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-phone-number-settings',
  templateUrl: './phone-number-settings.component.html'
})
export class PhoneNumberSettingsComponent {

  form: FormGroup;

  private field: Field

  @Input()
  set inputField(f: Field) {
    if (f) {
      this.field = f;
      this.setValueToForm(f);
    }
  }


  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      default: new FormControl(null),
      validators: new FormGroup({
        phone: new FormControl(false),
        verifyPhone: new FormControl(false),
      })
    });
    this.form.valueChanges.subscribe(v => {
      delete v.showDefaultValue;
      delete v.showValidators;
    });
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.form.patchValue({
      default: f.options.default || null,
      showDefaultValue: f.options.default ? true : false,
      showValidators: f.options.showValidators ? true : false,
      validators: {
        phone: f.validators.phone ? f.validators.phone : false,
        verifyPhone: f.validators.verifyPhone || false,
      }
    });
    this.form.valueChanges.subscribe(v => {
      this.updateField(v);
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
