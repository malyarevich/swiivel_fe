import { Component, EventEmitter, Input, OnInit, Output, ɵConsole, ChangeDetectorRef } from '@angular/core';
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
      console.log('ALPA',obj)
      this.form.patchValue({
        showDefaultValue: !!obj.showDefaultValue,
        showValidators: obj.showValidators,
        allowList: obj.allowList || false,
        default: obj.default || null,
        validators: {
          minLength: obj.validators && obj.validators.minLength ? obj.validators.minLength : null,
          maxLength: obj.validators && obj.validators.maxLength ? obj.validators.maxLength : null,
          criteria: obj.validators && obj.validators.criteria && this.validatorsOptions.findIndex(i => i.title === obj.validators.criteria) >= 0 ?
            [this.validatorsOptions[this.validatorsOptions.findIndex(i => i.title === obj.validators.criteria)]] : null
        }
      }, {emitEvent: false});
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
      default: new FormControl(null, { updateOn: 'blur' }),
      validators: new FormGroup({
        minLength: new FormControl(null, { updateOn: 'blur' }),
        maxLength: new FormControl(null, { updateOn: 'blur' }),
        criteria: new FormControl([])
      })
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      if (v.validators.criteria && v.validators.criteria[0]) { v.validators.criteria = v.validators.criteria[0].title }
      this.fieldSettings.emit(v);
    });
  }
}
