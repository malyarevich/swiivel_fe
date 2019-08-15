import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { PeriodService } from '../services/period.service';
import { PeriodState } from '../store/period.reducer';
import { CreatePeriodRequest } from '../store/period.actions';

@Component({
  selector: 'app-period-page-header',
  templateUrl: './period-page-header.component.html',
  styleUrls: ['./period-page-header.component.scss']
})

export class PeriodPageHeaderComponent implements OnInit, OnDestroy {
  @Input() titleHeader: string;
  @Input() isBackArrowEnable = true;
  @Input() isCreate = false;
  @Input() buttonText: string;
  @Input() link?: string;

  public period: PeriodState;
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService, public router: Router) { }

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.period = periodStore;
    });
  }

  onClick(): void {
    console.log('click');
    if (this.isCreate) {
      this.periodService.validatePeriod(this.period);
      this.periodService.validateSplitSet(this.period);
      // this.store.dispatch(new CreatePeriodRequest(this.period));
      console.log(this.periodService.isError(this.period));
      if (!this.periodService.isError(this.period)) {
        this.store.dispatch(new CreatePeriodRequest(this.period));
        // if (this.period.savePeriodError) {
        //   this.router.navigate([this.link]);
        // }
      }
    }
    if (this.link && !this.isCreate) {
      this.router.navigate([this.link]);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
