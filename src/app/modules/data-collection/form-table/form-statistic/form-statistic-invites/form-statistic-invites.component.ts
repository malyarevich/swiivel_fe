import {Component, OnInit} from '@angular/core';
import {FormsStatsService} from "../../../services/forms-stats.service";
import {FormsInvitesRate} from "../../../model/forms-stats.models";

@Component({
  selector: 'app-v-form-statistic-invites',
  templateUrl: './form-statistic-invites.component.html',
  styleUrls: ['./form-statistic-invites.component.css']
})
export class FormStatisticInvitesComponent implements OnInit {

  period: string = 'month';

  periodsName = {
    month: 'LAST MONTH',
    week: 'LAST WEEK',
    today: 'TODAY',
  };

  invitesRate: FormsInvitesRate;

  // TODO Remove when backend complete
  testInviteRate: FormsInvitesRate = {
    invites: {
      total: 2200,
      month: 1500,
      today: 200,
    },
    submissions: {
      total: 2500,
      month: 2100,
      today: 150,
    },
  };

  get invitesValue(): number {
    if(!this.invitesRate) return;
    switch (this.period) {
      case 'month': return this.invitesRate.invites.month;
      case 'today': return this.invitesRate.invites.today;
    }
  }

  get submissionValue(): number {
    if(!this.invitesRate) return;
    switch (this.period) {
      case 'month': return this.invitesRate.submissions.month;
      case 'today': return this.invitesRate.submissions.today;
    }
  }


  constructor(private formsStatsService: FormsStatsService) {
  }

  ngOnInit() {
    this.formsStatsService.getInvitesRate().subscribe((val: FormsInvitesRate) => {
      this.invitesRate = val;
      // this.invitesRate = this.testInviteRate;
    })
  }

  setPeriod(period: string) {
    this.period = period;
  }

}
