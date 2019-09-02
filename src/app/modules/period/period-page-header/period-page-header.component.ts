import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {PeriodService} from '@modules/period/services/period.service';
import {PeriodState} from '@modules/period/store/period.state';
import {ChangeEditPeriodId} from '@modules/period/store/period.actions';

@Component({
  selector: 'app-period-page-header',
  templateUrl: './period-page-header.component.html',
  styleUrls: ['./period-page-header.component.scss']
})

export class PeriodPageHeaderComponent implements OnInit, OnDestroy {
  @Input() titleHeader: string;
  @Input() isBackArrowEnable = true;
  @Input() link?: string;
  public isPopupShown: boolean = false;

  public periodStore: PeriodState;
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService, public router: Router) { }

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.periodStore = periodStore;
    });
  }

  checkChanges(): void {
    if (this.periodStore.editPeriodId && PeriodService.comparePeriod(
      this.periodStore.periods.find((item) => item.id === this.periodStore.editPeriodId),
      this.periodStore.period)) {
      this.goToLink();
    } else {
      this.isPopupShown = true;
    }
  }

  goToLink(): void {
    this.store.dispatch(new ChangeEditPeriodId(null));
    this.router.navigate([this.link]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

