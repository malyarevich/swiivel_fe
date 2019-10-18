import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '@modules/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { Document } from '@models/upload-review-form/document.model';
import { ColorsEnum } from '@shared/colors.enum';

@Component({
  selector: 'app-document-approval-bar',
  templateUrl: './upload-review-form-approval-bar.component.html',
  styleUrls: ['./upload-review-form-approval-bar.component.scss']
})

export class UploadReviewFormApprovalBarComponent {
  @Input() document: Document;
  @Input() isLast: boolean;
  @Input() disabled: boolean;
  @Input() isSaveActive: boolean;
  @Input('loading') showSpinner = false;
  @Output() changeStatus = new EventEmitter<string>();
  @Output() skipDocument = new EventEmitter();
  @Output() saveDocument = new EventEmitter();
  public colors = ColorsEnum;
  public statuses = UploadReviewFormStatusesEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) { }
}
