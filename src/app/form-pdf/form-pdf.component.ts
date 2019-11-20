import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'sw-form-pdf',
  templateUrl: './form-pdf.component.html',
  styleUrls: ['./form-pdf.component.scss']
})
export class FormPdfComponent implements OnInit {

  @Input() formId;
  @Input() isReviewMode = false;
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  @Output() onSaveNext: EventEmitter<any> = new EventEmitter();
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
    this.onBack.emit(event);
  }

  onSaveNextOnlineForm(event): void {
    this.onSaveNext.emit(event);
  }

}
