import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Field } from "../../../../../../../../../models/data-collection/field.model";
import { FormArray, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { isArray } from 'util';

@Component({
  selector: 'app-drop-down-list-settings',
  templateUrl: './drop-down-list-settings.component.html'
})
export class DropDownListSettingsComponent {

  buttons = [
    {
      label: 'One Selection',
      value: false
    },
    {
      label: 'Multiple Selection',
      value: true
    }
  ];

  fieldsType = [
    { title: 'Text', value: 'text' },
    { title: 'Number', value: 'number' },
    { title: 'Date/Time', value: 'date' },
    { title: 'Phone Number', value: 'phone' }
  ];

  form: FormGroup;
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
      showDefaultOptions: new FormControl(false),
      default: new FormControl([]),
      fieldType: new FormControl([]),
      multiple: new FormControl(false),
      fieldOptions: new FormArray([
        new FormGroup({
          title: new FormControl('', /* { updateOn: 'blur' } */)
        })
      ])
    });
    this.form.valueChanges.subscribe(v => {
      this.updateField(v);
    });
  }

  get options() {
    return this.form.get('fieldOptions') as FormArray;
  }

  get optionsValue() {
    return this.form.get('fieldOptions').value;
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }
    this.form.patchValue({
      default: f.options.default && isArray(f.options.default) ? f.options.default : [],
      showDefaultOptions: f.options.default && f.options.default.length > 0 ? true : false,
      showValidators: f.options.showValidators ? true : false,
      multiple: f.options.multiple ? true : false,
      fieldType: f.options.fieldType || [],
      fieldOptions: f.options.fieldOptions && f.options.fieldOptions.length > 0 ? f.options.fieldOptions : []
    });
  }

  private updateField(formValue): void {
    if (formValue) {
      delete formValue.showDefaultOptions;
      Object.assign(this.field.options, formValue);
    }
  }

  showOptions() {
    return this.form.get('showDefaultOptions').value;
  }

  addOption(): void {
    (this.options as FormArray).push(
      new FormGroup({
        title: new FormControl('', /*  { updateOn: 'blur' } */)
      })
    );
    this.cdr.markForCheck();
  }

  removeOption(i: number): void {
    if (i >= 0) {
      (this.options as FormArray).removeAt(i);
      if (i === 0 && this.options.value.length === 0) { this.addOption(); }
      this.cdr.markForCheck();
    }
  }

}
