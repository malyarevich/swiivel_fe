import { HttpEventType } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '@models/data-collection/form.model';
import { Subscription } from 'rxjs';
import { UploadStatus } from '../../models/upload.model';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'sw-online-documents',
  templateUrl: './online-documents.component.html',
  styleUrls: ['./online-documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineDocumentsComponent implements OnInit, OnDestroy {
  @Input() form: FormModel;
  @Input() formErrors: object;
  @Input() fg: FormGroup;

  pathIconsFolder = 'assets/images/icons/';
  uploadStatus: object = {};
  UploadStatus = UploadStatus;

  file: object = {};
  progress: object = {};
  response: object = {};

  constructor(
    private fileService: FilesService,
    private detectorRef: ChangeDetectorRef
  ) {}

  public uploadSubscription: Subscription;

  ngOnInit() {
    this.form.documents.forEach(document => {
      if (document.isUpload) {
        if (this.fg.value[document.id]) {
          this.uploadStatus[document.id] = UploadStatus.uploaded;
        } else {
          this.uploadStatus[document.id] = UploadStatus.init;
        }
      }
    });
  }

  openForPreview(document: any) {
    if (!document.data) {
      return;
    }
    window.open(this.form.attachments[document.data].link, '_self');
  }

  downloadFile(document: any) {
    if (!document.data) {
      return;
    }
    this.fileService.getFileFromServer(
      this.form.attachments[document.data].link
    );
  }

  getAcceptedFormats(document: any, type?: string) {
    const formats = [];
    // TODO: fix it <any>
    const data = document.dataTypeAllowed as any;
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

  onFileSelected(document: any, file: File) {
    const acceptedFormats = this.getAcceptedFormats(document);
    const regExp = new RegExp(/\.[^.]*$/);
    const fileFormat = regExp.exec(file.name)[0];
    if (acceptedFormats.includes(fileFormat)) {
      document.selectedFile = file;
      document.fileUploading = true;
      const formData = new FormData();
      formData.append('id', document.id);
      formData.append('type', 'document');
      formData.append('original_name', file.name);
      formData.append('file', file, file.name);
      this.uploadSubscription = this.fileService
        .uploadFileToServer(this.form._id, formData)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            document.uploaded = event.loaded;
            this.detectorRef.markForCheck();
            if (event.loaded === event.total) {
              document.fileUploading = false;
              document.fileUploaded = true;
              this.getCountPages(document);
            }
          }
        });
    } else {
      console.log(file);
      alert('File type does not supported');
    }
  }

  onCancelUpload(document: any) {
    this.uploadStatus[document.id] = UploadStatus.init;
    // this.uploadStatus[document.id] = UploadStatus.uploaded;
    this.fg.patchValue({ ...this.fg.value, [document.id]: undefined });
  }

  deleteUploadedFile(document: any) {
    // console.log({...this.fg.value, [document['id']]: undefined});
    this.uploadStatus[document.id] = UploadStatus.init;
    this.fg.patchValue({ ...this.fg.value, [document.id]: undefined });
  }

  getCountPages(document: any) {
    if (document.selectedFile.type === 'application/pdf') {
      const reader = new FileReader();
      reader.readAsBinaryString(document.selectedFile);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          document.countPages = reader.result.match(
            new RegExp(/\/Type[\s]*\/Page[^s]/g)
          ).length;
          this.detectorRef.markForCheck();
        }
      };
    }
  }

  getDocumentName(document: any): string {
    if (document.data) {
      return this.form.attachments[document.data].name;
    }
    return 'File is not exist...';
  }

  getDocumentPages(document: any): string {
    if (document.data) {
      const pages = this.form.attachments[document.data].numberOfPages;
      return String('(' + pages + ' pages)');
    }
  }

  getOriginName(document: any): string {
    if (document.id && this.fg.get(document.id).value) {
      return this.fg.get(document.id).value.file_origin_name;
    }
  }

  getOriginSize(document: any): string {
    // console.log(this.fg.get(document["id"]).value);
    if (document.id && this.fg.get(document.id).value) {
      return this.fg.get(document.id).value.file_origin_size;
    }
  }

  onUploadSelected(file, documentId: any) {
    console.log(file);
    this.uploadStatus[documentId] = UploadStatus.selected;
    this.file[documentId] = file;

    console.log(this.uploadStatus);
    // `File selected: ${file.name} (${file.size})`;
  }

  onUploadProgress(progress, documentId: any) {
    this.uploadStatus[documentId] = UploadStatus.process;
    this.progress[documentId] = progress;
    // ` Upload progress: ${progress.loaded} of ${progress.total}`;
  }

  onUploadResponse(response, documentId: any) {
    this.uploadStatus[documentId] = UploadStatus.uploaded;
    this.response[documentId] = response;
    // `Upload complete. File path: ${response.file_path} (${response.file_origin_name})`;
  }

  ngOnDestroy(): void {
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }
}
