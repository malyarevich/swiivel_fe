import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '@models/upload-review-form/document.model';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';
import { SortDropDownData } from '@models/upload-review-form/sort.model';
import { IconsEnum } from '@shared/icons.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { SizesEnum } from '@shared/sizes.enum';
import { UploadReviewFormStatusesEnum } from './upload-review-form-statuses.enum';
import { UploadReviewFormDataSource } from './upload-review-form.datasource';
import { UploadReviewFormService } from './upload-review-form.service';

@Component({
  selector: 'app-upload-review-form',
  templateUrl: './upload-review-form.component.html',
  styleUrls: ['./upload-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadReviewFormComponent implements OnInit, OnDestroy {
  @ViewChild('link', { static: false }) link: ElementRef;
  @ViewChild('dialog', {static: true}) dialog: DialogComponent;

  public activeIdDocument: string;
  public activeIdForm = '';
  public dataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);
  public documents: Document[];
  public download: { url: SafeResourceUrl; filename: string; } = {url: null, filename: null};
  public extremeDocuments: ExtremeUploadForms = {};
  public textError: string;
  public filterValue: any = {};
  public form: FormGroup;
  public icons = IconsEnum;
  public isAllDocumentsSelected = false;
  public isBulkDownload = false;
  public isSideBarShown = true;
  public removeDocumentId: string;
  public size = SizesEnum;
  public showSpinner: boolean;
  public showError = false;
  public sortValue: SortDropDownData[];
  public statuses = UploadReviewFormStatusesEnum;
  public updatingDocumentStatus = false;
  public uploadDocuments: Document[];
  public rotatingPicture: boolean;
  public isSaveActive = false;
  public rotateParam: string = null;
  public isPopupOpen = false;
  public dataSettings = {};
  public isBackAction = false;

  public documentTypes = [];
  public documentFamilies = [];

  constructor(
    public uploadReviewFormService: UploadReviewFormService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
  ) {
    this.form = this.fb.group({
      filter: new FormControl([], Validators.required),
      sort: new FormControl([], Validators.required),
      search: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.dataSource.getSelectedFormId()
      .subscribe(id => {
        this.activeIdDocument = id;
      });
    this.dataSource.$loading.subscribe((loading: boolean) => {
      this.showSpinner = loading;
    });
    this.dataSource.$changingRotationSubject.subscribe((rotating: boolean) => {
      this.rotatingPicture = rotating;
    });
    this.activeIdForm = this.route.snapshot.paramMap.get('id');
    this.dataSource.uploadDocuments(this.activeIdForm).subscribe(() => { this.getDocuments() });
    this.dataSource.uploadFilterList(this.activeIdForm);
    this.dataSource.uploadFamilyList()
      .subscribe(() => {
        this.dataSource.getFamilies().subscribe((data) => this.documentFamilies = data);
      });

    this.dataSource.getFilters()
      .subscribe((data) => {
        if (data) {
          this.filterValue = this.uploadReviewFormService.convertFilterDocumentsData(data);

          if (this.filterValue.documents && this.filterValue.documents.data && this.filterValue.documents.data.length) {
            this.documentTypes = this.filterValue.documents.data
              .map(filter => {
                return { title: filter.name, value: filter.id, type: filter.type };
              })
              .filter((type) => (type.type === 'document' || type.type === 'externalForm'));
          }

          if (!(this.filterValue && this.filterValue)) {
            this.form.controls['filter'].disable({ emitEvent: false });
          } else {
            this.form.controls['filter'].enable({ emitEvent: false });
          }
          if (data.sort) {
            this.sortValue = this.uploadReviewFormService.convertSortDocumentsData(data);
            if (!(this.sortValue && this.sortValue)) {
              this.form.controls['sort'].disable({ emitEvent: false });
            } else {
              this.form.controls['sort'].enable({ emitEvent: false });
            }
          }
          this.cdr.detectChanges();
        }
      }, () => {
        this.router.navigate(['/']);
      });

    this.form.get('search').valueChanges.subscribe((data) => this.getDocumentslist(false, (data.replace(/^\s+/g, ''))));
    this.form.get('sort').valueChanges.subscribe(() =>  this.getDocumentslist());
    this.form.get('filter').valueChanges.subscribe(() =>  this.getDocumentslist());
  }

  getDocumentslist(resetActiveId = false, search = null) {
    this.dataSource.uploadDocuments(
      this.activeIdForm,
      this.form.get('filter').value,
      this.form.get('sort').value,
      search || this.form.get('search').value,
    ).subscribe(() => {
      if (resetActiveId) {
        this.activeIdDocument = null;
      }
      this.getDocuments();
    });
  }

  getDocuments(): void {
    this.dataSource.getDocuments()
      .subscribe((docs) => {
        if (docs.length) {
          this.documents = docs;
          if (!this.activeIdDocument) {
            this.dataSource.selectFormId(docs[0]._id);
            this.selectItem(docs[0]._id);
          } else {
            this.selectItem(this.activeIdDocument);
          }
        } else {
          this.documents = [];
        }
        if (!(this.cdr as ViewRef).destroyed) {
          this.cdr.detectChanges();
        }
      });
  }

  getSelectForm(): Document {
    if (this.documents) {
      return this.documents.find(document => document._id === this.activeIdDocument);
    }
  }

  selectItem(id: string): void {
    if (!this.isSaveActive) {
      if (this.isBulkDownload) {
        const index = this.uploadDocuments.indexOf(this.uploadDocuments.find(document => document._id === id));
        this.uploadDocuments[index].isSelected = !this.uploadDocuments[index].isSelected;
      } else {
        this.isSaveActive = false;
        this.rotateParam = null;
        this.documents.map(document => document._id === id ? document.isSelected = true : document.isSelected = false);
        this.dataSource.selectFormId(id);
        this.getExtremeDocuments(id);
      }
    } else {
      this.onOpenConfirmSavePopup();
    }
  }

  downloadForm(id: string): void {
    const document = this.documents.find(doc => doc._id === id);
    if (document.submission_type === 'onlineForm' || document.submission_type === 'pdfForm') {
      this.onExportPDF(document.form_id);
    } else {
      this.dataSource.downloadForm(document.link);
    }
  }

  onExportPDF(mongoId: string): void {
    this.uploadReviewFormService
      .exportPDFForm(mongoId)
      .subscribe((url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `form-${mongoId}.pdf`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click();
        this.clearLink(url);
      });
  }

  changeForm(id: string) {
    this.selectItem(id);
    this.scrollToActiveElement();
  }

  skipDocument(): void {
    if (this.isSaveActive) {
      this.onOpenConfirmSavePopup();
    } else {
      const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
      if (activeDocumentIndex + 1 < this.documents.length) {
        this.selectItem(this.documents[activeDocumentIndex + 1]._id);
      }
    }
    this.scrollToActiveElement();
  }

  changeStatus(status: string): void {
    this.updatingDocumentStatus = true;
    const statusData = Object.keys(this.statuses).find(k => this.statuses[k] === status);
    this.dataSource.changeStatus(
      this.documents.find(document => document._id === this.activeIdDocument)._id, statusData,
      this.activeIdForm, this.form.get('filter').value, this.form.get('sort').value
    )
      .subscribe(() => {
        this.updatingDocumentStatus = false;

        if (!this.isLastDocument()) {
          const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
          this.selectItem(this.documents[activeDocumentIndex + 1]._id);
        }

        this.getDocumentslist();
      });
    this.scrollToActiveElement();
  }

  scrollToActiveElement(): void {
    document.getElementById(this.getSelectForm()._id).scrollIntoView({ behavior: 'smooth' });
  }

  closeForm(action?: boolean): void {
    this.isPopupOpen = false;
    if (this.isSaveActive) {
      if (action) {
        this.updateDocumentSettings(action);
      } else {
        this.isSaveActive = false;
      }
      if (this.isBackAction) {
        this.router.navigate(['/data-collection/form-info/' + this.activeIdForm]);
        this.isBackAction = false;
      }
    } else {
      if (action) {
        this.dataSource
          .deleteDocuments([this.removeDocumentId])
          .subscribe( () => {
            this.removeDocumentId = null;
            this.activeIdDocument = null;
            this.getDocumentslist();
          });
      }
    }
  }

  openDeleteConfirmPopup(id: string): void {
    if(!this.isSaveActive) {
      this.removeDocumentId = id;
      this.dialog.open();
      this.isPopupOpen = true;
    }
  }

  onOpenConfirmSavePopup(): void {
    this.isPopupOpen = true;
    this.dialog.open();
  }

  getExtremeDocuments(id: string): void {
    this.extremeDocuments = {};
    const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === id));
    if (activeDocumentIndex - 1 > -1) {
      this.extremeDocuments.previous_form = this.documents[activeDocumentIndex - 1];
    }
    if (activeDocumentIndex + 1 < this.documents.length) {
      this.extremeDocuments.next_form = this.documents[activeDocumentIndex + 1];
    }
  }

  isEmptyObject(obj: any): boolean {
    return !Object.keys(obj).length;
  }

  isLastDocument(): boolean {
    if (this.activeIdDocument) {
      const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
      return (activeDocumentIndex + 1 >= this.documents.length);
    }
  }

  clickBulkDownload(): void {
    this.isBulkDownload = !this.isBulkDownload;
    this.uploadDocuments = this.documents;
    this.isBulkDownload ? this.uploadDocuments.map(document => document.isSelected = false) : this.selectItem(this.documents[0]._id);
  }

  getSelectedCount(): number {
    let selectedDocuments = 0;
    if (this.uploadDocuments) {
      this.uploadDocuments.map((doc) => {
        if (doc.isSelected) {
          selectedDocuments++;
        }
      });
    }
    return selectedDocuments;
  }

  clickDownload(): void {
    const ids = [];
    if (this.uploadDocuments) {
      this.uploadDocuments.map((document) => {
        if (document.isSelected) {
          ids.push(document._id);
        }
      });
    }
    this.uploadReviewFormService.downloadForms(this.activeIdForm, ids.join(',')).subscribe(
      (url) => {
        this.download = {
          url: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          filename: `documents.zip`
        };
        this.cdr.detectChanges();
        this.renderer.selectRootElement(this.link.nativeElement).click();
        this.clearLink(url);
        this.documents.forEach((doc) => doc.isSelected = false);
        this.activeIdDocument = this.documents[0]._id;
        this.selectItem(this.activeIdDocument);
        this.isBulkDownload = false;
      });
  }

  clickUpload(): void {
    this.getDocumentslist(true);
  }

  uploadFileError(value): void {
    if (value && value.statusText) {
      this.textError = value.statusText;
      this.showError = true;

      setTimeout(() => {
        this.showError = false;
        this.cdr.detectChanges();
      }, 3000);
    }
  }

  clearLink(url: string): void {
    this.download = { url: null, filename: null};
    window.URL.revokeObjectURL(url);
    this.cdr.markForCheck();
  }

  selectAllDocuments(): void {
    this.isAllDocumentsSelected = !this.isAllDocumentsSelected;
    this.uploadDocuments.map((item) => item.isSelected = this.isAllDocumentsSelected);
  }

  rotateImg(evt: any): void {
    this.isSaveActive = true;
    this.rotateParam = evt;
  }

  updateDocumentSettings(action) {
    if (action) {
      if (this.rotateParam !== null) {
        this.updateImg(this.rotateParam);
      } else {
        this.dataSource.updateDocumentSettings(this.activeIdDocument, this.dataSettings).subscribe( () => this.getDocumentslist());
      }
    } else {
      this.getDocumentslist();
    }
    this.isSaveActive = false;
    this.rotateParam = null;
  }

  changeDocumentSettings(data: any) {
    this.isSaveActive = true;
    this.dataSettings = data;
  }

  updateImg(angle: string) {
    this.dataSource.rotateImg(angle, this.documents.find(document => document._id === this.activeIdDocument)._id)
      .subscribe(() => {
        const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
        this.selectItem(this.documents[activeDocumentIndex]._id);
        this.getDocumentslist();
      });
  }

  getDocument(id: string): Document {
    return id ? this.documents.find(document => document._id === id) : null;
  }

  onBack(event): void {
    if (event) {
      const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
      if (activeDocumentIndex - 1 > -1) {
        this.selectItem(this.documents[activeDocumentIndex - 1]._id);
      }
    }
    this.scrollToActiveElement();
  }

  backPageClick(): void {
    this.isBackAction = true;
    if (this.isSaveActive) {
      this.onOpenConfirmSavePopup();
    } else {
      this.router.navigate(['/form-management/' + this.activeIdForm]);
    }
  }

  onSaveNext(event): void {
    if (event) {
      this.skipDocument();
    }

  }

  isOnlineForm(): boolean {
    return (
      this.getSelectForm() && (this.getSelectForm().submission_type === 'onlineForm' || this.getSelectForm().submission_type === 'pdfForm')
    );
  }

  ngOnDestroy(): void {
    this.cdr.detach();
  }

}
