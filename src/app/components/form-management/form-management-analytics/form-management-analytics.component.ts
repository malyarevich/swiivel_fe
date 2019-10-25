import { Component,  OnInit , Input, ViewChild, ElementRef} from '@angular/core';
import { Round, Log, CircleGraph, StatusNumbers } from '@models/form-management/analytics';
import { Chart } from "chart.js";

@Component({
  selector: 'sw-form-management-analytics',
  templateUrl: './form-management-analytics.component.html',
  styleUrls: ['./form-management-analytics.component.scss'],
})
export class FormManagementAnalyticsComponent implements OnInit {
  @Input() round: Round;
  @Input() created: Log;
  @Input() lastUpdated: Log;
  @Input() circleGraph: CircleGraph;
  @Input() statusNumbers: StatusNumbers;

  @ViewChild("chartTotalView", { static: false }) chartTotalView: ElementRef;

  chartTotal: Chart = {};

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initChartTotal()
  }

  initChartTotal() {
    const total = (this.circleGraph.total || 0) - (this.circleGraph.reviewed_completed || 0);
    this.chartTotal = new Chart(
      this.chartTotalView.nativeElement.getContext("2d"),
      {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [this.circleGraph.reviewed_completed, total],
              backgroundColor: ["#F8BC45", "#E6E6E6"],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          cutoutPercentage: 90
        }
      }
    );
  }

  getRoundDateRange() {
    if (this.round && this.round.start_date && this.round.end_date) {
      return `(${this.round.start_date} - ${this.round.end_date})`;
    }
    return '';
  }
}
