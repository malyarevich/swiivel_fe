import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-phone-setting',
  templateUrl: './phone-setting.component.html',
  styleUrls: ['./phone-setting.component.scss']
})
export class PhoneSettingComponent {

  form: FormGroup;
  private optionsMap = [
    'showDefaultValue',
    'showValidators',
    'default',
    'validators',
    'validators.phone',
    'validators.verifyPhone',
  ];

  @Input()
  set settings(obj: any) {
    if (obj) {
      if (obj) {
        if (this.checkOptions(obj).length === 0) {
          this.form = obj;
        }
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
