import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { PeriodService } from '@modules/period/services/period.service';
import { PeriodState } from '@modules/period/store/period.state';

@Component({
  selector: 'app-period-page-header',
  templateUrl: './period-page-header.component.html',
  styleUrls: ['./period-page-header.component.scss']
})

export class PeriodPageHeaderComponent implements OnInit, OnDestroy {
  @Input() titleHeader: string;
  @Input() isBackArrowEnable = true;
  @Input() link?: string;

  public period: PeriodState;
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService, public router: Router) { }

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.period = periodStore;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

