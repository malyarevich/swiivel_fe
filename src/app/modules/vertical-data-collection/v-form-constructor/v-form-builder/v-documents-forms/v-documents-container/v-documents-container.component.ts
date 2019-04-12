import {Component, Input, OnInit} from '@angular/core';
import {DataTypeAllowed, DocumentsModel, dataTypes, DataTypeItemAllowed} from "../model/documents.model";
import {VFilesService} from "../../../../v-files.service";
import {environment} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-v-documents-container',
  templateUrl: './v-documents-container.component.html',
  styleUrls: ['./v-documents-container.component.scss']
})
export class VDocumentsContainerComponent implements OnInit {
  dataTypes: DataTypeAllowed = dataTypes;
  @Input() documents: DocumentsModel[];
  @Input() formId: string;
  @Input() attachments;
  token = 'api_token='+environment.api_token;
  fileName: string = ' ';
   fileLink: string = ' ';
  sectionName: string = "Documents for Parents";
  width: string = "4 Columns";
  constructor(private fileService: VFilesService) { }

  ngOnInit() {
    console.log(this.attachments);
    console.log(this.documents);
  }

  log(document){
    console.log(this.attachments[document.data]);
  }

  fileChange(event, document){
    let fileList: FileList = event.target.files;
    console.log(fileList);
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('attachment', file, file.name);
     this.fileService.uploadFile(this.formId, formData)
       .subscribe(result=>{
         // document.data.link = res.link+'?api_token=123'
         document.data = result.hash;
         this.fileLink = result.link;
         this.fileName = result.name;
         console.log(document);
       });
    }
  }

  dataSectionChange(event: boolean, typeArray: DataTypeItemAllowed[]){
    typeArray.forEach(item=>{
      item.isAllow=event;
    })
  }

  deleteAttachment(document: DocumentsModel){
    document.data='';
  }

  openForPreview(document: DocumentsModel){
    if(!document.data) return;
    window.open(this.attachments[document.data].link+'?api_token='+environment.api_token, 'Image');
  }

}

