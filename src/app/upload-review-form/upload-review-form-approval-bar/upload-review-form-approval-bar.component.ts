import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from '@models/upload-review-form/document.model';
import { SizesEnum } from '@shared/sizes.enum';
import { UploadReviewFormStatusesEnum } from '../upload-review-form-statuses.enum';
import { UploadReviewFormService } from '../upload-review-form.service';

@Component({
  selector: 'sw-document-approval-bar',
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
  public size = SizesEnum;
  public statuses = UploadReviewFormStatusesEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) { }
}
