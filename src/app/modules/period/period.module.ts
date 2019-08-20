import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedRedComponentsModule } from '../../shared/components/sharedRedComponents.module';
import { PeriodRoutingModule } from './period-routing.module';
import { PeriodPageHeaderComponent } from './period-page-header/period-page-header.component';
import { PeriodDurationSettingComponent } from './period-duration-setting/period-duration-setting.component';
import { PeriodGeneralSettingComponent } from './period-general-settinngs/period-general-setting.component';
import { PeriodCreateComponent } from './period-create/period-create.component';
import { PeriodBarComponent } from './period-bar/period-bar.component';
import { PeriodSplitBarComponent } from './period-split-bar/period-split-bar.component';
import { PeriodSplitInformationComponent } from './period-split-information/period-split-information.component';
import { PeriodSplitSettingsComponent } from './period-split-settings/period-split-settings.component';
import { PeriodService } from './services/period.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { PeriodComponent } from './period.component';
import { reducer } from './store/period.reducer';
import { PeriodEffect } from './store/period.effect';
import { PeriodErrorComponent } from './period-error/period-error.component';
import { PeriodCancelPopupComponent } from './period-cancel-popup/period-cancel-popup.component';
import { PeriodTableComponent } from '@modules/period/period-table/period-table.component';

@NgModule({
  declarations: [
    PeriodBarComponent,
    PeriodErrorComponent,
    PeriodSplitBarComponent,
    PeriodSplitSettingsComponent,
    PeriodCreateComponent,
    PeriodSplitInformationComponent,
    PeriodComponent,
    PeriodDurationSettingComponent,
    PeriodGeneralSettingComponent,
    PeriodPageHeaderComponent,
    PeriodCancelPopupComponent,
    PeriodTableComponent
  ],
  imports: [
    DragDropModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PeriodRoutingModule,
    SharedRedComponentsModule,
    StoreModule.forRoot({state: reducer}),
    EffectsModule.forRoot([PeriodEffect])
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
