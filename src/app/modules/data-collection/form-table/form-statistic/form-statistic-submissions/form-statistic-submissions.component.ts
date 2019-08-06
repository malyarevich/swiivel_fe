import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {FormsStatsService} from "../../../services/forms-stats.service";
import {FormsSubmissionsRate, FormsViewsRate} from "../../../model/forms-stats.models";

@Component({
  selector: 'app-v-form-statistic-submissions',
  templateUrl: './form-statistic-submissions.component.html',
  styleUrls: ['./form-statistic-submissions.component.css']
})
export class FormStatisticSubmissionsComponent implements OnInit, AfterViewInit {

  @ViewChild('chartSubmissionRef', { static: false }) chartSubmissionRef: ElementRef;

  submissionsRate: FormsSubmissionsRate;
  chartSubmissions: Chart = {};

  period: string = 'week';

  periodsName = {
    month: 'LAST MONTH',
    week: 'LAST WEEK',
    today: 'TODAY',
  };

  constructor(private formsStatsService: FormsStatsService) {
  }

  ngOnInit() {
    this.formsStatsService.getSubmissionsRate().subscribe((val: FormsSubmissionsRate) => {
      this.submissionsRate = val;
    })
  }

  ngAfterViewInit() {
    this.chartSubmissionInit();
  }

  chartSubmissionInit() {
    this.chartSubmissions = new Chart(this.chartSubmissionRef.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', ''],
        datasets: [{
          data: [1, 2, 1, 2, 2, 3],
          lineTension: 0,
          fill: false,
          borderColor: '#F5A623',
          pointRadius: 0,
        }],

      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                beginAtZero: true,
                stepSize: 1,
                callback: function (label, index, labels) {
                  return '0' + label;
                }
              }
            }
          ]
        }
      }
    });
  }

  setPeriod(period: string) {
    this.period = period;
  }
}
