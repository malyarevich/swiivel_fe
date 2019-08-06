import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormSql} from "../../model/form.model";
import {FormsViewsRate} from "../../model/forms-stats.models";
import {FormsStatsService} from "../../services/forms-stats.service";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-v-form-info-stats',
  templateUrl: './v-form-info-stats.component.html',
  styleUrls: ['./v-form-info-stats.component.scss']
})
export class VFormInfoStatsComponent implements OnInit, AfterViewInit {
  @Input() form: FormSql;

  @ViewChild('chartTotalViews', { static: false }) chartTotalViews: ElementRef;
  @ViewChild('chartMonthViews', { static: false }) chartMonthViews: ElementRef;

  chartTotal: Chart = {};
  chartMonth: Chart = {};

  viewsRate: FormsViewsRate;

  constructor(private formsStatsService: FormsStatsService) {
  }

  ngOnInit() {
    // this.formsStatsService.getViewsRate().subscribe((val: FormsViewsRate) => {
    //   this.viewsRate = val;
    // }
    this.viewsRate = { total: 867, month: 135, today: 12};
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
