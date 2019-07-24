import { Component, Input, OnInit } from "@angular/core";
import {
  DataTypeAllowed,
  DocumentsModel,
  dataTypes,
  DataTypeItemAllowed
} from "../model/documents.model";
import { VFilesService } from "../../../../services/v-files.service";
import { environment } from "../../../../../../../environments/environment";
import {DocumentsFormsModel} from "../../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/documents-forms.model";
import {VFormService} from "../../../../services/v-form.service";

@Component({
  selector: "app-v-documents-container",
  templateUrl: "./v-documents-container.component.html",
  styleUrls: ["./v-documents-container.component.scss"]
})
export class VDocumentsContainerComponent implements OnInit {
  dataTypes: DataTypeAllowed = dataTypes;
  @Input() documents: DocumentsModel[];
  @Input() formId: string;
  @Input() attachments;
  @Input() documentsForms: DocumentsFormsModel;

  token = "?api_token=" + environment.api_token;

  isExpand: boolean = true;

  getAttachmentName(document) {
    if(document.data && this.attachments[document.data]) {
      return this.attachments[document.data].name;
    }
  }

  constructor(
    private fileService: VFilesService,
    private formService: VFormService
  ) {}

  ngOnInit() {
    this.updateAttachments();
  }

  fileChange(event, document) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("attachment", file, file.name);
      this.fileService.uploadFile(this.formId, formData).subscribe(
        result => {
          document.data = result.hash;
        },
        error => console.log(error),
        () => this.updateAttachments()
      );
    }
  }

  dataSectionChange(event: boolean, typeArray: DataTypeItemAllowed[]) {
    typeArray.forEach(item => {
      item.isAllow = event;
    });
  }

  deleteAttachment(document: DocumentsModel) {
    document.data = "";
  }

  openForPreview(document: DocumentsModel) {
    if (!document.data) return;
    window.open(this.attachments[document.data].link + this.token);
  }

  updateAttachments() {
    this.formService
      .getOneForm(this.formId)
      .subscribe(form => (this.attachments = form.attachments));
  }

  changeSectionName(sectionName: string) {
    this.documentsForms.documents.sectionName = sectionName;
  }

  changeSectionWidth(sectionWidthType: string) {
    this.documentsForms.documents.sectionWidth = sectionWidthType;
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }
}
