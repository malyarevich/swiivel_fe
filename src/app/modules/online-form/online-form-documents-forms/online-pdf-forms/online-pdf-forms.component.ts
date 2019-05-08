import {Component, Input, OnInit} from '@angular/core';
import {Form} from "../../../vertical-data-collection/model/form.model";
import {environment} from "../../../../../environments/environment";
import {PDFProgressData} from "pdfjs-dist";
import {FormsDivModel} from "../../../vertical-data-collection/v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model";

@Component({
  selector: 'app-online-pdf-forms',
  templateUrl: './online-pdf-forms.component.html',
  styleUrls: ['./online-pdf-forms.component.css']
})
export class OnlinePdfFormsComponent implements OnInit {
  @Input() form: Form;
  token=`?api_token=${environment.api_token}`;
  page =1;
  loading: boolean = false;


  constructor() { }

  ngOnInit() {
  }


  onProgress(progressData: PDFProgressData) {
    // do anything with progress data. For example progress indicator
    this.loading=progressData.loaded<=progressData.total;
  }

  styleObject(div:FormsDivModel){
    return {
      'top': div.top +'px',
      'left': div.left +'px',
      'width': div.width +'px',
      'height': div.height +'px'
    }
  }
}
