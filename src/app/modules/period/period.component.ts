import {Component, OnDestroy, OnInit} from '@angular/core';
import { PeriodState } from './store/period.state';
import { Store } from '@ngrx/store';
import { GetPeriodsRequest } from './store/period.actions';
import { Period } from 'src/app/models/period/period.model';
import { Subscription } from 'rxjs';
import { PeriodService } from './services/period.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})

export class PeriodComponent implements OnInit, OnDestroy  {
  public periods: Period[] = [];
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService) {
    this.subscription = this.periodService.getPeriodStore().subscribe((periodStore) => {
      this.periods = periodStore.periods;
      console.log(this.periods);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPeriodsRequest());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
