import { Component, Input } from '@angular/core';
import { FormManagementService } from '@app/form-management/form-management.service';
import { CheckService } from '@app/services/check.service';
import { DateService } from '@app/services/date.service';
import { FormManagementDocumentModel } from '@models/form-management/form-management-document.model';

@Component({
  selector: 'sw-form-management-info',
  templateUrl: './form-management-info.component.html',
  styleUrls: ['./form-management-info.component.scss']
})

export class FormManagementInfoComponent {
  @Input() form: FormManagementDocumentModel;
  @Input() mode: 'full'|'short' = 'short';

  constructor(
    public checkService: CheckService,
    public dateService: DateService,
    public formManagementService: FormManagementService) { }
}
