import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Form} from '../../../model/form.model';
import {DocumentsModel} from '../../../v-form-constructor/v-form-builder/v-documents-forms/model/documents.model';
import {FilesService} from '../../services/files.service';
import {Subscription} from 'rxjs';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-online-documents',
  templateUrl: './online-documents.component.html',
  styleUrls: ['./online-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class OnlineDocumentsComponent implements OnInit, OnDestroy {

  @Input() form: Form;

  constructor(
    private fileService: FilesService,
    private detectorRef: ChangeDetectorRef
  ) {}

  public selectedFile: File = null;
  public selectedFileSize: string;
  public uploaded: string;
  public uploadProgress: string;
  public uploadSubscription: Subscription;

  ngOnInit() {}

  openForPreview(document: DocumentsModel) {
    if (!document.data) { return; }
    window.open(this.form.attachments[document.data].link, '_self');
  }

  downloadFile(document: DocumentsModel) {
    if (!document.data) {
      return;
    }
    this.fileService.getFileFromServer(
      this.form.attachments[document.data].link
    );
  }

  getAcceptedFormats(document: DocumentsModel, type?: string) {
    const formats = [];
    const data = document.dataTypeAllowed;
    if (type) {
      switch (type) {
        case 'documents':
          if (data.isDocuments) {
            data.documents.forEach(item => {
              if (item.isAllow) {
                formats.push(item.name);
              }
            });
            return formats.join(', ');
          }
          break;
        case 'images':
          if (data.isImages) {
            data.images.forEach(item => {
              if (item.isAllow) {
                formats.push(item.name);
              }
            });
            return formats.join(', ');
          }
          break;
        case 'videoAudio':
          if (data.isVideoAudio) {
            data.videoAudio.forEach(item => {
              if (item.isAllow) {
                formats.push(item.name);
              }
            });
            return formats.join(', ');
          }
      }
    } else {
      if (data.isDocuments) {
        data.documents.forEach(item => {
          if (item.isAllow) {
            formats.push(item.type);
          }
        });
      }
      if (data.isImages) {
        data.images.forEach(item => {
          if (item.isAllow) {
            formats.push(item.type);
          }
        });
      }
      if (data.isVideoAudio) {
        data.videoAudio.forEach(item => {
          if (item.isAllow) {
            formats.push(item.type);
          }
        });
      }
      return formats;
    }
  }

  onFileSelected(document: DocumentsModel, file: File) {
    const acceptedFormats = this.getAcceptedFormats(document);
    const regExp = new RegExp(/\.[^.]*$/);
    const fileFormat = regExp.exec(file.name)[0];
    if (acceptedFormats.includes(fileFormat)) {
      this.selectedFile = file;
      this.selectedFileSize = this.fileService.formatFileSize(this.selectedFile.size);
      document.fileUploading = true;
      const formData = new FormData();
      formData.append('type', 'document');
      formData.append('original_name', file.name);
      formData.append('file', file);
      this.uploadSubscription = this.fileService.uploadFileToServer(this.form._id, formData)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.uploaded = this.fileService.formatFileSize(event.loaded);
            this.uploadProgress = Math.round(event.loaded * 100 / event.total) + '%';
            this.detectorRef.markForCheck();
            if (event.loaded === event.total) {
              document.fileUploading = false;
              document.fileUploaded = true;
            }
          }
        });
    } else {
      alert('File type does not supported');
    }
  }

  onCancelUpload(document: DocumentsModel) {
    this.uploadSubscription.unsubscribe();
    document.fileUploading = false;
  }

  deleteUploadedFile(document: DocumentsModel) {
    this.selectedFile = null;
    document.fileUploaded = false;
  }

  getCountPdfPages() {
    const reader = new FileReader();
    reader.readAsBinaryString(this.selectedFile);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        return reader.result.match(new RegExp(/\/Type[\s]*\/Page[^s]/g)).length;
      }
    };
  }

  getDocumentName(document: DocumentsModel): string {
    if (document.data) {
      return this.form.attachments[document.data].name;
    }
    return 'File is not exist...';
  }

  ngOnDestroy(): void {
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }

}
