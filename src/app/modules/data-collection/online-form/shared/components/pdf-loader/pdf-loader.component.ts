import { Component, Input, OnInit } from "@angular/core";
import { PDFProgressData } from "pdfjs-dist";
import { FormsDivModel } from "../../../../../vertical-data-collection/v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model";

@Component({
  selector: "app-pdf-loader",
  templateUrl: "./pdf-loader.component.html",
  styleUrls: ["./pdf-loader.component.scss"]
})
export class PdfLoaderComponent implements OnInit {
  @Input() pdf: any;
  // @Output() changeSomeEmitter = new EventEmitter<any>();

  // token = `?api_token=${environment.api_token}`;
  token = "";
  page = 1;
  isStartLoading: boolean = false;
  isFinishLoading: boolean = false;
  innerWidth: number;
  defaultHeightPdf: number = 1156;
  defaultWidthPdf: number = 816;
  heightPdf: number = 934;
  widthPdf: number = 660;

  constructor() {}

  ngOnInit() {
    // console.log(this.pdf);
  }

  // actionSome() {
  //   this.changeSomeEmitter.emit(this.isFinishLoading);
  // }

  onProgress(progressData: PDFProgressData) {
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

  styleObject(div: FormsDivModel) {
    return {
      top: (div.top * this.getKY()) / 12 + "em",
      left: (div.left * this.getKX()) / 12 + "em",
      width: (div.width * this.getKX()) / 12 + "em",
      height: (div.height * this.getKY()) / 12 + "em"
    };
  }
  // FIXME: need condition for parse LinkedField
  // form.forms.form.fieldsPdf[index].LinkedField = undefined;
  isShowLinkedFieldForSystem(div: any) {
    // error with:
    // div.type === 'system'
    // if(div.type === 'system') {
    //   console.log("div.type === 'system' && div.LinkedField");
    //   console.log(div.type === 'system');
    //   console.log(div.LinkedField);
    // }
    return div.type === "system" && div.LinkedField;
  }

  isShowLinkedFieldForTemporary(div: any) {
    // error with:
    // div.type === 'temporary'
    // if(div.type === 'temporary') {
    //   console.log("div.type === 'temporary' && div.LinkedField");
    //   console.log(div.type === 'temporary');
    //   console.log(div.LinkedField);
    // }
    return div.type === "temporary" && div.LinkedField;
  }

  isShowLinkedFieldForSignature(div: any) {
    // error with:
    // div.type === 'signature'
    // if(div.type === 'signature') {
    //   console.log("div.type === 'signature' && div.LinkedField");
    //   console.log(div.type === 'signature');
    //   console.log(div.LinkedField);
    // }
    return div.type === "signature";
  }
}
