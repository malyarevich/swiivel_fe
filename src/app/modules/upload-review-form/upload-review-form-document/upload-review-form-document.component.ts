import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Document } from '@models/upload-review-form/document.model';
import { IconsEnum } from '@shared/icons.enum';
import { SizesEnum } from '@shared/sizes.enum';

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
  public sizes = SizesEnum;
  public isSettingsOpen = true;
  public isDocumentLoading = true;
  public angle = 0;
  @Input() documentTypes = [];
  @Input() documentStudent = [];
  @Input() documentAccount = [];
  @Output() rotateImg = new EventEmitter<any>();
  @Output() zoomImg = new EventEmitter<string>();

  @Input()
  set document(document: Document) {
    this.isDocumentLoading = true;
    if (document) {
      this.form.controls['type'].setValue(document.entity_name);
      this.form.controls['account'].setValue(document.family_id);
      this.form.controls['student'].setValue(document.person_name);
    }
    this._document = document;
    this.angle = (document && document.rotate) ? parseInt(document.rotate, 10) : 0;
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

  changeFormState(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  clickRotateImg(evt: string): void {
    this.rotateImg.emit({ direction: evt, angle: this._document.rotate ?  this._document.rotate : '0' });
  }

  clickZoomImg(evt: string): void {
    this.zoomImg.emit(evt);
  }
}
