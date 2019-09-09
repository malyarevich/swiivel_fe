import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { CheckboxSettingComponent } from './checkbox-setting/checkbox-setting.component';
import { LongtextSettingComponent } from './longtext-setting/longtext-setting.component';
import { NumberSettingComponent } from './number-setting/number-setting.component';
import { PhoneSettingComponent } from './phone-setting/phone-setting.component';
import { TextSettingComponent } from './text-setting/text-setting.component';
import { DateSettingComponent } from './date-setting/date-setting.component';



@NgModule({
  declarations: [
    SettingsComponent,
    DropdownSettingComponent,
    EmailSettingComponent,
    CheckboxSettingComponent,
    LongtextSettingComponent,
    NumberSettingComponent,
    PhoneSettingComponent,
    TextSettingComponent,
    DateSettingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
