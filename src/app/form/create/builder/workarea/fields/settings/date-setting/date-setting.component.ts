import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-date-setting',
  templateUrl: './date-setting.component.html',
  styleUrls: ['./date-setting.component.scss']
})
export class DateSettingComponent {
  form: FormGroup;

  separators = [
    { title: '- (Dash)', value: 'dash' },
    { title: '/ (Backslash)', value: 'backslash' },
    { title: '. (Dot)', value: 'dot' },
  ];

  dateFormats = [
    { title: 'mm-dd-yyyy', value: 'mm-dd-yyyy' },
    { title: 'dd-mm-yyyy', value: 'dd-mm-yyyy' },
    { title: 'yyyy-mm-dd', value: 'yyyy-mm-dd' },
  ];
  private optionsMap = [
    'showDefaultValue',
    'default',
    'separator',
    'dateFormat'
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
  ) { }

  checkOptions(obj: FormGroup) {
    return this.optionsMap.filter((key) => {
      if (!obj.get(key)) {
        console.error(`Does not exist ${key} in options.`);
        return true;
      }
    });
  }

}
