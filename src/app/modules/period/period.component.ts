import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Period } from 'src/app/models/period/period.model';

import { GetPeriodsRequest } from '@modules/period/store/period.actions';
import { PeriodState } from '@modules/period/store/period.state';
import { PeriodService } from '@modules/period/services/period.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})

export class PeriodComponent implements OnInit, OnDestroy  {
  public periods: Period[] = [];
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService, public router: Router) {
    this.subscription = this.periodService.getPeriodStore().subscribe((periodStore) => {
      this.periods = periodStore.periods;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPeriodsRequest());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddPeriod(): void {
    this.router.navigate(['/period/create']);
  }

}
