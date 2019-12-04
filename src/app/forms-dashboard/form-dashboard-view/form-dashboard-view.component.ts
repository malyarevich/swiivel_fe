import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormStatisticViewModel } from '@models/data-collection/form-statistic.model';

@Component({
  selector: 'sw-form-dashboard-view',
  templateUrl: './form-dashboard-view.component.html',
  styleUrls: ['./form-dashboard-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDashboardViewComponent {
  @Input() statistic: FormStatisticViewModel;
  @Input() staticsPeriodOptions: string[];
  @Input() defaultIndexOption = 0;
  @Output() changeViewPeriod: EventEmitter<any> = new EventEmitter();

  viewAll(): void {
    console.log('view all');
  }

  clickChangeViewPeriod(e: any): void {
    this.changeViewPeriod.emit(e);
  }
}
