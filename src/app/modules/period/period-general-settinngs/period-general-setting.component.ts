import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AddSplitSet, CreatePeriodRequest } from '../store/period.actions';
import { PeriodState } from '../store/period.reducer';
import { PeriodSplitSet } from '../../../models/period/period.model';
import { PeriodService } from '../services/period.service';

@Component({
  selector: 'app-period-general-setting',
  templateUrl: './period-general-setting.component.html',
  styleUrls: ['./period-general-setting.component.scss'],
})

export class PeriodGeneralSettingComponent implements OnInit, OnDestroy {
  public isPopupShown: boolean = false;
  public splitSet: PeriodSplitSet[];
  public period: PeriodState;
  private subscription = new Subscription();

  @Output() onCreateClick = new EventEmitter<string>();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService) {}

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.splitSet = periodStore.period.split_sets;
      this.period = periodStore;
    });
  }

  onAddSplit(): void {
    this.store.dispatch(new AddSplitSet( {
      name: 'Academical',
      split_set_id: this.splitSet.length === 0 ? 0 : this.splitSet.slice(-1).pop().split_set_id + 1 ,
      splits: [],
      error: { text: null, isBarErrorOpen: false, isTableErrorOpen: false }
    }));
  }

  onCreate(): void {
    this.store.dispatch(new CreatePeriodRequest(this.period));
  }

  onCancel(): void {
    if (this.period.period.name || this.period.period.date_to || this.period.period.date_from || this.period.period.split_sets.length) {
      this.isPopupShown = true;
    } else {
      console.log('link to period');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

