import { Component, OnInit, Input, Output, EventEmitter, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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
      this.form.patchValue(obj);
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      showDefaultValue: new FormControl(false),
      showValidators: new FormControl(false),
      allowList: new FormControl(false),
      defaultValue: new FormControl(null),
      validators: new FormGroup({
        min: new FormControl(null),
        max: new FormControl(null),
        validator: new FormControl([])
      })
    });
    this.form.valueChanges.subscribe(v => {
      delete v.showDefaultValue;
      delete v.showValidators;
      this.fieldSettings.emit(v);
    });
  }
}
