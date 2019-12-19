import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormManagementService } from '@app/form-management/form-management.service';
import { DateService } from '@app/services/date.service';
import { UploadReviewFormDataSource } from '@app/upload-review-form/upload-review-form.datasource';
import { UploadReviewFormService } from '@app/upload-review-form/upload-review-form.service';
import { FormManagementSubmissionDocumentModel } from '@models/form-management/form-management-submission-document.model';
import {
  FormManagementSubmissionDocumentsDropdownOptionsModel
} from '@models/form-management/form-management-submission-documents-dropdown-options.model';
import { FormManagementSubmissionHistoryItemModel } from '@models/form-management/form-management-submission-history-item.model';
import { FormManagementSubmissionMissingFieldModel } from '@models/form-management/form-management-submission-missing-field.model';
import { UploadReviewFormStatusesEnum } from '@app/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormSubmissionTypeEnum } from '@app/upload-review-form/upload-review-form-submission-type.enum';
import { DropdownInputOptionModel } from '@models/dropdown-input-option.model';

@Component({
  selector: 'sw-form-management-submission-subrow',
  templateUrl: './form-management-submission-subrow.component.html',
  styleUrls: ['./form-management-submission-subrow.component.scss']
})

export class FormManagementSubmissionSubrowComponent implements OnChanges {
  @Input() formId: string;
  @Input() isOpen: boolean;

  public tabsArray = ['Forms', 'Document'];
  public activeTab = this.tabsArray[0];
  public uploadFormDataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);
  public documentsDropdownOptions: FormManagementSubmissionDocumentsDropdownOptionsModel = {
    documentTypes: [],
    status: [],
    requirement: [],
    requiredFor: [],
    required: [],
    documents: [],
  };

  public historyList: FormManagementSubmissionHistoryItemModel[];
  public missingFields: FormManagementSubmissionMissingFieldModel;
  public documents: FormManagementSubmissionDocumentModel[];

  constructor(
    private cdr: ChangeDetectorRef,
    public formManagementService: FormManagementService,
    public dateService: DateService,
    public uploadReviewFormService: UploadReviewFormService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isOpen && changes.isOpen.currentValue === true) {
      if (this.formId) {
        this.formManagementService.getSubmissionFormDetails(this.formId).subscribe((data) => {
          if (data && data.form_history) {
            this.historyList = data.form_history;
            this.cdr.detectChanges();
          }

          if (data && data.form_data && data.form_data.missingFields) {
            this.missingFields = data.form_data.missingFields;
            this.cdr.detectChanges();
          }

          if (data && data.documents ) {
            if (data.documents && !!data.documents.length ) {
              data.documents.forEach((item) => {
                if (item.updated_at) {
                  item.updated_at = new Date(item.updated_at);
                }
              });
            }
            this.documents = data.documents;
            this.cdr.detectChanges();
          }

          this.uploadFormDataSource.getFilters().subscribe((data) => {
            console.log(data);
            this.convertDropdownOptions(data);

          });
        });
      }
    }
  }

  convertDropdownOptions(documents: any): void {
    const uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;
    const uploadReviewFormSubmissionTypeEnum = UploadReviewFormSubmissionTypeEnum;
    Object.keys(documents).forEach((key) => {
      switch (key) {
        case 'documents':
          if (documents.documents) {
            this.documentsDropdownOptions.documents = [];
            documents.documents.forEach((doc) => {
              this.documentsDropdownOptions.documents.push({
                value: doc.type, title: doc.name
              });
            });
          }
          break;
        case 'status':
          this.documentsDropdownOptions.status = [];
          if (documents.status) {
            documents.status.forEach(docStatus =>  this.documentsDropdownOptions.status.push({
              title: uploadReviewFormStatusesEnum[docStatus],
              value: docStatus
            }));
          }
          break;
        case 'submission_type':
          if (documents.submission_type) {
            documents.submission_type.forEach(docSubmission => this.documentsDropdownOptions.documentTypes.push({
              title: uploadReviewFormSubmissionTypeEnum[docSubmission],
              value: docSubmission
            }));
          }
          break;
      }
    });
  }
}
