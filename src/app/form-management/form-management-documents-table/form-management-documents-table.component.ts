import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DateService} from '@app/services/date.service';
import { UploadReviewFormStatusesEnum } from '@app/upload-review-form/upload-review-form-statuses.enum';
import { UploadReviewFormSubmissionTypeEnum } from '@app/upload-review-form/upload-review-form-submission-type.enum';
import { FormManagementSubmissionDocumentModel } from '@models/form-management/form-management-submission-document.model';
import {
  FormManagementSubmissionDocumentsDropdownOptionsModel
} from '@models/form-management/form-management-submission-documents-dropdown-options.model';

@Component({
  selector: 'sw-form-management-documents-table',
  templateUrl: './form-management-documents-table.component.html',
  styleUrls: ['./form-management-documents-table.component.scss']
})

export class FormManagementDocumentsTableComponent implements OnInit, OnChanges {
  @Input() documents: FormManagementSubmissionDocumentModel[] = [];
  @Input() documentsDropdownOptions: FormManagementSubmissionDocumentsDropdownOptionsModel;

  public documentsFilter: FormGroup;
  // further - hardcode table dropdown data. it's expected to be removed after backend response
  public requirementArray = [
    { title: 'Student', value: 'student' },
    { title: 'Family', value: 'family' },
  ];
  public requirementForArray = [
    { title: 'Clayton Alvarez', value: '1234' },
  ];

  // end of hardcode data
  public displayedColumns = ['documentType', 'requirement', 'requiredFor', 'required', 'status', 'document', 'updateDate'];
  public uploadReviewFormSubmissionTypeEnum = UploadReviewFormSubmissionTypeEnum;
  public uploadReviewFormStatusesEnum = UploadReviewFormStatusesEnum;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, public dateService: DateService,) {
    this.documentsFilter = this.fb.group({
      documentType: [null],
      requirement: [null],
      requiredFor: [null],
      required: [null],
      status: null,
      document: [null],
      updateDate: [null]
    });
  }

  ngOnInit(): void {
    this.documentsFilter.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.documentsDropdownOptions && changes.documentsDropdownOptions.currentValue) {
      this.cdr.detectChanges();
    }
  }
}
