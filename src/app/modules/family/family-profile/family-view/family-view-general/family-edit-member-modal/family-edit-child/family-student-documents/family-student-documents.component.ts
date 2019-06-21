import {Component, Input, OnInit} from '@angular/core';
import {FileAttachment} from "../../../../../../../../models/family/file-attachment.model";
import {FileAttachmentService} from "../../../../../../../../services/file-attachment/file-attachment.service";
import {FamilyPerson} from "../../../../../../../../models/family/family-person.model";

interface Response {
  status: number;
  data: FileAttachment;
}

@Component({
  selector: 'app-family-student-documents',
  templateUrl: './family-student-documents.component.html',
  styleUrls: ['./family-student-documents.component.css']
})
export class FamilyStudentDocumentsComponent implements OnInit {
  @Input() familyPerson: FamilyPerson;
  attachments: [FileAttachment];

  constructor(private fileAttachmentService: FileAttachmentService) {
  }

  ngOnInit() {
    this.attachments = this.familyPerson.file_attachments;
  }

  fileUpload(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length <= 0) {
      return;
    }
    let file: File = fileList[0];
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('entityType', 'personFamily');
    formData.append('entityId', this.familyPerson.id);
    this.fileAttachmentService.uploadFile(formData)
      .subscribe((result: Response) => {
          if (result.status) {
            this.attachments.push(result.data);
          }
        },
        error => console.log(error)
      );
  }

}
