import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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
  public angle = 0;
  public icons = IconsEnum;
  public isDocumentLoading = true;
  public loadedId: string;
  public sizes = SizesEnum;

  @Input() isSideBarShown: boolean;
  @Output() rotateImg = new EventEmitter<any>();
  @Output() zoomImg = new EventEmitter<string>();

  @Input()
  set document(document: Document) {
    this.isDocumentLoading = true;

    this._document = document;
    this.angle = (document && document.rotate) ? parseInt(document.rotate, 10) : 0;
  }

  get document(): Document {
    if (this._document && this._document._id && this._document._id === this.loadedId) {
      this.isDocumentLoading = false;
    }
    return this._document;
  }

  constructor() {}

  isLoaded(): void {
    this.isDocumentLoading = false;
    this.loadedId = this._document._id;
  }

  clickRotateImg(evt: string): void {
    this.rotateImg.emit({ direction: evt, angle: this._document.rotate ?  this._document.rotate : '0' });
  }

  clickZoomImg(evt: string): void {
    this.zoomImg.emit(evt);
  }
}
