import { Component, EventEmitter, Input, OnInit, Output, ɵConsole, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-text-setting',
  templateUrl: './text-setting.component.html',
  styleUrls: ['./text-setting.component.scss']
})
export class TextSettingComponent {

  form: FormGroup;
  validatorsOptions = ['Alphabetic', 'Alphanumeric', 'Url'].map(t => ({ title: t }));
  private optionsMap = [
    'showDefaultValue',
    'showValidators',
    'allowList',
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
