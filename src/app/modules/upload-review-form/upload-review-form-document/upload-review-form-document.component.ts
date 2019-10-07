import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Document } from '@models/upload-review-form/document.model';
import { IconsEnum } from '@app/shared/icons.enum';

@Component({
  selector: 'app-upload-review-form-document',
  templateUrl: './upload-review-form-document.component.html',
  styleUrls: ['./upload-review-form-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UploadReviewFormDocumentComponent implements OnInit {
  public _document: Document;
  public icons = IconsEnum;
  public form: FormGroup;
  public isImageLoader = true;

  @Input()
  set document(document: Document) {
    this.isImageLoader = true;
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

  ngOnInit(): void {
    // if (document) {
    //   this.form.controls.type.setValue(this.document.submission_type);
    //   this.form.controls.account.setValue(this.document.person_name);
    //   this.form.controls.account.setValue(this.document.person_name);
    // }
  }

}
