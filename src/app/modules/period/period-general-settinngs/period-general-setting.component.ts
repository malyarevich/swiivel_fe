import { PeriodSplitSet } from '../../../models/period/period.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PeriodState } from '../store/period.reducer';
import { Observable } from 'rxjs';
import { AddSplitSet } from '../store/period.actions';

@Component({
  selector: 'app-period-general-setting',
  templateUrl: './period-general-setting.component.html',
  styleUrls: ['./period-general-setting.component.scss'],
})

export class PeriodGeneralSettingComponent implements OnInit, OnDestroy {
  periodSubscribe: Observable<PeriodState>;
  splitSet: PeriodSplitSet[];

  constructor(public store: Store<PeriodState>) {
    this.periodSubscribe = store.select('state');
  }

  ngOnInit() {
    this.periodSubscribe.subscribe(periodStore => {
      this.splitSet = periodStore.splitsSet;
    });
  }

  onAddSplit(): void {
    // тут надо по-другому генерировать id на случай, если удалят по серединке
    this.store.dispatch(new AddSplitSet( {
      name: 'Academical',
      split_set_id: this.splitSet.length + 1,
      splits: []
    }));
  }

  ngOnDestroy() {
    this.periodSubscribe.subscribe().unsubscribe();
  }
}

