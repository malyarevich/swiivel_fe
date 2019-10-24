import { Component, OnInit, Input } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.scss']
})
export class PreviewFormComponent implements OnInit {
  
  @Input() formId;
  pdfError: boolean;
  pdfLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

  getLink() {
    return `http://34.73.126.99/api/v1/preview-pdf-form/${this.formId}?api_token=123`
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

}
