import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UploadReviewFormStatusesEnum } from '@modules/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormDataSource } from '@modules/upload-review-form/upload-review-form.datasource';
import { UploadReviewFormService } from '@modules/upload-review-form/upload-review-form.service';
import { Document } from '@models/upload-review-form/document.model';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';
import { SortDropDownData } from '@models/upload-review-form/sort.model';
import { ColorsEnum } from '@shared/colors.enum';
import { IconsEnum } from '@shared/icons.enum';
import { SizesEnum } from '@shared/sizes.enum';
import { DialogComponent } from '@shared/popup/dialog.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-review-form',
  templateUrl: './upload-review-form.component.html',
  styleUrls: ['./upload-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadReviewFormComponent implements OnInit {
  @ViewChild('link', { static: false }) link: ElementRef;
  @ViewChild('dialog', {static: true}) dialog: DialogComponent;

  public activeIdDocument: string;
  public activeIdForm = '';
  public colors = ColorsEnum;
  public dataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);
  public documents: Document[];
  public download: { url: SafeResourceUrl; filename: string; } = {url: null, filename: null};
  public extremeDocuments: ExtremeUploadForms = {};
  public filterValue: any = {};
  public form: FormGroup;
  public icons = IconsEnum;
  public isAllDocumentsSelected = false;
  public isBulkDownload = false;
  public isSideBarShown = true;
  public removeDocumentId: string;
  public size = SizesEnum;
  public showSpinner: boolean;
  public sortValue: SortDropDownData[];
  public statuses = UploadReviewFormStatusesEnum;
  public updatingDocumentStatus = false;
  public uploadDocuments: Document[];
  public rotatingPicture: boolean;

  public documentTypes = [];
  public documentFamilies = [];

  constructor(
    public uploadReviewFormService: UploadReviewFormService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2) {
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
            this.documentTypes = this.filterValue.documents.data.map(filter => {
              return { title: filter.name, value: filter.id, type: filter.type };
            });
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
      });

    this.form.valueChanges.subscribe(params => {
      if (!this.isBulkDownload) {
        this.dataSource.uploadDocuments(this.activeIdForm, params.filter, params.sort, params.search).subscribe(() => {
          this.activeIdDocument = null;
          this.getDocuments();
        });
      }
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
          this.cdr.detectChanges();
        } else {
          this.documents = [];
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
    if (this.isBulkDownload) {
      const index = this.uploadDocuments.indexOf(this.uploadDocuments.find(document => document._id === id));
      this.uploadDocuments[index].isSelected = !this.uploadDocuments[index].isSelected;
    } else {
      this.documents.map(document => document._id === id ? document.isSelected = true : document.isSelected = false);
      this.dataSource.selectFormId(id);
      this.getExtremeDocuments(id);
    }
  }

  downLoadForm(id: string): void {
    const url = this.documents.find(document => document._id === id).link;
    this.dataSource.downloadForm(url);
  }

  changeForm(id: string) {
    this.selectItem(id);
  }

  skipDocument(): void {
    const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
    if (activeDocumentIndex + 1 < this.documents.length) {
      this.selectItem(this.documents[activeDocumentIndex + 1]._id);
    }
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
        this.dataSource.uploadDocuments(this.activeIdForm,
          this.form.get('filter').value,
          this.form.get('sort').value,
          this.form.get('search').value,)
          .subscribe(() => { this.getDocuments() });
      });
  }

  deleteForm(action?: boolean): void {
    if (action) {
      this.dataSource
        .deleteDocuments([this.removeDocumentId])
        .subscribe( () => {
          this.removeDocumentId = null;
          this.activeIdDocument = null;
          this.dataSource.uploadDocuments(this.activeIdForm,
            this.form.get('filter').value,
            this.form.get('sort').value,
            this.form.get('search').value,)
            .subscribe(() => { this.getDocuments() });
        });
    }
  }

  openConfirmPopup(id: string): void {
    this.removeDocumentId = id;
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
        this.isBulkDownload = false;
      });
  }

  clickUpload(): void {
    this.dataSource.uploadDocuments(this.activeIdForm,
      this.form.get('filter').value,
      this.form.get('sort').value,
      this.form.get('search').value,)
      .subscribe(() => {
        this.getDocuments();
        });
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
    if (evt.angle) {
      if (evt.direction === 'left') {
        if (parseInt(evt.angle, 10) + 90 < 361) {
          this.updateImg((parseInt(evt.angle, 10)  + 90).toString());
        } else {
          this.updateImg('90');
        }
      } else {
        if (parseInt(evt.angle, 10) - 90 >= 0) {
          this.updateImg((parseInt(evt.angle, 10)  - 90).toString());
        } else {
          this.updateImg('270');
        }
      }
    }
  }

  updateDocumentSettings(data: any) {
    this.dataSource.updateDocumentSettings(this.activeIdDocument, data)
      .subscribe( () => {
        this.dataSource.uploadDocuments(this.activeIdForm,
          this.form.get('filter').value,
          this.form.get('sort').value,
          this.form.get('search').value,)
          .subscribe(() => { this.getDocuments() });
      });
  }

  updateImg(angle: string) {
    this.dataSource.rotateImg(angle, this.documents.find(document => document._id === this.activeIdDocument)._id)
      .subscribe(() => {
        const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
        this.selectItem(this.documents[activeDocumentIndex]._id);
        this.dataSource.uploadDocuments(this.activeIdForm,
          this.form.get('filter').value,
          this.form.get('sort').value,
          this.form.get('search').value,)
          .subscribe(() => { this.getDocuments() });
      });
  }

  isFilterEmpty(): boolean {
    return this.form.get('filter').value.length;
  }

  isSortByEmpty(): boolean {
    return this.form.get('sort').value.length;
  }

}
