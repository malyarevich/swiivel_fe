import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DocumentApproval} from '@models/data-collection/document-approval.model';
import {UploadReviewFormService} from '@app/upload-review-form/upload-review-form.service';
import {FormsDataSource} from '@app/forms-dashboard/form-table.datasource';
import {UploadReviewFormDataSource} from '@app/upload-review-form/upload-review-form.datasource';

@Component({
  selector: 'app-form-upload',
  templateUrl: './upload-review-form.component.html',
  styleUrls: ['./upload-review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadReviewFormComponent {
  public documents = [{
    name: 'John Fishman',
    documentName: 'Birth Certificate',
    status: 'Need Review',
    id: '5d8ddc0e8ffb08460b4c2e02'
  }, {
    name: 'Fishman, John and Sara',
    documentName: 'Birth Certificate',
    status: 'Rejected',
    id: '2'
  }, {
    name: 'William Waters',
    documentName: 'Registration Form 2018-2019',
    status: 'Accepted',
    id: '3'
  }, {
    name: 'Fishman, John and Sarah',
    documentName: 'Birth Certificate',
    status: 'Assigned',
    id: '4'
  }, {
    name: 'Unassigned',
    documentName: 'Registration Form 2018-2019',
    status: 'Unassigned',
    id: '5'
  }
  ];
  public activeIdForm = '5d8ddc0e8ffb08460b4c2e02';
  public fileToUpload: File = null;
  public uploadReviewFormDataSource: UploadReviewFormDataSource = new UploadReviewFormDataSource(this.uploadReviewFormService);

  constructor(public uploadReviewFormService: UploadReviewFormService) {}


  getSelectForm(): DocumentApproval {
    return this.documents.find(document => document.id === this.activeIdForm);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    this.uploadReviewFormDataSource.uploadFile(this.fileToUpload, this.activeIdForm);
  }
}
