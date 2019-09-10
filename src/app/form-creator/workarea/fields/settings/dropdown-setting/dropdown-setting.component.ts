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

  fieldsType = ['Text', 'Number', 'Date/Time', 'Phone Number'].map(t => { return { title: t } });
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      showDefaultOptions: new FormControl(false),
      defaultOption: new FormControl([]),
      type: new FormControl([]),
      multiple: new FormControl(false),
      options: new FormArray([])
    });
    this.addOption();
    this.form.valueChanges.subscribe(v => {
      this.prepareForm(v);
    });
  }

  get options() {
    return this.form.get('options') as FormArray;
  }

  setFormValue(obj: any) {
    const { multiple, options, type, defaultOption } = obj;

    this.form.patchValue({
      multiple,
      options,
      type,
      defaultOption,
      showDefaultOptions: !!defaultOption
    })
  }

  addOption(): void {
    this.options.push(
      new FormGroup({
        title: new FormControl('', {updateOn: 'blur'})
      })
    );
  }

  removeOption(i: number): void {
    if (i === 0) this.options.at(i).reset();
    else this.options.removeAt(i);
  }

  prepareForm(value) {
    const { multiple, options, type, defaultOption } = value;
    this.fieldSettings.emit({multiple, options, type, defaultOption});
  }

}
