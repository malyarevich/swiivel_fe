import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CheckboxSettingComponent } from './checkbox-setting/checkbox-setting.component';
import { DateSettingComponent } from './date-setting/date-setting.component';
import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { LongtextSettingComponent } from './longtext-setting/longtext-setting.component';
import { NumberSettingComponent } from './number-setting/number-setting.component';
import { PhoneSettingComponent } from './phone-setting/phone-setting.component';
import { SettingsComponent } from './settings.component';
import { TextSettingComponent } from './text-setting/text-setting.component';
import { FormsModule } from '@angular/forms';
import { GroupSettingsComponent } from './group-settings/group-settings.component';
import { SectionSettingsComponent } from './section-settings/section-settings.component';



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
    DateSettingComponent,
    GroupSettingsComponent,
    SectionSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [
    DropdownSettingComponent,
    EmailSettingComponent,
    CheckboxSettingComponent,
    LongtextSettingComponent,
    NumberSettingComponent,
    PhoneSettingComponent,
    TextSettingComponent,
    DateSettingComponent,
    GroupSettingsComponent,
    SectionSettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
