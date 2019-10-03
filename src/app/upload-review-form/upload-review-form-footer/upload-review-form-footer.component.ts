import { Component, Input } from '@angular/core';
import { UploadReviewFormStatusesEnum } from '@app/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';

@Component({
  selector: 'app-upload-review-form-footer',
  templateUrl: './upload-review-form-footer.component.html',
  styleUrls: ['./upload-review-form-footer.component.scss']
})

export class FormUploadFooterComponent {
  @Input() documents: ExtremeUploadForms;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(public uploadReviewFormService: UploadReviewFormService) {}
}
