import { Component, EventEmitter, Input, OnInit, Output, ɵConsole } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-text-setting',
  templateUrl: './text-setting.component.html',
  styleUrls: ['./text-setting.component.scss']
})
export class TextSettingComponent implements OnInit {

  form: FormGroup;
  validatorsOptions = ['Alphabetic', 'Alphanumeric', 'Url'].map(t => ({ title: t }));

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        showDefaultValue: !!obj.defaultValue,
        showValidators: !!obj.validators,
        allowList: obj.allowList,
        defaultValue: obj.defaultValue || null,
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
      allowList: new FormControl(false),
      defaultValue: new FormControl(null),
      validators: new FormGroup({
        minChar: new FormControl(null),
        maxChar: new FormControl(null),
        criteria: new FormControl([])
      })
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      delete v.showDefaultValue;
      delete v.showValidators;
      this.fieldSettings.emit(v);
    });
  }
}
