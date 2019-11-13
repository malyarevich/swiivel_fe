import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-checkbox-setting',
  templateUrl: './checkbox-setting.component.html'
})
export class CheckboxSettingComponent implements OnInit {

  form: FormGroup;

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        default: (obj.default || obj.default === false) && this.options.findIndex(i => i.value === obj.default) >= 0
          ? [this.options[this.options.findIndex(i => i.value === obj.default)]] : [],
        showDefaultValue: !!obj.showDefaultValue
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  options = [
    { title: 'Yes', value: true },
    { title: 'No', value: false }
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      default: new FormControl([]),
      showDefaultValue: new FormControl(false)
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      if (v.default && v.default[0]) { v.default = v.default[0].value }
      this.fieldSettings.emit(v);
    });
  }

}
