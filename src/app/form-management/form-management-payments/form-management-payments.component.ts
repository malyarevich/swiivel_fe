import { Component, Input } from '@angular/core';
import { FormManagementDocumentPaymentsModel } from '@models/form-management/form-management-document.model';

@Component({
  selector: 'app-form-management-payments',
  templateUrl: './form-management-payments.component.html',
  styleUrls: ['./form-management-payments.component.scss']
})

export class FormManagementPaymentsComponent {
  @Input() formPayments: FormManagementDocumentPaymentsModel[];

  constructor() { }
}
