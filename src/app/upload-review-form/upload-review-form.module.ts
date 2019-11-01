import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UploadReviewFormApprovalBarComponent } from './upload-review-form-approval-bar/upload-review-form-approval-bar.component';
import { UploadReviewFormControlsComponent } from './upload-review-form-controls/upload-review-form-controls.component';
import {
  UploadReviewFormDocumentSettingsComponent
} from './upload-review-form-document-settings/upload-review-form-document.component-settings';
import { UploadReviewFormDocumentComponent } from './upload-review-form-document/upload-review-form-document.component';
import { FormUploadFooterComponent } from './upload-review-form-footer/upload-review-form-footer.component';
import { UploadFormReviewItemComponent } from './upload-review-form-item/upload-review-form-item.component';
import { UploadReviewFormRoutingModule } from './upload-review-form-routing.module';
import { UploadReviewFormComponent } from './upload-review-form.component';
import { UploadReviewFormService } from './upload-review-form.service';
import { UploadReviewReviewItemComponent } from './upload-review-review-item/upload-review-form-item.component';
import { OnlineFormModule } from '../online-form/online-form.module';
// import { FormSendModule } from '../form-send/form-send.module';

@NgModule({
  declarations: [
    FormUploadFooterComponent,
    UploadFormReviewItemComponent,
    UploadReviewFormApprovalBarComponent,
    UploadReviewFormComponent,
    UploadReviewFormControlsComponent,
    UploadReviewFormDocumentComponent,
    UploadReviewFormDocumentSettingsComponent,
    UploadReviewReviewItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // FormSendModule,
    OnlineFormModule,
    PdfViewerModule,
    SharedModule,
    UploadReviewFormRoutingModule
  ],
  providers: [UploadReviewFormService],
  entryComponents: [UploadReviewFormComponent]
})
export class UploadReviewFormModule { }
