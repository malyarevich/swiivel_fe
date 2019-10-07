import {Component, EventEmitter, Input, Output} from '@angular/core';
import { UploadReviewFormStatusesEnum } from '@modules/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { Document } from '@models/upload-review-form/document.model';
import { ColorsEnum } from '@app/shared/colors.enum';

@Component({
  selector: 'sw-document-approval-bar',
  templateUrl: './document-approval-bar.component.html',
  styleUrls: ['./document-approval-bar.component.scss']
})

export class DocumentApprovalBarComponent {
  @Input() document: Document;
  @Output() changeStatus = new EventEmitter<string>();
  @Output() skipDocument = new EventEmitter();
  public colors = ColorsEnum;
  public statuses = UploadReviewFormStatusesEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) { }
}
