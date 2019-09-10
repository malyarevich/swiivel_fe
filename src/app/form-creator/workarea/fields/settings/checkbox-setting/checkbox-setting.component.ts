import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-checkbox-setting',
  templateUrl: './checkbox-setting.component.html'
})
export class CheckboxSettingComponent implements OnInit {

  showDefaultValue: boolean = false;
  default = new FormControl([]);

  @Input()
  set settings(obj: any) {
    if (obj) {
      this.default.setValue([this.options.find(o => o.value === obj['default'])]);
    }
  }
  @Output() fieldSettings = new EventEmitter();

  options = [
    { title: 'Yes', value: true },
    { title: 'No', value: false }
  ];

  constructor() { }

  ngOnInit() {
    this.default.valueChanges.subscribe(v => {
      this.fieldSettings.emit(...v);
    });
  }

}
