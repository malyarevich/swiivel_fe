import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '../upload-review-form-statuses.enum';
import { UploadReviewFormService } from '../upload-review-form.service';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';

@Component({
  selector: 'app-upload-review-form-footer',
  templateUrl: './upload-review-form-footer.component.html',
  styleUrls: ['./upload-review-form-footer.component.scss']
})

export class FormUploadFooterComponent {
  @Input() documents: ExtremeUploadForms;
  @Output('changeForm') changeFormEmmiter = new EventEmitter<string>();

  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) {}

  prev() {
    this.changeFormEmmiter.emit(this.documents.previous_form.form_id);
  }

  next() {
    this.changeFormEmmiter.emit(this.documents.next_form.form_id);
  }
}
