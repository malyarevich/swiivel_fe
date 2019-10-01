import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '@app/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { Document } from '@models/data-collection/document.model';
import { ColorsEnum } from '@shared/colors.enum';
import { IconsEnum } from '@shared/icons.enum';

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

  constructor(public uploadReviewFormService: UploadReviewFormService) {}


  selectItem(e: Event): void {
    if (e && e.target && (e.target['tagName'] === 'BUTTON' || e.target['parentElement']['tagName'] === 'BUTTON')) {
      e.preventDefault();
    } else {
      this.selected.emit(this.document._id);
    }
  }
}
