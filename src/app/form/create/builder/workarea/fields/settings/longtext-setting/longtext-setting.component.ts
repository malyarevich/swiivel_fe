import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-longtext-setting',
  templateUrl: './longtext-setting.component.html',
  styleUrls: ['./longtext-setting.component.scss']
})
export class LongtextSettingComponent {

  form: FormGroup;
  validatorsOptions = ['Alphabetic', 'Alphanumeric'].map(t => ({ title: t }));
  private optionsMap = [
    'showDefaultValue',
    'showValidators',
    'columnWidth',
    'rowHeigth',
    'default',
    'validators',
    'validators.minLength',
    'validators.maxLength',
    'validators.criteria'
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

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      default: new FormControl(null, {updateOn: 'blur'}),
      columnWidth: new FormControl(null, {updateOn: 'blur'}),
      rowHeigth: new FormControl(null, {updateOn: 'blur'}),
      validators: new FormGroup({
        minLength: new FormControl(null, {updateOn: 'blur'}),
        maxLength: new FormControl(null, {updateOn: 'blur'}),
        criteria: new FormControl([])
      })
    });
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
