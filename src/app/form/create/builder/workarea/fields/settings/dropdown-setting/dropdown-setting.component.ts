import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-dropdown-setting',
  templateUrl: './dropdown-setting.component.html',
  styleUrls: ['./dropdown-setting.component.scss']
})
export class DropdownSettingComponent {

  private optionsMap = [
    'showDefaultOptions',
    'defaultOption',
    'multiple',
    'fieldType'
  ];

  @Input()
  set settings(obj: any) {
    if (obj) {
      if (this.checkOptions(obj).length === 0) {
        this.form = obj;
      }
    }
  }
  @Output() fieldSettings = new EventEmitter();

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

  constructor(
    private fb: FormBuilder
  ) { }

  get options() {
    return this.form.get('fieldOptions') as FormArray;
  }

  get optionsValue() {
    return this.form.get('fieldOptions').value;
  }

  showOptions() {
    return this.form.get('showDefaultOptions').value;
  }

  addOption(): void {
    (this.options as FormArray).push(
      new FormGroup({
        title: new FormControl('', {updateOn: 'blur'})
      })
    );
  }

  removeOption(i: number): void {
    if (i >= 0) {
      (this.options as FormArray).removeAt(i);
      if (i === 0 && this.options.value.length === 0) { this.addOption(); }
    }
  }

  checkOptions(obj: FormGroup) {
    return this.optionsMap.filter((key) => {
      if (!obj.get(key)) {
        console.error(`Does not exist ${key} in options.`);
        return true;
      }
    });
  }

}
