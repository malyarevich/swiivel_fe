import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormStatisticRateModel } from '@models/data-collection/form-statistic.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'sw-form-dashboard-rate',
  templateUrl: './form-dashboard-rate.component.html',
  styleUrls: ['./form-dashboard-rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDashboardRateComponent implements OnChanges {
  @Input() statistic: FormStatisticRateModel;
  @Input() staticsPeriodOptions: string[];
  @Input() defaultIndexOption = 0;
  @Output() changeRatePeriod: EventEmitter<any> = new EventEmitter();
  @ViewChild('chartTotalView', { static: false }) chartTotalView: ElementRef;
  public  chartTotal: Chart = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.statistic && changes.statistic.currentValue && changes.statistic.currentValue.percent) {
      setTimeout(() => {
        this.chartTotal = new Chart(
          this.chartTotalView.nativeElement.getContext('2d'),
          {
            type: 'doughnut',
            data: {
              datasets: [
                {
                  data: [changes.statistic.currentValue.percent, 100 - changes.statistic.currentValue.percent ],
                  backgroundColor: ['#F8BC45', '#E6E6E6'],
                  borderWidth: 1
                }
              ],
              labels: ['completed', 'total'],
            },
            options: {
              legend: {
                display: false
              },
              responsive: true,
              cutoutPercentage: 90
            }
          }
        );
      });
    }
  }

  viewAll(): void {
    console.log('view all');
  }

  clickChangeRatePeriod(e: any): void {
    this.changeRatePeriod.emit(e);
  }
}
