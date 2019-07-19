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

  selectedFile: File = null;

  constructor(
    private fileService: FilesService,
  ) {}

  ngOnInit() {
    // console.log(this.form);
  }
  //FIXME: download instead open
  openForPreview(document: DocumentsModel) {
    if (!document.data) return;
    window.open(this.form.attachments[document.data].link, "_self");
  }
  //FIXME: from server 200, but ok=false
  
  //   <button
  //   class="btn app-btn-primary form-control text-nowrap"
  //   (click)="downloadFile(document)"
  // ></button>
  downloadFile(document: DocumentsModel) {
    if (!document.data) return;
    this.fileService.getFileFromServer(
      this.form.attachments[document.data].link
    );
  }

  onFileSelected(event, name) {
    this.selectedFile = <File>event.target.files[0];
    // TODO: organize the uploading process 
    this.onUploadFile(name);
  }

  onUploadFile(name = 'fake') {
    const fd = new FormData();
    fd.append(name, this.selectedFile,  this.selectedFile.name);
    this.fileService.UploadFileToServer(fd);
  }

  getDocumentName(document: DocumentsModel): string {
    if(document.data) {
      return this.form.attachments[document.data].name;
    }
    return "File is not exist...";
  }

}
