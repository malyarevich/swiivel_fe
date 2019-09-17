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
        defaultValue: [this.options.find(o => o.value === obj.defaultValue)],
        showDefaultValue: !!obj.defaultValue
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
      defaultValue: new FormControl([]),
      showDefaultValue: new FormControl(false)
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      this.fieldSettings.emit(v.defaultValue);
    });
  }

}
