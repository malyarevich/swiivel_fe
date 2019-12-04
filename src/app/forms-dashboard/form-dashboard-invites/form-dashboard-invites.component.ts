import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormStatisticInvitesModel } from '@models/data-collection/form-statistic.model';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';

@Component({
  selector: 'sw-form-dashboard-invites',
  templateUrl: './form-dashboard-invites.component.html',
  styleUrls: ['./form-dashboard-invites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDashboardInvitesComponent {
  @Input() statistic: FormStatisticInvitesModel;
  @Input() defaultIndexOption = 0;
  @Input() staticsPeriodOptions: string[];
  @Output() changeInvitesPeriod: EventEmitter<any> = new EventEmitter();

  public colors = ButtonColorsEnum;

  clickChangeViewPeriod(e: any): void {
    this.changeInvitesPeriod.emit(e);
  }
}
