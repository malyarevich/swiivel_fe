import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DocumentApproval} from '@models/data-collection/document-approval.model';

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
    id: 1
  }, {
    name: 'Fishman, John and Sara',
    documentName: 'Birth Certificate',
    status: 'Rejected',
    id: 2
  }, {
    name: 'William Waters',
    documentName: 'Registration Form 2018-2019',
    status: 'Accepted',
    id: 3
  }, {
    name: 'Fishman, John and Sarah',
    documentName: 'Birth Certificate',
    status: 'Assigned',
    id: 4
  }, {
    name: 'Unassigned',
    documentName: 'Registration Form 2018-2019',
    status: 'Unassigned',
    id: 5
  }
  ];
  public activeIdForm = 1;

  getSelectForm(): DocumentApproval {
    return this.documents.find(document => document.id === this.activeIdForm);
  }
}
