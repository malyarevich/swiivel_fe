import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from "@angular/core";
import { HttpEventType } from "@angular/common/http";
import { Subscription } from "rxjs";
import { Form } from "@app/models/data-collection/form";
import { FilesService } from "../../services/files.service";

@Component({
  selector: "app-online-documents",
  templateUrl: "./online-documents.component.html",
  styleUrls: ["./online-documents.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineDocumentsComponent implements OnInit, OnDestroy {
  @Input() form: Form;

  constructor(
    private fileService: FilesService,
    private detectorRef: ChangeDetectorRef
  ) {}

  public uploadSubscription: Subscription;

  ngOnInit() {}

  openForPreview(document: any) {
    if (!document.data) {
      return;
    }
    window.open(this.form.attachments[document.data].link, "_self");
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
    //TODO: fix it <any>
    const data = <any>document.dataTypeAllowed;
    if (type) {
      switch (type) {
        case "documents":
          if (data.isDocuments) {
            data.documents.forEach(item => {
              if (item.isAllow) {
                formats.push(item.name);
              }
            });
            return formats.join(", ");
          }
          break;
        case "images":
          if (data.isImages) {
            data.images.forEach(item => {
              if (item.isAllow) {
                formats.push(item.name);
              }
            });
            return formats.join(", ");
          }
          break;
        case "videoAudio":
          if (data.isVideoAudio) {
            data.videoAudio.forEach(item => {
              if (item.isAllow) {
                formats.push(item.name);
              }
            });
            return formats.join(", ");
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
      formData.append("id", document.id);
      formData.append("type", "document");
      formData.append("original_name", file.name);
      formData.append("file", file, file.name);
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
      alert("File type does not supported");
    }
  }

  onCancelUpload(document: any) {
    this.uploadSubscription.unsubscribe();
    document.fileUploading = false;
  }

  deleteUploadedFile(document: any) {
    document.selectedFile = null;
    document.uploaded = null;
    document.fileUploaded = false;
  }

  getCountPages(document: any) {
    if (document.selectedFile.type === "application/pdf") {
      const reader = new FileReader();
      reader.readAsBinaryString(document.selectedFile);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
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
    return "File is not exist...";
  }

  getDocumentPages(document: any): string {
    if (document.data) {
      const pages = this.form.attachments[document.data].numberOfPages;
      return String("(" + pages + " pages)");
    }
  }

  ngOnDestroy(): void {
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }
}
