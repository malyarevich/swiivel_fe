import { Component, Input, OnInit } from '@angular/core';
import { Period } from '../../../models/period/period.model';
import { PeriodState } from '../store/period.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { ChangePeriod } from '../store/period.actions';

@Component({
  selector: 'app-period-duration-setting',
  templateUrl: './period-duration-setting.component.html',
  styleUrls: ['./period-duration-setting.component.scss']
})
export class PeriodDurationSettingComponent implements OnInit {
  @Input() width?: string = 'auto';
  periodSubscribe: Observable<PeriodState>;
  period: Period;

  ngOnInit() {
  }

  constructor(private store: Store<PeriodState>) {
    this.periodSubscribe = store.select('state');
    this.periodSubscribe.subscribe( periodStore => this.period = periodStore.period);
  }

  onChangePeriod(): void {
     this.store.dispatch(new ChangePeriod({
         name: this.period.name,
         date_from: this.period.date_from,
         date_to: this.period.date_to,
         duration: Math.ceil((moment.duration(moment(this.period.date_to).diff(moment(this.period.date_from))).asDays()))
       })
     );
  }

}
