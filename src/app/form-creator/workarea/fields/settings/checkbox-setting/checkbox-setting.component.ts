import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-checkbox-setting',
  templateUrl: './checkbox-setting.component.html',
  styleUrls: ['./checkbox-setting.component.scss']
})
export class CheckboxSettingComponent implements OnInit {

  showDefaultValue: boolean = false;
  defaultValue: any;

  options = [
    { title: 'Yes', value: true },
    { title: 'No', value: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
