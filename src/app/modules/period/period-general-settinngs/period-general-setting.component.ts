import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { PeriodSplitSet } from 'src/app/models/period/period.model';

import { PeriodService } from '@modules/period/services/period.service';

import { AddSplitSet, CreatePeriodRequest, UpdateExistingPeriodRequest } from '@modules/period/store/period.actions';
import { PeriodState } from '@modules/period/store/period.state';

@Component({
  selector: 'app-period-general-setting',
  templateUrl: './period-general-setting.component.html',
  styleUrls: ['./period-general-setting.component.scss'],
})

export class PeriodGeneralSettingComponent implements OnInit, OnDestroy {
  @Input() mode: string;
  public isPopupShown: boolean = false;
  public splitSet: PeriodSplitSet[];
  public period: PeriodState;
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService, public router: Router) {}

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.splitSet = periodStore.period.split_sets;
      this.period = periodStore;
    });
  }

  onAddSplit(): void {
    this.store.dispatch(new AddSplitSet( {
      name: 'Academical',
      id: this.splitSet.length === 0 ? 0 : this.splitSet.slice(-1).pop().id + 1 ,
      splits: [],
      error: { text: null, isBarErrorOpen: false, isTableErrorOpen: false }
    }));
  }

  onModify(): void {
    this.periodService.validatePeriod(this.period);
    this.periodService.validateSplitSet(this.period);
    if (!this.periodService.isError(this.period)) {
      if (this.mode === 'create') {
        this.store.dispatch(new CreatePeriodRequest(this.period));
      } else {
        this.store.dispatch(new UpdateExistingPeriodRequest(this.period));
      }
    }
  }

  onCancel(): void {
    if (this.period.period.name || this.period.period.date_to || this.period.period.date_from || this.period.period.split_sets.length) {
      this.isPopupShown = true;
    } else {
      this.goToPeriodPage();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goToPeriodPage(): void {
    this.router.navigate(['/period']);
  }
}
