import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-number-setting',
  templateUrl: './number-setting.component.html',
  styleUrls: ['./number-setting.component.scss']
})
export class NumberSettingComponent implements OnInit {

  form: FormGroup;
  validatorsOptions = ['Decimal Place', 'Percentage', 'Currency US', 'Currency Canada'].map(t => ({ title: t }));

  @Input()
  set settings(obj: any) {
    if (obj) {
      console.log(obj);
      this.form.patchValue({
        showDefaultValue: !!obj.showDefaultValue,
        showValidators: !!obj.showValidators,
        allowList: obj.allowList,
        default: obj.default || null,
        places: obj.places || null,
        format:  obj.format && this.validatorsOptions.findIndex(i => i.title === obj.format) >= 0
          ? [this.validatorsOptions[this.validatorsOptions.findIndex(i => i.title === obj.format)]] : [],
        validators: {
          min: obj.validators && obj.validators.min ? obj.validators.min : null,
          max: obj.validators && obj.validators.max ? obj.validators.max : null
        }
      });
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
      format: new FormControl([]),
      places: new FormControl(null, {updateOn: 'blur'}),
      validators: new FormGroup({
        min: new FormControl(null, {updateOn: 'blur'}),
        max: new FormControl(null, {updateOn: 'blur'})
      })
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      if (v.format && v.format[0]) { v.format = v.format[0].title; }
      this.fieldSettings.emit(v);
    });
  }



}
