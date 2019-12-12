import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { FormManagementRoutingModule } from '@app/form-management/form-management.routing.module';

import { FormManagementAccessComponent } from '@app/form-management/form-management-access/form-management-access.component';
import { FormManagementAnalyticsComponent } from '@app/form-management/form-management-analytics/form-management-analytics.component';
import { FormManagementHeaderComponent } from '@app/form-management/form-management-header/form-management-header.component';
import { FormManagementInfoComponent } from '@app/form-management/form-management-info/form-management-info.component';
import { FormManagementPaymentsComponent } from '@app/form-management/form-management-payments/form-management-payments.component';
import {
  FormManagementSubmissionHistoryComponent
} from '@app/form-management/form-management-submission-history/form-management-submission-history.component';
import {
  FormManagementSubmissionMissingFieldsComponent
} from '@app/form-management/form-management-submission-missing-fields/form-management-submission-missing-fields.component';
import {
  FormManagementSubmissionSubrowComponent
} from '@app/form-management/form-management-submission-subrow/form-management-submission-subrow.component';
import { FormManagementComponent } from '@app/form-management/form-management.component';
import { FormManagementService } from '@app/form-management/form-management.service';
import { IndependentComponentsModule } from '@app/independent-components/independent-components.module';
import { OnlineFormModule } from '@app/online-form/online-form.module';
import { FormManagementLogsComponent } from './form-management-logs/form-management-logs.component';
import { FormManagementSubmissionsComponent } from './form-management-submissions/form-management-submissions.component';

@NgModule({
  declarations: [
    FormManagementComponent,
    FormManagementHeaderComponent,
    FormManagementAnalyticsComponent,
    FormManagementInfoComponent,
    FormManagementPaymentsComponent,
    FormManagementSubmissionMissingFieldsComponent,
    FormManagementSubmissionSubrowComponent,
    FormManagementSubmissionHistoryComponent,
    FormManagementLogsComponent,
    FormManagementSubmissionsComponent,
    FormManagementAccessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FormManagementRoutingModule,
    OnlineFormModule,
    CdkTableModule,
    IndependentComponentsModule
  ],
  providers: [FormManagementService],
  entryComponents: [FormManagementComponent]
})
export class FormManagementModule { }
