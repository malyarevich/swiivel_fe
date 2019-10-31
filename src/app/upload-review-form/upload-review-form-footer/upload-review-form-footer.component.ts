import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';
import { UploadReviewFormStatusesEnum } from '../upload-review-form-statuses.enum';
import { UploadReviewFormService } from '../upload-review-form.service';

@Component({
  selector: 'app-upload-review-form-footer',
  templateUrl: './upload-review-form-footer.component.html',
  styleUrls: ['./upload-review-form-footer.component.scss']
})

export class FormUploadFooterComponent {
  @Input() documents: ExtremeUploadForms;
  @Input() disabled: boolean;
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
