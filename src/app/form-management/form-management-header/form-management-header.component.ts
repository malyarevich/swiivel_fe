import { Component, Input } from '@angular/core';
import { CheckService } from '@app/services/check.service';
import { DateService } from '@app/services/date.service';
import { StatusService } from '@app/services/status.service';
import { FormModel } from '@models/data-collection/form.model';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'app-form-management-header',
  templateUrl: './form-management-header.component.html',
  styleUrls: ['./form-management-header.component.scss']
})

export class FormManagementHeaderComponent {
  @Input() form: FormModel;
  public statusesOptions: string[] = ['Active', 'Draft', 'In Review', 'Closed', 'Archived'];
  public icons = IconsEnum;
  public sizes = ButtonSizeEnum;
  public isDashboardShown = false;

  constructor(public statusService: StatusService, public checkService: CheckService, public dateService: DateService) { }

  changeStatus(): void {
    console.log('change status');
  }

  changeDashboardView(): void {
    this.isDashboardShown = !this.isDashboardShown;
  }
}
