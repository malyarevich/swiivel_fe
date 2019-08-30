import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Period } from '@models/period/period.model';

import { PeriodService } from '@modules/period/services/period.service';

import { PeriodState } from '@modules/period/store/period.state';

@Component({
  selector: 'app-period-edit',
  templateUrl: './period-edit.component.html',
  styleUrls: ['./period-edit.component.scss']
})

export class PeriodEditComponent implements OnInit, OnDestroy {
  public periodId: number;
  public periodData: Period[];
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService) {

  }

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.periodId = periodStore.editPeriodId;
      this.periodData = periodStore.periods;
    });
    if (this.periodId && this.periodData) {
      this.periodService.onOpenEditPeriodPage(this.periodData.find((item) => item.id === this.periodId));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
