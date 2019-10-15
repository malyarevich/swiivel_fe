import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SizeButtonsEnum } from '@shared/size-buttons.enum';
import { ColorsEnum } from '@shared/colors.enum';

@Component({
  selector: 'app-review-form-controls',
  templateUrl: './upload-review-form-controls.component.html',
  styleUrls: ['./upload-review-form-controls.component.scss']
})

export class UploadReviewFormControlsComponent implements OnInit  {
  @Input() activeIdForm ? = '';
  @Input() documentTypes ? = [];
  @Input() documentStudent  ? = [];
  @Input() documentAccount  ? = [];
  @Input() isBulkDownload ? = false;
  @Input() showBulkDownload = false;
  @Input() selectedCount = 0;
  @Output() bulkDownload = new EventEmitter();
  @Output() download = new EventEmitter();
  public formUpload: FormGroup;
  public uploadDocumentData: any;
  public sizeButton = SizeButtonsEnum;
  public colors = ColorsEnum;

  constructor(private fb: FormBuilder) {
    this.formUpload = this.fb.group({
      upload: new FormControl('')
    });
    this.formUpload.valueChanges.subscribe(() => {
      this.updateUploadData();
    });
  }

  ngOnInit(): void {
    this.uploadDocumentData = {
      document_id: this.activeIdForm
    };
  }

  updateUploadData(): void {
    this.uploadDocumentData['document_type'] = this.formUpload.get('documentType').value;
  }

  clickBulkDownload(): void {
    this.bulkDownload.emit();
  }

  clickDownload(): void {
    this.download.emit();
  }
}
