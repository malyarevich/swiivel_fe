import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataTypeAllowed, DocumentsModel } from '../model/documents.model';
import { FilesService } from '../../../../services/files.service';
import { environment } from '../../../../../../../environments/environment';
import { DocumentsFormsModel } from '../../../../../../models/data-collection/form-constructor/form-builder/documents-forms.model';
import { FormService } from '../../../../services/form.service';
import { PopupRef } from '@app/core/components/popup/popup.ref';
import { Popup } from '@app/core/popup.service';

@Component({
  selector: 'app-documents-container',
  templateUrl: './documents-container.component.html',
  styleUrls: ['./documents-container.component.scss']
})

export class DocumentsContainerComponent implements OnInit {

  documentsFormats = ['pdf', 'doc', 'xlsx', 'csv', 'html', 'txt', 'rtf'].map(i => ({ title: i, value: false }));
  imgFormats = ['jpg', 'jpeg', 'png', 'gif'].map(i => ({ title: i, value: false }));
  audiovideoFormats = ['mp3', 'wma', 'flv', 'docs', 'mpg', 'avi'].map(i => ({ title: i, value: false }));

  docs: boolean = false;
  images: boolean = false;
  audio: boolean = false;

  @Input() documents: DocumentsModel[];
  @Input() formId: string;
  @Input() attachments;
  @Input() documentsForms: DocumentsFormsModel;

  @ViewChild('formatsOptions', { static: false }) formatsPop;

  constructor(
    private fileService: FilesService,
    private formService: FormService,
    private popup: Popup,
    private cdr: ChangeDetectorRef
  ) { }

  public token = '?api_token=' + environment.api_token;
  public isExpand = true;
  public dataTypeAllowed: DataTypeAllowed;

  private ref: PopupRef;
  private docFormats: any;

  ngOnInit() { }

  fileChange(event, document) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('attachment', file, file.name);
      this.fileService.uploadFile(this.formId, formData).subscribe(result => {
        this.formService.getOneForm(this.formId).subscribe(form => {
          this.attachments = form.attachments;
          document.data = result.hash;
        });
      });
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

  focusInput(elementRef) {
    elementRef.click();
  }

  clearFormats() {
    this.docs = false;
    this.images = false;
    this.audio = false;
    this.documentsFormats.forEach(i => i.value = false);
    this.imgFormats.forEach(i => i.value = false);
    this.audiovideoFormats.forEach(i => i.value = false);
  }

  prepareFormats(formatsArr: any[]) {
    formatsArr.forEach(f => {
      if (this.documentsFormats.findIndex(i => i.title === f) >= 0) {
        this.docs = true;
        this.documentsFormats[this.documentsFormats.findIndex(i => i.title === f)].value = true;
      } else if (this.imgFormats.findIndex(i => i.title === f) >= 0) {
        this.images = true;
        this.imgFormats[this.imgFormats.findIndex(i => i.title === f)].value = true;
      } else if (this.audiovideoFormats.findIndex(i => i.title === f) >= 0) {
        this.audio = true;
        this.audiovideoFormats[this.audiovideoFormats.findIndex(i => i.title === f)].value = true;
      }
    });
  }

  openFormatsPop(doc: any) {
    if (doc) {
      this.docFormats = doc;
      this.prepareFormats(this.docFormats.dataTypeAllowed)
    }
    this.ref = this.popup.open({
      origin: null,
      content: this.formatsPop,
      panelClass: 'centered-panel'
    });
    this.ref.afterClosed$.subscribe(result => {
      this.ref = null;
      this.clearFormats()
      this.docFormats = null;
    });
  }

  closePop() {
    if (this.ref) {
      this.ref.close();
    }
  }

  formatChange(title: string, value: boolean) {
    if (value === true && this.docFormats.dataTypeAllowed.indexOf(title) === -1) {
      this.docFormats.dataTypeAllowed.push(title);
    } else if (value === false && this.docFormats.dataTypeAllowed.indexOf(title) >= 0) {
      this.docFormats.dataTypeAllowed.splice(this.docFormats.dataTypeAllowed.indexOf(title), 1);
    }
    this.cdr.markForCheck();
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
