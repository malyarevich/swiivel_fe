import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DataTypeAllowed, DocumentsModel} from '../model/documents.model';
import {VFilesService} from '../../../../services/v-files.service';
import {environment} from '../../../../../../../environments/environment';
import {DocumentsFormsModel} from '../../../../../../models/vertical-data-collection/v-form-constructor/v-form-builder/documents-forms.model';
import {VFormService} from '../../../../services/v-form.service';

@Component({
  selector: 'app-v-documents-container',
  templateUrl: './v-documents-container.component.html',
  styleUrls: ['./v-documents-container.component.scss']
})

export class VDocumentsContainerComponent implements OnInit {

  @Input() documents: DocumentsModel[];
  @Input() formId: string;
  @Input() attachments;
  @Input() documentsForms: DocumentsFormsModel;

  constructor(
    private fileService: VFilesService,
    private formService: VFormService,
  ) {}

  public token = '?api_token=' + environment.api_token;
  public isExpand = true;
  public dataTypeAllowed: DataTypeAllowed;

  ngOnInit() {}

  fileChange(event, document) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('attachment', file, file.name);
      this.fileService.uploadFile(this.formId, formData).subscribe(result => {
        this.formService
          .getOneForm(this.formId)
          .subscribe(form => {
            this.attachments = form.attachments;
            document.data = result.hash;
          });
        }
      );
    }
  }

  dataSectionChange(type: string, i: number) {
    this.dataTypeAllowed = this.documents[i].dataTypeAllowed;
    switch (type) {
      case 'documents':
        this.dataTypeAllowed.isDocuments = this.dataTypeAllowed.documents.some(item => item.isAllow);
        break;
      case 'images':
        this.dataTypeAllowed.isImages = this.dataTypeAllowed.images.some(item => item.isAllow);
        break;
      case 'videoAudio':
        this.dataTypeAllowed.isVideoAudio = this.dataTypeAllowed.videoAudio.some(item => item.isAllow);
        break;
    }
  }

  deleteAttachment(document: DocumentsModel) {
    document.data = '';
  }

  openForPreview(document: DocumentsModel) {
    if (!document.data) { return; }
    window.open(this.attachments[document.data].link);
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
