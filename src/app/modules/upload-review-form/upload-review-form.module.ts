import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {
  UploadReviewFormApprovalBarComponent
} from '@modules/upload-review-form/upload-review-form-approval-bar/upload-review-form-approval-bar.component';
import {
  UploadReviewFormDocumentComponent
} from '@modules/upload-review-form/upload-review-form-document/upload-review-form-document.component';
import {
  UploadReviewFormControlsComponent
} from '@modules/upload-review-form/upload-review-form-controls/upload-review-form-controls.component';
import {
  UploadReviewFormDocumentSettingsComponent
} from '@modules/upload-review-form/upload-review-form-document-settings/upload-review-form-document.component-settings';
import { FormUploadFooterComponent } from '@modules/upload-review-form/upload-review-form-footer/upload-review-form-footer.component';
import { UploadFormReviewItemComponent } from '@modules/upload-review-form/upload-review-form-item/upload-review-form-item.component';
import { SharedModule } from '@shared/shared.module';
import { SharedRedComponentsModule } from '@app/shared/components/sharedRedComponents.module';
import { UploadReviewFormRoutingModule } from './upload-review-form-routing.module';
import { UploadReviewFormComponent } from './upload-review-form.component';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';

@NgModule({
  declarations: [
    FormUploadFooterComponent,
    UploadFormReviewItemComponent,
    UploadReviewFormApprovalBarComponent,
    UploadReviewFormComponent,
    UploadReviewFormControlsComponent,
    UploadReviewFormDocumentComponent,
    UploadReviewFormDocumentSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    UploadReviewFormRoutingModule,
    SharedModule,
    SharedRedComponentsModule,
  ],
  providers: [UploadReviewFormService],
  entryComponents: [UploadReviewFormComponent]
})
export class UploadReviewFormModule {}
