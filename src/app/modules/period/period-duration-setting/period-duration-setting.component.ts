import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as moment from 'moment';

import { Period } from 'src/app/models/period/period.model';

import { PeriodService } from '@modules/period/services/period.service';

import { ChangePeriod } from '@modules/period/store/period.actions';
import { PeriodState } from '@modules/period/store/period.state';

@Component({
  selector: 'app-period-duration-setting',
  templateUrl: './period-duration-setting.component.html',
  styleUrls: ['./period-duration-setting.component.scss']
})

export class PeriodDurationSettingComponent implements OnInit, OnDestroy {
  @Input() width?: string = 'auto';

  public  period: Period;
  private subscription = new Subscription();

  constructor(private store: Store<PeriodState>, public periodService: PeriodService) {}

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.period = periodStore.period;
    });
  }

  onChangePeriod(): void {
     this.store.dispatch(new ChangePeriod({
       name: this.period.name,
       date_from: this.period.date_from,
       date_to: this.period.date_to,
       duration: Math.ceil((moment.duration(moment(this.period.date_to).diff(moment(this.period.date_from))).asDays())),
       split_sets: this.period.split_sets
       })
     );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
