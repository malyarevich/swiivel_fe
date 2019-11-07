import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusService } from '@app/utils/status.service';
import { FormModel } from '@models/data-collection/form.model';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';
import { ButtonSizeEnum } from '@shared/buttons/buttonSize.enum';
import { IconsEnum } from '@shared/icons.enum';
import { StatusColors } from '../form-management-submissions/form-management-submissions.models';

@Component({
  selector: 'sw-form-management-panel',
  templateUrl: './form-management-panel.component.html',
  styleUrls: ['./form-management-panel.component.scss'],
})
export class FormManagementPanelComponent {
  @Input() form: FormModel;
  @Input() status: string;
  @Input() statusColors: StatusColors;
  @Input() statusesTitles: object;
  @Input() unassignedDocuments: number;

  @Output() copyLink = new EventEmitter<any>();
  @Output() exportPDF = new EventEmitter<any>();
  @Output() inviteAccounts = new EventEmitter<any>();

  public activeTab = 'submissions';
  public statusesFriendlyNames: string[];
  public icons = IconsEnum;
  public buttonSizes = ButtonSizeEnum;
  public buttonColor = ButtonColorsEnum;

  constructor(public statusService: StatusService) {
  }
}
