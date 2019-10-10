import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '@modules/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';

@Component({
  selector: 'app-upload-review-form-footer',
  templateUrl: './upload-review-form-footer.component.html',
  styleUrls: ['./upload-review-form-footer.component.scss']
})

export class FormUploadFooterComponent {
  @Input() documents: ExtremeUploadForms;
  @Output('changeForm') changeFormEmitter = new EventEmitter<string>();

  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) {}

  prev() {
    this.changeFormEmitter.emit(this.documents.previous_form._id);
  }

  next() {
    this.changeFormEmitter.emit(this.documents.next_form._id);
  }
}
