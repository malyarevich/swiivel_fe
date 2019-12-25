import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusService } from '@app/services/status.service';
import { FormManagementDocumentModel } from '@models/form-management/form-management-document.model';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';
import { formStatusOptions } from '@shared/form-status-options';
import { formStatuses } from '@shared/form-statuses';
import { IconsEnum } from '@shared/icons.enum';

@Component({
  selector: 'sw-form-management-header',
  templateUrl: './form-management-header.component.html',
  styleUrls: ['./form-management-header.component.scss']
})

export class FormManagementHeaderComponent {
  @Input() form: FormManagementDocumentModel;
  @Output() changeStatus: EventEmitter<{ids: [number], status: string}> = new EventEmitter();
  @Output() copyLink: EventEmitter<any> = new EventEmitter();
  @Output() exportPDF: EventEmitter<any> = new EventEmitter();
  @Output() editForm: EventEmitter<any> = new EventEmitter();

  public statusesOptions = formStatusOptions;
  public statusArray = formStatuses;
  public icons = IconsEnum;
  public sizes = ButtonSizeEnum;
  public isDashboardShown = true;

  constructor(public statusService: StatusService) { }

  clickChangeStatus(statusId: any): void {
    this.statusArray.forEach((item) => {
      if (item.title === this.statusesOptions[statusId]) {
        this.changeStatus.emit({ids: [this.form.id], status: item.value});
      }
    });
  }

  changeDashboardView(): void {
    this.isDashboardShown = !this.isDashboardShown;
  }

  clickCopy(): void {
    this.copyLink.emit();
  }

  clickExportPdf(): void {
    this.exportPDF.emit();
  }

  clickEditForm(): void {
    this.editForm.emit();
  }
}
