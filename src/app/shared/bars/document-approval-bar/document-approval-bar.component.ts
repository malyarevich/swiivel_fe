import { Component, Input } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '@app/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { Document } from '@models/upload-review-form/document.model';
import { ColorsEnum } from '@shared/colors.enum';

@Component({
  selector: 'sw-document-approval-bar',
  templateUrl: './document-approval-bar.component.html',
  styleUrls: ['./document-approval-bar.component.scss']
})

export class DocumentApprovalBarComponent {
  @Input() document: Document;
  public colors = ColorsEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) { }
}
