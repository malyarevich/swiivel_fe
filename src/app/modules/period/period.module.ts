import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';
import { PeriodRoutingModule } from './period-routing.module';
import { PageHeaderComponent } from './period-page-header/page-header.component';
import { PeriodDurationSettingComponent } from './period-duration-setting/period-duration-setting.component';
import { PeriodGeneralSettingComponent } from './period-general-settinngs/period-general-setting.component';
import { PeriodCreateComponent } from './period-create/period-create.component';
import { PeriodBarComponent } from './period-bar/period-bar.component';
import { PeriodSplitBarComponent } from './preiod-split-bar/period-split-bar.component';
import { PeriodSplitSettingsComponent } from './period-split-settings/period-split-settings.component';
import { PeriodService } from './services/period.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { PeriodComponent } from './period.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/period.reducer';

@NgModule({
  declarations: [
    PeriodBarComponent,
    PeriodSplitBarComponent,
    PeriodSplitSettingsComponent,
    PeriodCreateComponent,
    PeriodComponent,
    PeriodDurationSettingComponent,
    PeriodGeneralSettingComponent,
    PageHeaderComponent
  ],
  imports: [
    DragDropModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PeriodRoutingModule,
    SharedRedComponentsModule,
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
