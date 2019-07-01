import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileAttachment} from "../../../../../../models/family/file-attachment.model";
import {FileAttachmentService} from "../../../../../../services/file-attachment/file-attachment.service";

interface Response {
  status: number;
  data: FileAttachment;
}

@Component({
  selector: 'app-family-edit-document',
  templateUrl: './family-edit-document.component.html',
  styleUrls: ['./family-edit-document.component.css']
})
export class FamilyEditDocumentComponent implements OnInit {
  @Output() closeModalEditFamilyDocument: EventEmitter<any> = new EventEmitter<any>();
  @Output() reloadFamilyDocument: EventEmitter<any> = new EventEmitter<any>();
  @Input() attachmentEditable: FileAttachment;

  familyDocumentForm: FormGroup;

  constructor(private fb: FormBuilder, public fileAttachmentService: FileAttachmentService) {
  }


  ngOnInit() {
    this.initFamilyEditDocumentForm();
  }

  initFamilyEditDocumentForm() {
    this.familyDocumentForm = this.fb.group({
      title: [this.attachmentEditable.title, Validators.required],
      type: [this.attachmentEditable.type],
    });
  }

  updateFamilyDocument() {
    this.fileAttachmentService.updateInfo(this.attachmentEditable.id, {...this.familyDocumentForm.value})
      .subscribe((res: Response) => {
        if(res.status) {
          this.reloadFamilyDocument.emit();
        }
        this.onCloseEditFamilyDocumentModal()
      })
  }


  onCloseEditFamilyDocumentModal() {
    this.closeModalEditFamilyDocument.emit();
  }

}
