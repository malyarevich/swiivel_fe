import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '@app/models/data-collection/form.model';
import { UploadStatus } from '../../../models/upload.model';
// import { PDFProgressData } from 'pdfjs-dist';
// import { FormsDivModel } from '../../../../form-constructor/form-builder/documents-forms/model/formsPDF.model';

@Component({
  selector: 'sw-pdf-loader',
  templateUrl: './pdf-loader.component.html',
  styleUrls: ['./pdf-loader.component.scss']
})
export class PdfLoaderComponent implements OnInit {
  @Input() form: Form;
  @Input() pdf: any;
  @Input() formErrors: object;
  @Input() fg: FormGroup;
  // @Output() changeSomeEmitter = new EventEmitter<any>();

  uploadStatus: object = {};
  UploadStatus = UploadStatus;

  file: object = {};
  progress: object = {};
  response: object = {};

  // token = `?api_token=${environment.api_token}`;
  token = '';
  page = 1;
  isStartLoading = false;
  isFinishLoading = false;
  innerWidth: number;
  defaultHeightPdf = 1156;
  defaultWidthPdf = 816;
  heightPdf = 934;
  widthPdf = 660;

  constructor() {}

  ngOnInit() {
    // console.log(this.pdf);
  }

  // actionSome() {
  //   this.changeSomeEmitter.emit(this.isFinishLoading);
  // }

  onProgress(progressData: any) {
    // do anything with progress data. For example progress indicator
    this.isStartLoading = true;
    this.isFinishLoading = progressData.loaded <= progressData.total;
  }

  getKY(): number {
    return this.heightPdf / this.defaultHeightPdf;
  }

  getKX(): number {
    return this.widthPdf / this.defaultWidthPdf;
  }

  styleObject(div: any) {
    return {
      top: (div.top * this.getKY()) / 12 + 'em',
      left: (div.left * this.getKX()) / 12 + 'em',
      width: (div.width * this.getKX()) / 12 + 'em',
      height: (div.height * this.getKY()) / 12 + 'em'
    };
  }
  // FIXME: need condition for parse linkedField
  // form.forms.form.fieldsPdf[index].linkedField = undefined;
  isShowLinkedFieldForSystem(div: any) {
    // error with:
    // div.type === 'system'
    // if(div.type === 'system') {
    //   console.log("div.type === 'system' && div.linkedField");
    //   console.log(div.type === 'system');
    //   console.log(div.linkedField);
    // }
    return div.type === 'system' && div.linkedField;
  }

  isShowLinkedFieldForCheckbox(div: any) {
    return div.type === 'checkbox';
  }

  isShowLinkedFieldForTemporary(div: any) {
    // error with:
    // div.type === 'temporary'
    // if(div.type === 'temporary') {
    //   console.log("div.type === 'temporary' && div.linkedField");
    //   console.log(div.type === 'temporary')
    //   console.log(div.linkedField);
    // }
    return div.type === 'temporary' && div.linkedField;
  }

  isShowLinkedFieldForSignature(div: any) {
    // error with:
    // div.type === 'signature'
    // if(div.type === 'signature') {
    //   console.log("div.type === 'signature' && div.linkedField");
    //   console.log(div.type === 'signature');
    //   console.log(div.linkedField);
    // }
    return div.type === 'signature';
  }
  
  onUploadSelected(file, document: any) {
    this.uploadStatus[document['id']] = UploadStatus.selected;
    this.file[document['id']] = file;
    //`File selected: ${file.name} (${file.size})`;
  }

  onUploadProgress(progress, document: any) {
    this.uploadStatus[document['id']] = UploadStatus.process;
    this.progress[document['id']] = progress;
    //` Upload progress: ${progress.loaded} of ${progress.total}`;
  }

  onUploadResponse(response, document: any) {
    this.uploadStatus[document['id']] = UploadStatus.selected;
    this.response[document['id']] = response;
    //`Upload complete. File path: ${response.file_path} (${response.file_origin_name})`;
  }
}
