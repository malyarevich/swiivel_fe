import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-phone-setting',
  templateUrl: './phone-setting.component.html',
  styleUrls: ['./phone-setting.component.scss']
})
export class PhoneSettingComponent implements OnInit {

  form: FormGroup;

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        showDefaultValue: !!obj.defaultValue,
        showValidators: !!obj.validators,
        defaultValue: obj.defaultValue,
        validators: obj.validators || []
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
      validators: new FormGroup({
        phone: new FormControl(false),
        verifyPhone: new FormControl(false),
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
