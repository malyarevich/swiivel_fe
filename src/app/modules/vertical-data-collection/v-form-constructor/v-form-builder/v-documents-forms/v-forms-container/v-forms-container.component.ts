import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { FormsPDFModel, FormPDFDownloadModel } from "../model/formsPDF.model";
import { Field } from "../../../../model/field.model";
import { VFilesService } from "../../../../services/v-files.service";
import {DocumentsFormsModel} from "../../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/documents-forms.model";

@Component({
  selector: "app-v-forms-container",
  templateUrl: "./v-forms-container.component.html",
  styleUrls: ["./v-forms-container.component.scss"]
})
export class VFormsContainerComponent implements OnInit, OnChanges {
  @Input() existingFields: Field[];
  @Input() formsPDF: FormsPDFModel[];
  @Input() documentsForms: DocumentsFormsModel;

  existingFormsPDF: FormPDFDownloadModel[] = [];
  // page = 1;

  isExpand: boolean = true;

  constructor(private fileService: VFilesService) {}

  ngOnInit(): void {
    this.getExistingsFormPDFList();
  }

  fileChange(event, form: FormsPDFModel) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("pdfForm", file, file.name);
      this.fileService.uploadFormPDF(formData).subscribe(
        result => {
          // console.log(result);
          form.form = result;
        },
        error => console.log(error)
        // ,  ()=>this.updateAttachments()
      );
    }
  }

  getExistingsFormPDFList() {
    this.fileService.getFormsPDFList().subscribe(res => {
      // res.forEach(res1=>console.log(res1._id));
      this.existingFormsPDF = res;
    });
  }

  testLog(e) {
    // console.log(this.existingFormsPDF);
    //
    // console.log(this.formsPDF);
    // console.log(e);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formsPDF) {
      // this.getSelected(formPFD);
      // console.log(this.formsPDF[0].form._id)
    }
  }

  // getSelected(formPFD){
  //   const selected=  this.existingFormsPDF.forEach(res=>res._id==formPFD.id)
  // }

  changeSectionName(sectionName: string) {
    this.documentsForms.formsPDF.sectionName = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.documentsForms.formsPDF.sectionWidth = sectionWidthType;
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }
}
