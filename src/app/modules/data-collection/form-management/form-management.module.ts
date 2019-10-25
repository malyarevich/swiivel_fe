import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FormManagementComponent } from '@app/components/form-management/form-management.component';
import { FormManagementAnalyticsComponent } from '@app/components/form-management/form-management-analytics/form-management-analytics.component';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormStatisticModule } from '../form-statistic/form-statistic.module';
import { SharedRedComponentsModule } from '../../../shared/components/sharedRedComponents.module';
import { FormAccessModalModule } from '../form-access-modal/form-access-modal.module';
import { FormManagementSubmissionsComponent } from '@app/components/form-management/form-management-submissions/form-management-submissions.component';
import { CdkDetailRowDirective } from '@app/utils/directives/cdk-detail-row.directive';
import { ProgressLineBarComponent } from '@app/components/bars/progress-line-bar/progress-line-bar.component';
import { SharedModule } from '@shared/shared.module';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OnlineFormModule } from '@app/modules/online-form/online-form.module';
import { HttpClientModule } from '@angular/common/http';
import { FormManagementContainer } from './form-management.container';
import { FormManagementAPIService } from './form-management.service';
import { FormInfoModule } from '@app/modules/data-collection/form-info/form-info.module';
import { FormTableHeaderModule } from '@app/shared/components/form-table-header/form-table-header.module';
import { FormHistoryComponent } from '@app/components/form-history/form-history.component';

@NgModule({
  declarations: [
    FormManagementContainer, FormManagementComponent, FormManagementSubmissionsComponent,
    ProgressLineBarComponent, CdkDetailRowDirective, FormManagementAnalyticsComponent,
    FormHistoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CdkTableModule,
    OverlayModule,
    MatProgressBarModule,
    HttpClientModule,
    NgbModule,
    FormManagementRoutingModule,
    FormStatisticModule,
    SharedRedComponentsModule,
    FormTableHeaderModule,
    FormAccessModalModule,
    OnlineFormModule,
    FormTableHeaderModule,
    FormInfoModule,
  ],
  exports: [FormManagementContainer],
  providers: [FormManagementAPIService]
})
export class FormManagementModule {}
