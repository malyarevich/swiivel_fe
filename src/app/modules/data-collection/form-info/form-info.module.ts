import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {FormInfoRoutingModule} from './form-info-routing.module';
import {FormAccessModalModule} from '../form-access-modal/form-access-modal.module';
import {FormTableHeaderModule, ProgressBarModule} from '../../../shared/components';

import {FormInfoComponent} from './form-info.component';
import {FormInfoHeaderComponent} from './form-info-header/form-info-header.component';
import {FormInfoStatsComponent} from './form-info-stats/form-info-stats.component';
import {FormInfoGeneralComponent} from './form-info-general/form-info-general.component';
import {FormInfoTableNavComponent} from './form-info-table-nav/form-info-table-nav.component';
import {FormInfoNavComponent} from './form-info-nav/form-info-nav.component';
import {FormInfoSubmissionsComponent} from './form-info-submissions/form-info-submissions.component';
import {FormInfoSubmissionInsideComponent} from './form-info-submissions/form-info-submission-inside/form-info-submission-inside.component';
import {InsideFormDocumentsComponent} from './form-info-submissions/form-info-submission-inside/inside-form-documents/inside-form-documents.component';
import {InsideFormViewComponent} from './form-info-submissions/form-info-submission-inside/inside-form-documents/inside-form-view/inside-form-view.component';
import {InsideDocumentsViewComponent} from './form-info-submissions/form-info-submission-inside/inside-form-documents/inside-documents-view/inside-documents-view.component';
import {InsideAccountCommunicationComponent} from './form-info-submissions/form-info-submission-inside/inside-account-communication/inside-account-communication.component';
import {InsideMissingFieldsComponent} from './form-info-submissions/form-info-submission-inside/inside-missing-fields/inside-missing-fields.component';
import {InsideFormHistoryComponent} from './form-info-submissions/form-info-submission-inside/inside-form-history/inside-form-history.component';

import {FormsStatsService} from '../services/forms-stats.service';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    FormInfoComponent,
    FormInfoHeaderComponent,
    FormInfoStatsComponent,
    FormInfoGeneralComponent,
    FormInfoTableNavComponent,
    FormInfoNavComponent,
    FormInfoSubmissionsComponent,
    FormInfoSubmissionInsideComponent,
    InsideFormDocumentsComponent,
    InsideFormViewComponent,
    InsideDocumentsViewComponent,
    InsideAccountCommunicationComponent,
    InsideMissingFieldsComponent,
    InsideFormHistoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FormInfoRoutingModule,
    FormAccessModalModule,
    FormTableHeaderModule,
    ProgressBarModule,
    SharedModule,
  ],
  exports: [FormInfoComponent],
  providers: [FormsStatsService]
})
export class FormInfoModule {
}
