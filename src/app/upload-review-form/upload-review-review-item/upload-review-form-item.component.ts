import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from '@models/upload-review-form/document.model';
import { IconsEnum } from '@shared/icons.enum';
import { UploadReviewFormStatusesEnum } from '../upload-review-form-statuses.enum';
import { UploadReviewFormService } from '../upload-review-form.service';

@Component({
  selector: 'app-upload-review-review-item',
  templateUrl: './upload-review-form-item.component.html',
  styleUrls: ['./upload-review-form-item.component.scss']
})

export class UploadReviewReviewItemComponent {
  @Input() document: Document;
  @Output() selected = new EventEmitter<string>();
  public icons = IconsEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;
  @Output() downloadForm = new EventEmitter<string>();
  @Output() deleteForm = new EventEmitter<string>();

  constructor(public uploadReviewFormService: UploadReviewFormService) { }


  selectItem(e: Event): void {
    // tslint:disable-next-line: no-string-literal
    if (e && e.target && (e.target['tagName'] === 'BUTTON' || e.target['parentElement'].tagName === 'BUTTON')) {
      e.preventDefault();
    } else {
      this.selected.emit(this.document._id);
    }
  }

  clickDownloadForm(): void {
    this.downloadForm.emit(this.document._id);
  }

  clickDeleteForm(): void {
    this.deleteForm.emit(this.document._id);
  }
}
