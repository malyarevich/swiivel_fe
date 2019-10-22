import {Component, Input} from '@angular/core';
import {Field, fieldValidators} from "@app/models/data-collection/field.model";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";


export const aNumberCriteriaValidators: string[] = [
  fieldValidators.DecimalPlace,
  fieldValidators.Percentage,
  fieldValidators.CurrencyUS,
  fieldValidators.CurrencyCanada
];

@Component({
  selector: 'app-number-settings',
  templateUrl: './number-settings.component.html',
  styleUrls: ['./number-settings.component.css']
})
export class NumberSettingsComponent {

  form: FormGroup;
  validatorsOptions = aNumberCriteriaValidators.map(t => ({ title: t }));
  
  private field: Field;

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
      format: new FormControl([]),
      places: new FormControl(null),
      validators: new FormGroup({
        [fieldValidators.min]: new FormControl(null),
        [fieldValidators.max]: new FormControl(null)
      })
    });
    this.form.valueChanges.subscribe(v => {
      this.updateField(v);
    })
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.form.patchValue({
      default: f.options.default || null,
      format: f.options.format || [],
      places: f.options.places || null,
      showDefaultValue: f.options.default ? true : false,
      showValidators: f.options.showValidators ? true : false,
      validators: {
        min: f.validators.min || null,
        max: f.validators.max || null,
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