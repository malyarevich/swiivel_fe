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
        showDefaultValue: !!obj.defaultValue,
        showValidators: obj.validators && obj.validators.length > 0,
        allowList: obj.allowList,
        defaultValue: obj.defaultValue || null,
        places: obj.places || null,
        format:  obj.format ? [this.validatorsOptions.find(o => o.title === obj.format)] : [],
        validators: obj.validators
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
      defaultValue: new FormControl(null),
      format: new FormControl([]),
      places: new FormControl(null),
      validators: new FormGroup({
        min: new FormControl(null),
        max: new FormControl(null)
      })
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      delete v.showDefaultValue;
      delete v.showValidators;
      if (v.format && v.format[0]) { v.format = v.format[0].title; }
      this.fieldSettings.emit(v);
    });
  }



}
