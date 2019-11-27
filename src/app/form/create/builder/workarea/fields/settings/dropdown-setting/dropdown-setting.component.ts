import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-dropdown-setting',
  templateUrl: './dropdown-setting.component.html',
  styleUrls: ['./dropdown-setting.component.scss']
})
export class DropdownSettingComponent implements OnInit {

  @Input()
  set settings(obj: any) {
    if (obj.fieldOptions && obj.fieldOptions.length >= 0) {
      let fieldOptions = (this.form.get('fieldOptions') as FormArray);
      fieldOptions.clear();
      obj.fieldOptions.forEach(i => fieldOptions.push(this.fb.group({title: [i.title, {updateOn: 'blur'}]})));
    }
    if (obj) {
      this.form.patchValue({
        showDefaultOptions: !!obj.showDefaultOptions,
        defaultOption: obj.defaultOption  || null,
        multiple: obj.multiple || false,
        fieldType:  obj.fieldType && this.fieldsType.findIndex(i => i.value === obj.fieldType) >= 0
          ? [this.fieldsType[this.fieldsType.findIndex(i => i.value === obj.fieldType)]] : [],
      });
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
  ) {
    this.form = this.fb.group({
      showDefaultOptions: new FormControl(false, {updateOn: 'change'}),
      defaultOption: new FormControl([], {updateOn: 'change'}),
      fieldType: new FormControl([], {updateOn: 'change'}),
      multiple: new FormControl(false, {updateOn: 'change'}),
      fieldOptions: new FormArray([
        new FormGroup({
          title: new FormControl('', {updateOn: 'blur'})
        })
      ])
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      if (v.fieldType && v.fieldType[0]) { v.fieldType = v.fieldType[0].value }
      this.fieldSettings.emit(v);
    });
  }

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

}
