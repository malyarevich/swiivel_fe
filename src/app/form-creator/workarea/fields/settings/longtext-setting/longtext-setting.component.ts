import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'sw-longtext-setting',
  templateUrl: './longtext-setting.component.html',
  styleUrls: ['./longtext-setting.component.scss']
})
export class LongtextSettingComponent implements OnInit {

  form: FormGroup;
  validatorsOptions = ['Alphabetic', 'Alphanumeric'].map(t => { return { title: t } });

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
      defaultValue: new FormControl([]),
      columnWide: new FormControl([]),
      rowHeigth: new FormControl([]),
      validators: new FormGroup({
        min: new FormControl(null),
        max: new FormControl(null),
        validator: new FormControl([])
      })
    });
    this.form.valueChanges.subscribe(v => {
      this.fieldSettings.emit({
        defaultValue: v['defaultValue'],
        columnWide: v['columnWide'],
        rowHeigth: v['rowHeigth'],
        validators: v['validators']
      });
    });
  }

}
