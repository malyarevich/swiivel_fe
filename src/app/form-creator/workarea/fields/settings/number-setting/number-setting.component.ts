import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'sw-number-setting',
  templateUrl: './number-setting.component.html',
  styleUrls: ['./number-setting.component.scss']
})
export class NumberSettingComponent implements OnInit {
  
  form: FormGroup;
  validatorsOptions = ['Decimal Place', 'Percentage', 'Currency US', 'Currency Canada'].map(t => { return { title: t } });

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
      defaultValue: new FormControl(null),
      format: new FormControl([]),
      places: new FormControl(null),
      validators: new FormGroup({
        min: new FormControl(null),
        max: new FormControl(null)
      })
    });
    this.form.valueChanges.subscribe(v => {
      delete v.showDefaultValue;
      delete v.showValidators;
      this.fieldSettings.emit(v);
    });
  }



}
