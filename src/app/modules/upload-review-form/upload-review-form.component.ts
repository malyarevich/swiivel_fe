import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-upload-review-form',
  templateUrl: './upload-review-form.component.html',
  styleUrls: ['./upload-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadReviewFormComponent implements OnInit {
  @ViewChild('dialog', { static: true }) dialog: DialogComponent;

  public dataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);
  public documents: Document[];
  public activeIdDocument: string;
  public activeIdForm = '';
  public filterValue = {};
  public sortValue: SortDropDownData[];
  public form: FormGroup;
  public removeDocumentId: string;
  public showSpinner: boolean;
  public extremeDocuments: ExtremeUploadForms = {};
  public colors = ColorsEnum;
  public isSideBarShown = true;
  public icons = IconsEnum;
  public size = SizesEnum;
  public statuses = UploadReviewFormStatusesEnum;

  public documentTypes  = ['document'];
  public documentStudent  = ['7'];
  public documentAccount  = ['6b639da1ef3956c73e1ec79fbc67a2f5'];
  public uploadDocumentData = {};

  constructor(
    public uploadReviewFormService: UploadReviewFormService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: new FormControl( [], Validators.required),
      sort: new FormControl( [], Validators.required),
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
    this.activeIdForm = this.route.snapshot.paramMap.get('id');
    this.dataSource.uploadDocuments(this.activeIdForm);
    this.getDocuments();
    this.dataSource.uploadFilterList(this.activeIdForm);
    this.dataSource.getFilters()
      .subscribe((data) => {
        if (data) {
          this.filterValue = this.uploadReviewFormService.convertFilterDocumentsData(data);
          if (!(this.filterValue && this.filterValue)) {
            this.form.controls['filter'].disable();
          } else {
            this.form.controls['filter'].enable();
          }
          if (data.sort) {
            this.sortValue = this.uploadReviewFormService.convertSortDocumentsData(data);
            if (!(this.sortValue && this.sortValue)) {
              this.form.controls['sort'].disable();
            } else {
              this.form.controls['sort'].enable();
            }
          }
          this.cdr.detectChanges();
        }
      });
    this.form.valueChanges.subscribe(params => {
      this.dataSource.uploadDocuments(this.activeIdForm, params.filter, params.sort, params.search);
      this.activeIdDocument = null;
      this.getDocuments();
    });
    this.uploadDocumentData = {
      document_id: this.activeIdForm,
      family_id: this.documentAccount[0],
      person_id: this.documentStudent[0],
      document_type: this.documentTypes[0]
    };
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
    this.documents.map(document => document._id === id ? document.isSelected = true : document.isSelected = false);
    this.dataSource.selectFormId(id);
    this.getExtremeDocuments(id);
  }

  downLoadForm(id: string): void {
    this.dataSource.downloadForm(id);
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
    const statusData = Object.keys(this.statuses).find(k => this.statuses[k] === status);
    this.dataSource.changeStatus(
      this.documents.find(document => document._id === this.activeIdDocument)._id, statusData,
      this.activeIdForm, this.form.get('filter').value, this.form.get('sort').value
      );
    if (!this.isLastDocument()) {
      const activeDocumentIndex = this.documents.indexOf(this.documents.find(document => document._id === this.activeIdDocument));
      this.selectItem(this.documents[activeDocumentIndex + 1]._id);
    }
  }

  deleteForm(action?: boolean): void {
    if (action) {
      this.dataSource
        .deleteDocuments([this.removeDocumentId], this.activeIdForm, this.form.get('filter').value, this.form.get('sort').value);
      this.removeDocumentId = null;
      this.dataSource.selectFormId(this.documents[0]._id);
      this.selectItem(this.documents[0]._id);
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
}
