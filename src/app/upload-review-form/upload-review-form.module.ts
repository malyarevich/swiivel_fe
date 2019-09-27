import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadReviewFormDocumentComponent } from '@app/upload-review-form/upload-review-form-document/upload-review-form-document.component';
import { FormUploadFooterComponent } from '@app/upload-review-form/upload-review-form-footer/upload-review-form-footer.component';
import { UploadFormReviewItemComponent } from '@app/upload-review-form/upload-review-review-item/upload-review-form-item.component';
import { SharedModule } from '@shared/shared.module';
import { UploadReviewFormRoutingModule } from './upload-review-form-routing.module';
import { UploadReviewFormComponent } from './upload-review-form.component';

@NgModule({
  declarations: [
    UploadReviewFormComponent,
    UploadFormReviewItemComponent,
    UploadReviewFormDocumentComponent,
    FormUploadFooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UploadReviewFormRoutingModule,
    SharedModule,
  ],
  entryComponents: [UploadReviewFormComponent]
})
export class UploadReviewFormModule {}
