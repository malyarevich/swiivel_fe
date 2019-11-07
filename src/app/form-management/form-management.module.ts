import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkDetailRowDirective } from '@app/utils/derictives/cdk-detail-row.directive';
import { SharedModule } from '@shared/shared.module';
import { OnlineFormModule } from '../online-form/online-form.module';
import { FormManagementAnalyticsComponent } from './form-management-analytics/form-management-analytics.component';
import { FormManagementContainer } from './form-management.component';
import { FormManagementPanelComponent } from './form-management-panel/form-management-panel.component';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormManagementSubmissionsComponent } from './form-management-submissions/form-management-submissions.component';
import { FormManagementAPIService } from './form-management.service';

@NgModule({
  declarations: [
    FormManagementContainer,
    FormManagementSubmissionsComponent,
    FormManagementAnalyticsComponent,
    FormManagementPanelComponent,
    CdkDetailRowDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CdkTableModule,
    OverlayModule,
    HttpClientModule,
    FormManagementRoutingModule,
    OnlineFormModule
  ],
  providers: [FormManagementAPIService]
})
export class FormManagementModule {}
