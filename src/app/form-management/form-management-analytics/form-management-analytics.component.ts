import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormManagementDocumentAnalyticsModel } from '@models/form-management/form-management-document.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-form-management-analytics',
  templateUrl: './form-management-analytics.component.html',
  styleUrls: ['./form-management-analytics.component.scss']
})

export class FormManagementAnalyticsComponent implements AfterViewInit {
  @Input() formAnalytics: FormManagementDocumentAnalyticsModel;
  @ViewChild('chartTotalView', { static: false }) chartTotalView: ElementRef;
  chartTotal: Chart = {};

  constructor() { }

  ngAfterViewInit() {
    const total = (parseInt(this.formAnalytics.circle_graph.total, 10) || 0) -
      (parseInt(this.formAnalytics.circle_graph.review_completed, 10) || 0);

    this.chartTotal = new Chart(
      this.chartTotalView.nativeElement.getContext('2d'),
      {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [parseInt(this.formAnalytics.circle_graph.review_completed, 10), total || 1],
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
  }
}
