import { Component, Input, OnInit } from "@angular/core";
import { Form } from "../../../model/form.model";
import { DocumentsModel } from "../../../v-form-constructor/v-form-builder/v-documents-forms/model/documents.model";
import { environment } from "../../../../../../environments/environment";
import { FilesService } from "../../services/files.service";

@Component({
  selector: "app-online-documents",
  templateUrl: "./online-documents.component.html",
  styleUrls: ["./online-documents.component.scss"]
})
export class OnlineDocumentsComponent implements OnInit {
  @Input() form: Form;

  constructor(private fileService: FilesService) {}

  ngOnInit() {
    // console.log(this);
  }
  //FIXME: download instead open
  openForPreview(document: DocumentsModel) {
    if (!document.data) return;
    window.open(this.form.attachments[document.data].link, "_self");
  }
  //FIXME: from server 200, but ok=false
  downloadFile(document: DocumentsModel) {
    if (!document.data) return;
    this.fileService.getFileFromServer(
      this.form.attachments[document.data].link
    );
  }
}