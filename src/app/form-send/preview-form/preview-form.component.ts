import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'sw-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.scss']
})
export class PreviewFormComponent {

  @Input() formId: string;
  @Input() isReviewMode = false;
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() saveNext: EventEmitter<any> = new EventEmitter();
  pdfError: boolean;
  pdfLoading = true;

  constructor() { }

  getLink() {
    return `http://red.dev.codeblue.ventures/api/v1/proxy/form-builder/preview-pdf-form/${this.formId}?api_token=123`;
  }

  onProgress(progressData: PDFProgressData) {
    this.pdfError = false;
    if (progressData.loaded === progressData.total) {
      this.pdfLoading = false;
    }
  }

  onError(error: any) {
    if (error) {
      this.pdfError = true;
      this.pdfLoading = false;
    }
  }

  onBackOnlineForm(event): void {
    this.back.emit(event);
  }

  onSaveNextOnlineForm(event): void {
    this.saveNext.emit(event);
  }

}
