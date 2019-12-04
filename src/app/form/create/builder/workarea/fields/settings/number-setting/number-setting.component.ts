import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-number-setting',
  templateUrl: './number-setting.component.html',
  styleUrls: ['./number-setting.component.scss']
})
export class NumberSettingComponent {

  form: FormGroup;
  validatorsOptions = ['Decimal Place', 'Percentage', 'Currency US', 'Currency Canada'].map(t => ({ title: t }));
  private optionsMap = [
    'showDefaultValue',
    'showValidators',
    'allowList',
    'default',
    'places',
    'format',
    'validators',
    'validators.min',
    'validators.max'
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
