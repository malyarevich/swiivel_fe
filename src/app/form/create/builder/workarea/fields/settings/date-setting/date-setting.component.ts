import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sw-date-setting',
  templateUrl: './date-setting.component.html',
  styleUrls: ['./date-setting.component.scss']
})
export class DateSettingComponent implements OnInit {
  form: FormGroup;

  separators = [
    { title: '- (Dash)', value: 'dash' },
    { title: '/ (Backslash)', value: 'backslash' },
    { title: '. (Dot)', value: 'dot' },
  ];

  dateFormats = [
    { title: 'mm-dd-yyyy', value: 'mm-dd-yyyy' },
    { title: 'dd-mm-yyyy', value: 'dd-mm-yyyy' },
    { title: 'yyyy-mm-dd', value: 'yyyy-mm-dd' },
  ];

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.form.patchValue({
        showDefaultValue: !!obj.showDefaultValue,
        default: obj.default || '',
        separator: obj.separator && this.separators.findIndex(i => i.value === obj.separator) >= 0
          ? [this.separators[this.separators.findIndex(i => i.value === obj.separator)]] : [],
        dateFormat: obj.dateFormat && this.dateFormats.findIndex(i => i.value === obj.dateFormat) >= 0
          ? [this.dateFormats[this.dateFormats.findIndex(i => i.value === obj.dateFormat)]] : [],
      });
    }
  }
  @Output() fieldSettings = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      showDefaultValue: [false],
      default: [''],
      separator: [[]],
      dateFormat: [[]]
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(v => {
      this.updateField(v);
    });
  }

  private updateField(v): void {
    if (v) {
      if (v.separator && v.separator[0]) { v.separator = v.separator[0].value }
      if (v.dateFormat && v.dateFormat[0]) { v.dateFormat = v.dateFormat[0].value }
      this.fieldSettings.emit(v)
    }
  }

}
