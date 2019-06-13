import { Component, Input, OnInit } from "@angular/core";
import { Form } from "../../../model/form.model";
import { environment } from "../../../../../../environments/environment";
import { PDFProgressData } from "pdfjs-dist";
import { FormsDivModel } from "../../../v-form-constructor/v-form-builder/v-documents-forms/model/formsPDF.model";

@Component({
  selector: "app-online-pdf-forms",
  templateUrl: "./online-pdf-forms.component.html",
  styleUrls: ["./online-pdf-forms.component.scss"]
})
export class OnlinePdfFormsComponent implements OnInit {
  @Input() form: Form;

  constructor() {}

  ngOnInit() {
    // console.log(this);
  }
}
