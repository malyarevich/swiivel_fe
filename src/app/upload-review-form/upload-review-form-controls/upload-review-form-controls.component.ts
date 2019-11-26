import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ButtonExpandEnum } from '@shared/buttons/buttonExpand.enum';

@Component({
  selector: 'app-review-form-controls',
  templateUrl: './upload-review-form-controls.component.html',
  styleUrls: ['./upload-review-form-controls.component.scss']
})

export class UploadReviewFormControlsComponent implements OnInit  {
  @Input() activeIdForm: string;
  @Input() disabledButtons = false;
  @Input() disabledUploadBtn = false;
  @Input() isBulkDownload = false;
  @Input() showBulkDownload = false;
  @Input() selectedCount = 0;
  @Output() bulkDownload = new EventEmitter();
  @Output() download = new EventEmitter();
  @Output() upload = new EventEmitter();
  @Output() errorUpload = new EventEmitter();

  public formUpload: FormGroup;
  public uploadDocumentData: any;
  public buttonExpand = ButtonExpandEnum;

  constructor(private fb: FormBuilder) {
    this.formUpload = this.fb.group({
      upload: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.uploadDocumentData = {
      document_id: this.activeIdForm,
    };
  }

  uploadedData(): void {
    this.upload.emit();
  }

  uploadError(value): void {
    this.errorUpload.emit(value)
  }

  clickBulkDownload(): void {
    this.bulkDownload.emit();
  }

  clickDownload(): void {
    this.download.emit();
  }
}
