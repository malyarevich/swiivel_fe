import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';
import { PeriodRoutingModule } from './period-routing.module';
import { PageHeaderComponent } from './period-page-header/page-header.component';
import { PeriodDurationSettingComponent } from './period-duration-setting/period-duration-setting.component';
import { PeriodGeneralSettingComponent } from './period-general-settinngs/period-general-setting.component';
import { PeriodCreateComponent } from './period-create/period-create.component';
import { GridsterModule } from 'angular-gridster2';
import { PeriodService } from './services/period.service';

import { PeriodComponent } from './period.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/period.reducer';

@NgModule({
  declarations: [
    PeriodCreateComponent,
    PeriodComponent,
    PeriodDurationSettingComponent,
    PeriodGeneralSettingComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PeriodRoutingModule,
    SharedRedComponentsModule,
    GridsterModule,
    StoreModule.forRoot({
      state: reducer
    })
  ],
  exports: [
    PeriodComponent
  ],
  providers: [
    PeriodService
  ],
  entryComponents: []
})

export class PeriodModule {}
