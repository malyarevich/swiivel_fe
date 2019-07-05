import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';
import { PeriodRoutingModule } from './period-routing.module';
import { PageHeaderComponent } from './period-page-header/page-header.component';
import { PeriodDurationSettingComponent } from './period-duration-setting/period-duration-setting.component';
import { PeriodGeneralSettingComponent } from './period-general-settinngs/period-general-setting.component';

import { PeriodComponent } from './period.component';

@NgModule({
  declarations: [
    PeriodComponent,
    PageHeaderComponent,
    PeriodDurationSettingComponent,
    PeriodGeneralSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PeriodRoutingModule,
    SharedRedComponentsModule
  ],
  exports: [
    PeriodComponent
  ],

  entryComponents: []
})

export class PeriodModule {}
