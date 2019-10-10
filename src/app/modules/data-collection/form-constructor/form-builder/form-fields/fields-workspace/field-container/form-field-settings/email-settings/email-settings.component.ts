import { Component, Input } from '@angular/core';
import { Field } from "../../../../../../../../../models/data-collection/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html'
})
export class EmailSettingsComponent {


  form: FormGroup;
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
      this.form.patchValue({
        showDefaultValue: !!obj.defaultValue,
        defaultValue: obj.defaultValue || '',
        askForConfirm: !!obj.askForConfirm
      });
    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      default: new FormControl(null),
      askForConfirm: new FormControl(false),
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
      askForConfirm: f.options.askForConfirm ? true : false,
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      delete formValue.showDefaultValue;
      Object.assign(this.field.options, formValue);
    }
  }

}
