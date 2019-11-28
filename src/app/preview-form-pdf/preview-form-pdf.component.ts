import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'sw-preview-form-pdf',
  templateUrl: './preview-form-pdf.component.html',
  styleUrls: ['./preview-form-pdf.component.scss']
})
export class PreviewFormPdfComponent implements OnInit {

  @Input() formId;
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() saveNext: EventEmitter<any> = new EventEmitter();
  pdfError: boolean;
  pdfLoading = true;

  constructor() { }

  ngOnInit() {
  }

  getLink() {
    return `http://red.dev.codeblue.ventures/api/v1/proxy/form-builder/preview-pdf-form/${this.formId}?api_token=123`;
    // return `http://34.73.126.99/api/v1/preview-pdf-form/${this.formId}?api_token=123`
  }

  onProgress(progressData: PDFProgressData) {
    this.pdfError = false
    console.log('progressData', progressData);
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
