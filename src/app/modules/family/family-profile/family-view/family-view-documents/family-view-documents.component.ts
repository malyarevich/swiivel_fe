import {Component, Input, OnInit} from '@angular/core';
import {Family} from "../../../../../models/family/family.model";
import {FamilyService} from "../../../../../services/family/family.service";
import {DataTableColumn} from "../../../../../models/data-table/data-table-column.model";
import {FileAttachment} from "../../../../../models/family/file-attachment.model";
import {FileAttachmentService} from "../../../../../services/file-attachment/file-attachment.service";

interface Response {
  status: number;
  data: [FileAttachment]
}

@Component({
  selector: 'app-family-view-documents',
  templateUrl: './family-view-documents.component.html',
  styleUrls: ['./family-view-documents.component.css']
})
export class FamilyViewDocumentsComponent implements OnInit {
  @Input() familyId: string;
  familyName: string;
  attachments: [FileAttachment];
  showEditModal: boolean = false;
  attachmentEditable: FileAttachment;

  cols: DataTableColumn[] = [
    {
      id: 'title',
      type: 'text',
      title: 'TITLE',
      sort: true,
      search: true,
    },
    {
      id: 'type',
      type: 'text',
      title: 'TYPE',
      sort: true,
      search: true,
    },
    {
      id: 'format',
      type: 'text',
      title: 'FORMAT',
      sort: true,
      search: true,
    },

    {
      id: 'uploaded_date',
      type: 'date',
      title: 'UPLOADED DATE',
      sort: true,
      search: true,
    },
    {
      id: 'student',
      type: 'text',
      title: 'STUDENT',
      sort: true,
      search: true,
    },
    {
      id: '',
      type: '',
      title: '',
      sort: false,
      search: false,
      width: '250px'
    },
  ];

  constructor(private familyService: FamilyService,private fileAttachmentService: FileAttachmentService) {
  }

  ngOnInit() {
    this.getFamilyName();
    this.getFamilyDocuments();
  }

  getFamilyName() {
    this.familyService.family.subscribe((res: Family) => {
      this.familyName = res.name;
    })
  }

  getFamilyDocuments() {
    this.fileAttachmentService.getByFamilyId(this.familyId).subscribe((res: Response) => {
      this.attachments = res.data;
    })
  }

  onSearchQuery(event) {
    // console.log(event);
  }

  // TODO: Create directive or pipe ConvertData for Safari browser
  convertDate(date) {
    return date.replace(/\s/g, "T");
  }

  downloadFamilyDocument(link) {
    this.fileAttachmentService.getDownloadLink(link)
      .subscribe((result) => {
          if (result.status) {
            window.open(result.data, "_blank");
          }
        },
        error => console.log(error)
      );
  }

  editAttachment(attachment) {
    this.showEditModal = true;
    this.attachmentEditable = attachment;
  }

  onCloseEditFamilyDocumentModal() {
    this.showEditModal = false;
  }

  onReloadFamilyDocument() {
    this.getFamilyDocuments();
  }

}
