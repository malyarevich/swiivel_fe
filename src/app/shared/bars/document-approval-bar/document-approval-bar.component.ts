import { Component, Input } from '@angular/core';
import { ColorsEnum } from '@shared/colors.enum';
import { DocumentApproval } from '@models/data-collection/document-approval.model';

@Component({
  selector: 'sw-document-approval-bar',
  templateUrl: './document-approval-bar.component.html',
  styleUrls: ['./document-approval-bar.component.scss']
})

export class DocumentApprovalBarComponent {
  @Input() document: DocumentApproval;
  public colors = ColorsEnum;

  constructor() { }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Accepted':
        return '#3CA476';
      case 'Need Review':
        return '#F8BC45';
      default:
        return 'gray';
    }
  }
}
