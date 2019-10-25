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

  typeform;
  _form;
  @Input() set form(_form: any) {
    if (!_form.get('options.showDefaultOptions')) {
      _form.get('options').addControl('showDefaultOptions', new FormControl(false));
    }
    if (!_form.get('options.default')) {
      _form.get('options').addControl('default', new FormControl([]));
    }
    if (!_form.get('options.fieldType')) {
      _form.get('options').addControl('fieldType', new FormControl([]));
    }
    if (!_form.get('options.multiple')) {
      _form.get('options').addControl('multiple', new FormControl(false));
    }
    if (!_form.get('options.fieldOptions')) {
      _form.get('options').addControl('fieldOptions', new FormArray([
        new FormGroup({
          title: new FormControl('')
        })
      ]));
    }
    this._form = _form;
  }
  private field: Field;

  @Input()
  set inputField(f: Field) {
    if (f) {
      console.log('input field', Object.assign({}, f));
      this.field = f;
      this.setValueToForm(f);
    }
  }

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.typeform = this.fb.group({
      showDefaultOptions: new FormControl(false),
      default: new FormControl([]),
      fieldType: new FormControl([]),
      multiple: new FormControl(false),
      fieldOptions: new FormArray([
        new FormGroup({
          title: new FormControl('')
        })
      ])
    });
    this.typeform.valueChanges.subscribe(v => {
      this._form.get('options').patchValue(v);
    });
  }

  get options() {
    return this.typeform.get('fieldOptions') as FormArray;
  }

  get optionsValue() {
    return this.typeform.get('fieldOptions').value;
  }

  private setValueToForm(f: Field): void {
    if (!f.options) { f.options = {}; }

    this.typeform.patchValue({
      default: f.options.default && isArray(f.options.default) ? f.options.default : [],
      showDefaultOptions: f.options.default && f.options.default.length > 0 ? true : false,
      showValidators: f.options.showValidators ? true : false,
      multiple: f.options.multiple ? true : false,
      fieldType: f.options.fieldType || [],
      // fieldOptions: f.options.fieldOptions && f.options.fieldOptions.length > 0 ? f.options.fieldOptions : []
    }, { emitEvent: false });
    if (f.options.fieldOptions && f.options.fieldOptions.length > 0) {
      const fieldOptions = this.options;
      f.options.fieldOptions.forEach(i => {
        fieldOptions.push(
          new FormGroup({
            title: new FormControl(i.title || '')
          })
        );
      });
      fieldOptions.removeAt(0);
      f.options.fieldOptions.forEach(i => {
        this._form.get('options.fieldOptions').push(
          new FormGroup({
            title: new FormControl(i.title || '')
          })
        );
      });
      this._form.get('options.fieldOptions').removeAt(0);
    }
  }

  private updateField(formValue): void {
    if (formValue) {
      delete formValue.showDefaultOptions;
      Object.assign(this.field.options, formValue);
    }
  }

  showOptions() {
    return this.typeform.get('showDefaultOptions').value;
  }

  addOption(): void {
    (this.options as FormArray).push(
      new FormGroup({
        title: new FormControl('')
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
