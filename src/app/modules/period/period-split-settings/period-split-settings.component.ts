import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeriodState } from '../store/period.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PeriodSplit, PeriodSplitSet } from '../../../models/period/period.model';
import { ChangeSplitSet } from '../store/period.actions';
import * as moment from 'moment';

@Component({
  selector: 'app-period-split-settings',
  templateUrl: './period-split-settings.component.html',
  styleUrls: ['./period-split-settings.scss']
})
export class PeriodSplitSettingsComponent implements OnInit {
  periodSubscribe: Observable<PeriodState>;
  activeSplitSet: PeriodSplitSet;
  activeSplit: PeriodSplit;
  @Input() splitSetId: number;
  @Input() splitId: number;
  @Input() periodScaleItemId: number;
  @Output() closeInfo: EventEmitter<number> = new EventEmitter<number>();

  constructor(public store: Store<PeriodState>) {
    this.periodSubscribe = store.select('state');
  }

  ngOnInit(): void {
    this.periodSubscribe.subscribe(periodStore => {
      this.activeSplitSet = periodStore.splitsSet.find((set) => set.split_set_id === this.splitSetId);
      if (this.activeSplitSet) {
        this.activeSplit = this.activeSplitSet.splits.find((split) => split.split_id === this.splitId);
      }
    });
  }

  onCloseInfo(): void {
    this.closeInfo.emit(this.periodScaleItemId);
  }

  onChangeSplitDate(): void {
    const splitIndex = this.activeSplitSet.splits.indexOf(this.activeSplitSet.splits.find((split) => split.split_id === this.splitId));
    const activeSplitDuration = moment(this.activeSplit.date_to).diff(moment(this.activeSplit.date_from), 'days') + 1;
    if (activeSplitDuration  > 7) {
      this.activeSplitSet.splits[splitIndex] = {
        name: this.activeSplit.name,
        date_from: this.activeSplit.date_from,
        date_to: this.activeSplit.date_to,
        split_id: this.activeSplit.split_id,
        duration: activeSplitDuration
      };
      this.updateSplitSet(this.splitSetId, this.activeSplitSet);
    }
  }

  updateSplitSet(updatedSplitSetIndex: number, updatedSplitSet: PeriodSplitSet): void {
    this.store.dispatch(new ChangeSplitSet( {
      index: updatedSplitSetIndex,
      splitSet: updatedSplitSet
    }));
  }

  onDeleteClick(): void {
    const splitIndex = this.activeSplitSet.splits.indexOf(this.activeSplitSet.splits.find((split) => split.split_id === this.splitId));
    if (this.activeSplitSet.splits[splitIndex + 1]) {
      this.activeSplitSet.splits[splitIndex + 1].date_from = this.activeSplitSet.splits[splitIndex].date_from;
      this.activeSplitSet.splits[splitIndex + 1].duration += this.activeSplitSet.splits[splitIndex].duration;
    }
    this.activeSplitSet.splits.splice(splitIndex, 1);
    this.updateSplitSet(this.splitSetId, this.activeSplitSet);
  }

  onCopyClick(): void {
    console.log('copy');
  }

  onChangeSplitDuration(): void {
    console.log('change duration');
    const splitIndex = this.activeSplitSet.splits.indexOf(this.activeSplitSet.splits.find((split) => split.split_id === this.splitId));
    // if (splitIndex) {
    //   this.activeSplitSet.splits[splitIndex].duration =
    // }
    // if (this.activeSplitSet.splits[splitIndex + 1]) {
    //     if (this.activeSplit.duration < this.splitInitialDuration){
    //       //
    //     }
    // }

    // const activeSplitDuration = moment(this.activeSplit.date_to).diff(moment(this.activeSplit.date_from), 'days') + 1;
    // if (activeSplitDuration  > 7) {
    //   this.activeSplitSet.splits[splitIndex] = {
    //     name: this.activeSplit.name,
    //     date_from: this.activeSplit.date_from,
    //     date_to: this.activeSplit.date_to,
    //     split_id: this.activeSplit.split_id,
    //     duration: activeSplitDuration
    //   };
    //   this.updateSplitSet(this.splitSetId, this.activeSplitSet);
    // }
  }
}
