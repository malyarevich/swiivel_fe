import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-v-form-statistic-invites',
  templateUrl: './v-form-statistic-invites.component.html',
  styleUrls: ['./v-form-statistic-invites.component.css']
})
export class VFormStatisticInvitesComponent implements OnInit {

  period: string = 'month';

  periodsName = {
    month: 'LAST MONTH',
    week: 'LAST WEEK'
  };

  constructor() {
  }

  ngOnInit() {
  }

  setPeriod(period: string) {
    this.period = period;
  }

}
