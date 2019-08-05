import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {FormsStatsService} from "../../../services/forms-stats.service";
import {FormsViewsRate} from "../../../model/forms-stats.models";

@Component({
  selector: 'app-v-form-statistic-views',
  templateUrl: './v-form-statistic-views.component.html',
  styleUrls: ['./v-form-statistic-views.component.css']
})
export class VFormStatisticViewsComponent implements OnInit, AfterViewInit {
  @ViewChild('chartTotalViews', { static: false }) chartTotalViews: ElementRef;
  @ViewChild('chartMonthViews', { static: false }) chartMonthViews: ElementRef;

  chartTotal: Chart = {};
  chartMonth: Chart = {};

  viewsRate: FormsViewsRate;

  constructor(private formsStatsService: FormsStatsService) {
  }

  ngOnInit() {
    this.formsStatsService.getViewsRate().subscribe((val: FormsViewsRate) => {
      this.viewsRate = val;
    })
  }

  ngAfterViewInit() {
    this.chartTotalViewsInit();
    this.chartLastMonthInit();
  }

  chartTotalViewsInit() {
    this.chartTotal = new Chart(this.chartTotalViews.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [27, 73],
          backgroundColor: ['#F5A623', '#E6E6E6'],
          borderWidth: 1,
        }],

      },
      options: {
        responsive: true,
        cutoutPercentage: 90,
      }
    });
  }

  chartLastMonthInit() {
    this.chartMonth = new Chart(this.chartMonthViews.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [34, 66],
          backgroundColor: ['#4051A8', '#E6E6E6'],
          borderWidth: 1,
        }],

      },
      options: {
        responsive: true,
        cutoutPercentage: 90,
      }
    });
  }

}
