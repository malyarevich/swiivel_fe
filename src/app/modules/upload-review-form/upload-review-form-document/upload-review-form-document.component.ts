import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Document } from '@models/upload-review-form/document.model';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'app-upload-review-form-document',
  templateUrl: './upload-review-form-document.component.html',
  styleUrls: ['./upload-review-form-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UploadReviewFormDocumentComponent {
  public _document: Document;
  public icons = IconsEnum;
  public form: FormGroup;
  public isDocumentLoading = true;

  @Input()
  set document(document: Document) {
    this.isDocumentLoading = true;
    this._document = document;
  }

  get document(): Document {
    return this._document;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: new FormControl([], Validators.required),
      account: new FormControl([], Validators.required),
      student: new FormControl([], Validators.required)
    });
  }

  isLoaded(): void {
    this.isDocumentLoading = false;
  }
}
