import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { map } from 'rxjs/operators';

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

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  getLink() {
    if (this.formId) {
      return this.http.get(`/proxy/form-builder/preview-pdf-form/${this.formId}`).pipe(
        // return this.http.get(`/proxy/forms/online/${id}`).pipe(
        map(response => {
          console.log(response);
          return response;
        })
      );
    }
    console.error('Id of form is undefined');
    return undefined;
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
