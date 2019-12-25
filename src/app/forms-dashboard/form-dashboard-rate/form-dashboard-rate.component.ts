import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FormStatisticRateModel } from '@models/data-collection/form-statistic.model';

@Component({
  selector: 'sw-form-dashboard-rate',
  templateUrl: './form-dashboard-rate.component.html',
  styleUrls: ['./form-dashboard-rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDashboardRateComponent {
  @Input() statistic: FormStatisticRateModel;
  @Input() staticsPeriodOptions: string[];
  @Input() defaultIndexOption = 0;
  @Output() changeRatePeriod: EventEmitter<any> = new EventEmitter();
  @ViewChild('chartTotalView', { static: false }) chartTotalView: ElementRef;

  clickChangeRatePeriod(e: any): void {
    this.changeRatePeriod.emit(e);
  }
}
