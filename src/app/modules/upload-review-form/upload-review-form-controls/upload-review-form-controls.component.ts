import { Component, Input, OnInit } from '@angular/core';
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
  public formUpload: FormGroup;
  public uploadDocumentData: any;
  public sizeButton = SizeButtonsEnum;
  public colors = ColorsEnum;

  constructor(private fb: FormBuilder) {
    this.formUpload = this.fb.group({
      upload: new FormControl(''),
      documentType: new FormControl(''),
      student: new FormControl(''),
      account: new FormControl(''),
    });
    this.formUpload.valueChanges.subscribe(changes => {
      this.updateUploadData();
    });
  }

  ngOnInit(): void {
    this.uploadDocumentData = {
      document_id: this.activeIdForm,
      family_id: this.documentAccount[0],
      person_id: this.documentStudent[0],
      document_type: this.documentTypes[0]
    };
  }

  updateUploadData(): void {
    this.uploadDocumentData['document_type'] = this.formUpload.get('documentType').value;
    this.uploadDocumentData['document_id'] = this.activeIdForm;
    this.uploadDocumentData['person_id'] = this.formUpload.get('student').value;
    this.uploadDocumentData['document_type'] = this.formUpload.get('account').value;
  }
}
