import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UploadReviewFormDataSource } from '@app/upload-review-form/upload-review-form.datasource';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { Document } from '@models/upload-review-form/document.model';
import { ExtremeUploadForms } from '@models/upload-review-form/forms.model';
import { SortDropDownData } from '@models/upload-review-form/sort.model';
import { ColorsEnum } from '@shared/colors.enum';

@Component({
  selector: 'app-upload-review-form',
  templateUrl: './upload-review-form.component.html',
  styleUrls: ['./upload-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadReviewFormComponent implements OnInit {
  public dataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);
  public documents: Document[];
  public activeIdDocument: string;
  public activeIdForm = '';
  public filterValue = {};
  public sortValue: SortDropDownData[];
  public form: FormGroup;
  public showSpinner: boolean;
  public extremeDocuments: ExtremeUploadForms = {};
  public colors = ColorsEnum;

  constructor(
    public uploadReviewFormService: UploadReviewFormService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: new FormControl([], Validators.required),
      sort: new FormControl([], Validators.required)
    });

  }

  ngOnInit(): void {
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
          if (data.sort) {
            this.sortValue = this.uploadReviewFormService.convertSortDocumentsData(data);
          }
          this.cdr.detectChanges();
        }
      });
    this.form.valueChanges.subscribe(params => {
      this.dataSource.uploadDocuments(this.activeIdForm, params.filter, params.sort);
      this.getDocuments();
    });
  }

  getDocuments(): void {
    this.dataSource.getDocuments()
      .subscribe((docs) => {
        if (docs.length) {
          this.documents = docs;
          this.activeIdDocument = docs[0]._id;
          this.selectItem(this.activeIdDocument);
          this.cdr.detectChanges();
        } else {
          this.documents = [];
          this.cdr.detectChanges();
        }
      });
    this.dataSource.getExtremeDocuments()
      .subscribe((docs) => {
        this.extremeDocuments = docs;
        this.cdr.detectChanges();
      });
  }

  getSelectForm(): Document {
    if (this.documents) {
      return this.documents.find(document => document._id === this.activeIdDocument);
    }
  }

  selectItem(id: string): void {
    this.documents.map(document => document._id === id ? document.isSelected = true : document.isSelected = false);
    this.activeIdDocument = id;
  }

  downLoadForm(id: string): void {
    this.dataSource.downloadForm(id);
  }

  updateForm(id: string) {
    this.dataSource.uploadDocuments(id);
    this.getDocuments();
    this.dataSource.uploadFilterList(id);
  }
}
