import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '../upload-review-form-statuses.enum';
import { UploadReviewFormService } from '../upload-review-form.service';
import { Document } from '@models/upload-review-form/document.model';
import { ColorsEnum } from '@app/shared/colors.enum';
import { IconsEnum } from '@app/shared/icons.enum';

@Component({
  selector: 'app-upload-review-form-item',
  templateUrl: './upload-review-form-item.component.html',
  styleUrls: ['./upload-review-form-item.component.scss']
})

export class UploadFormReviewItemComponent {
  @Input() document: Document;
  @Output() selected = new EventEmitter<string>();
  public icons = IconsEnum;
  public colors = ColorsEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;
  @Output() downLoadForm = new EventEmitter<string>();
  @Output() deleteForm = new EventEmitter<string>();

  constructor(public uploadReviewFormService: UploadReviewFormService) {}


  selectItem(e: Event): void {
    if (e && e.target && (e.target['tagName'] === 'BUTTON' || e.target['parentElement']['tagName'] === 'BUTTON')) {
      e.preventDefault();
    } else {
      this.selected.emit(this.document._id);
    }
  }

  clickDownloadForm(): void {
    this.downLoadForm.emit(this.document._id);
  }

  clickDeleteForm(): void {
    this.deleteForm.emit(this.document._id);
  }
}
