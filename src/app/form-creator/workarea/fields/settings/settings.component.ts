import { Component, OnInit } from '@angular/core';
import { TextSettingComponent } from './text-setting/text-setting.component';
import { LongtextSettingComponent } from './longtext-setting/longtext-setting.component';
import { NumberSettingComponent } from './number-setting/number-setting.component';
import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';
import { DateSettingComponent } from './date-setting/date-setting.component';
import { CheckboxSettingComponent } from './checkbox-setting/checkbox-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { PhoneSettingComponent } from './phone-setting/phone-setting.component';

@Component({
  selector: 'sw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  type: number = 104;

  components = [
    { type: 101, component: TextSettingComponent, title: 'Short Text Field Settings' },
    { type: 102, component: LongtextSettingComponent, title: 'Long Text Field Settings' },
    { type: 103, component: NumberSettingComponent, title: 'Number Field Settings' },
    { type: 104, component: DropdownSettingComponent, title: 'Dropdown Settings' },
    { type: 106, component: DateSettingComponent, title: 'English Date Settings' },
    { type: 107, component: CheckboxSettingComponent, title: 'Checkbox Field Settings' },
    { type: 108, component: EmailSettingComponent, title: 'Email Settings' },
    { type: 109, component: PhoneSettingComponent, title: 'Phone Number Settings' },
    { type: 110, component: DateSettingComponent, title: 'Hebrew Date Settings' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
