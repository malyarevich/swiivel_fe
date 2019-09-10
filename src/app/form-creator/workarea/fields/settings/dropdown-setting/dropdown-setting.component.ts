import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'sw-dropdown-setting',
  templateUrl: './dropdown-setting.component.html',
  styleUrls: ['./dropdown-setting.component.scss']
})
export class DropdownSettingComponent implements OnInit {

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.setFormValue(obj);
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
    { title: 'Text' },
    { title: 'Number' },
    { title: 'Date/Time' },
    { title: 'Phone Number' }
  ]

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
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
    })
    this.form.valueChanges.subscribe(v => {
      this.prepareForm(v);
    })
  }

  get options() {
    return <FormArray>this.form.get('options');
  }

  get optionsValue() {
    return this.form.get('options').value;
  }

  setFormValue(obj: any) {
    const { multiple, options, type, defaultOption } = obj;

    this.form.patchValue({
      multiple,
      options,
      type,
      defaultOption,
      showDefaultOptions: defaultOption ? true : false
    })
  }

  showOptions() {
    return this.form.get('showDefaultOptions').value;
  }

  addOption(): void {
    (<FormArray>this.options).push(
      new FormGroup({
        title: new FormControl('', {updateOn: 'blur'})
      })
    )
  }

  removeOption(i: number): void {
    if (i >= 0) {
      (<FormArray>this.options).removeAt(i);
      if (i === 0 && this.options.value.length === 0) this.addOption();
    }
  }

  prepareForm(value) {
    const { multiple, options, type, defaultOption } = value;
    this.fieldSettings.emit({multiple, options, type, defaultOption});
  }

}
