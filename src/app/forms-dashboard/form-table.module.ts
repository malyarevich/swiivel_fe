import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndependentComponentsModule } from '@app/independent-components/independent-components.module';
import { SharedModule } from '@shared/shared.module';
import { FormTableRoutingModule } from './form-table-routing.module';
import { FormTableComponent} from './form-table.component';

import { CdkTableModule } from '@angular/cdk/table';
import { DataCollectionService } from './data-collection.service';
import { FormDashboardInvitesComponent } from './form-dashboard-invites/form-dashboard-invites.component';
import { FormDashboardRateComponent } from './form-dashboard-rate/form-dashboard-rate.component';
import { FormDashboardViewHeaderComponent } from './form-dashboard-view-header/form-dashboard-view-header.component';
import { FormDashboardViewComponent } from './form-dashboard-view/form-dashboard-view.component';

@NgModule({
  declarations: [
    FormTableComponent,
    FormDashboardViewComponent,
    FormDashboardRateComponent,
    FormDashboardInvitesComponent,
    FormDashboardViewHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormTableRoutingModule,
    SharedModule,
    CdkTableModule,
    IndependentComponentsModule,
  ],
  entryComponents: [FormTableComponent],
  providers: [DataCollectionService],
})
export class FormTableModule {}
