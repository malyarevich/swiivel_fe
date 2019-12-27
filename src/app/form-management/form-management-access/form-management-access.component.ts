import { Component, Input } from '@angular/core';
import { FormManagementDocumentUserModel } from '@models/form-management/form-management-document.model';

@Component({
  selector: 'sw-form-management-access',
  templateUrl: './form-management-access.component.html',
  styleUrls: ['./form-management-access.component.scss']
})

export class FormManagementAccessComponent {
  @Input() users: FormManagementDocumentUserModel[];

  getUserName(): string {
    return this.users.length < 6 ? this.users[this.users.length - 1].full_name : this.users[4].full_name;
  }

  getAdditionalUsers(): number {
    return this.users.length - 5;
  }

}
