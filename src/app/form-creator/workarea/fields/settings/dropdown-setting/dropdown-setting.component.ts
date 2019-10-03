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
    if (obj) {
      console.log(obj)
      this.form.patchValue({
        showDefaultValue: !!obj.defaultValue,
        showDefaultOptions: obj.defaultOption && obj.defaultOption.length > 0,
        defaultOption: obj.defaultOption || null,
        multiple: obj.multiple || false,
        type:  obj.type ? [this.fieldsType.find(o => o.value === obj.type)] : [],
        options: obj.options
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
      type: new FormControl([], {updateOn: 'change'}),
      multiple: new FormControl(false, {updateOn: 'change'}),
      options: new FormArray([
        new FormGroup({
          title: new FormControl('', {updateOn: 'blur'})
        })
      ])
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      this.prepareForm(v);
    });
  }

  get options() {
    return this.form.get('options') as FormArray;
  }

  get optionsValue() {
    return this.form.get('options').value;
  }

  setFormValue(obj: any) {
    const { multiple, fieldOpt, type, defaultOption } = obj;

    this.form.patchValue({
      multiple,
      fieldOpt: fieldOpt ? fieldOpt : [],
      type,
      defaultOption,
      showDefaultOptions: defaultOption ? true : false
    });
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

  prepareForm(value) {
    const { multiple, options, type, defaultOption } = value;
    this.fieldSettings.emit({multiple, options, type, defaultOption});
  }

}
