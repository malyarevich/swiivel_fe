import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  public zoom = 1;
  public imgDimension: { height: number, width: number } = {height: 0, width: 0};
  @ViewChild('img', { static: false }) img: ElementRef;

  @Input() isSideBarShown: boolean;
  @Input() rotatingPicture = true;
  @Output() rotateImg = new EventEmitter<any>();

  @Input()
  set document(document: Document) {
    this.isDocumentLoading = true;
    this.zoom = 1;
    this._document = document;
    this.angle = (document && document.rotate) ? parseInt(document.rotate, 10) : 0;
  }

  get document(): Document {
    if (this._document && this._document._id && this._document._id === this.loadedId) {
      this.isDocumentLoading = false;
    }
    return this._document;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  isLoaded(): void {
    this.isDocumentLoading = false;
    this.loadedId = this._document._id;
    if (this.img) {
      this.imgDimension = {
        width: this.img.nativeElement.naturalWidth * this.zoom,
        height: this.img.nativeElement.naturalHeight * this.zoom
      };
    }
  }

  clickRotateImg(evt: string): void {
    if (evt === 'left') {
      if (this.angle + 90 < 361) {
        this.angle = this.angle + 90;
      } else {
        this.angle = 90;
      }
    } else {
      if (this.angle - 90 >= 0) {
        this.angle = this.angle - 90;
      } else {
        this.angle = 270;
      }
    }
    this.cdr.detectChanges();
    this.rotateImg.emit(this.angle);
  }

  clickZoomImg(evt: string): void {
    if ((this.zoom > 0.5) && (this.zoom < 2)) {
      if (evt === 'in' && this.zoom + 0.1 < 2) {
        this.zoom += 0.1;
      } else if (evt === 'out' && this.zoom - 0.1 > 0.5) {
        this.zoom -= 0.1;
      }
      if (this.img) {
        this.imgDimension = {
          width: this.img.nativeElement.naturalWidth * this.zoom,
          height: this.img.nativeElement.naturalHeight * this.zoom
        };
      }
    }
  }
}
