import {Component, Input, OnInit} from '@angular/core';
import {FileAttachment} from "../../../../../../../../models/family/file-attachment.model";
import {FileAttachmentService} from "../../../../../../../../services/file-attachment/file-attachment.service";
import {FamilyPerson} from "../../../../../../../../models/family/family-person.model";

interface Response {
  status: number;
  data: FileAttachment;
}

interface DeleteResponse {
  status: number;
  data: number;
}

@Component({
  selector: 'app-family-student-documents',
  templateUrl: './family-student-documents.component.html',
  styleUrls: ['./family-student-documents.component.css']
})
export class FamilyStudentDocumentsComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  attachments: [FileAttachment];
  loader: boolean = false;

  constructor(private fileAttachmentService: FileAttachmentService) {
  }

  ngOnInit() {
    this.attachments = this.familyPerson.file_attachments;
  }

  fileUpload(event) {
    this.loader = true;
    let fileList: FileList = event.target.files;
    if (fileList.length <= 0) {
      return;
    }
    let file: File = fileList[0];
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('entityType', 'personFamily');
    formData.append('entityId', JSON.stringify(this.familyPerson.id));
    this.fileAttachmentService.upload(formData)
      .subscribe((result: Response) => {
          if (result.status) {
            this.loader = false;
            this.attachments.push(result.data);
          }
        },
        error => {
          this.loader = false;
          console.log(error)
        }
      );
  }

  fileDownload(link) {
    this.fileAttachmentService.getDownloadLink(link)
      .subscribe((result) => {
          if (result.status) {
            window.open(result.data, "_blank");
          }
        },
        error => console.log(error)
      );
  }

  fileDelete(link) {
    this.fileAttachmentService.delete(link)
      .subscribe((result: DeleteResponse) => {
          if (result.status) {
            let index = this.attachments.findIndex(item => item.id === result.data);
            this.attachments.splice(index, 1);
          }
        },
        error => console.log(error)
      );
  }

}
