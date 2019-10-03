import { Component, Input } from '@angular/core';
import { Document } from '@models/upload-review-form/document.model';

@Component({
  selector: 'app-upload-review-form-document',
  templateUrl: './upload-review-form-document.component.html',
  styleUrls: ['./upload-review-form-document.component.scss']
})

export class UploadReviewFormDocumentComponent {
  @Input() document: Document;
}
