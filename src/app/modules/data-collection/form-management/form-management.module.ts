import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FormManagementComponent } from './form-management.component';
import { FormManagementRoutingModule } from './form-management-routing.module';
import { FormStatisticModule } from '../form-statistic/form-statistic.module';
import { SharedRedComponentsModule } from '../../../shared/components/sharedRedComponents.module';
import { FormTableHeaderModule } from '../../../shared/components';
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

@NgModule({
  declarations: [
    FormManagementComponent,
    FormManagementSubmissionsComponent,
    CdkDetailRowDirective,
    ProgressLineBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CdkTableModule,
    OverlayModule,
    MatProgressBarModule,
    OnlineFormModule,
    HttpClientModule,
    NgbModule,
    FormManagementRoutingModule,
    FormStatisticModule,
    SharedRedComponentsModule,
    FormTableHeaderModule,
    FormAccessModalModule
  ],
  exports: [FormManagementComponent],
  providers: []
})
export class FormManagementModule {}