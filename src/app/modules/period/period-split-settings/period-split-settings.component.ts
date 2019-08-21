import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { PeriodSplit, PeriodSplitSet } from 'src/app/models/period/period.model';
import { PeriodState } from '../store/period.state';
import { PeriodService } from '../services/period.service';

@Component({
  selector: 'app-period-split-settings',
  templateUrl: './period-split-settings.component.html',
  styleUrls: ['./period-split-settings.scss']
})

export class PeriodSplitSettingsComponent implements OnInit, OnDestroy {
  @Input() splitSetId: number;
  @Input() splitId: number;
  @Input() periodScaleItemId: number;
  @Output() closeInfo: EventEmitter<number> = new EventEmitter<number>();

  public activeSplitSet: PeriodSplitSet;
  public activeSplit: PeriodSplit;
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService) {}

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.activeSplitSet = periodStore.period.split_sets.find((set) => set.split_set_id === this.splitSetId);
      if (this.activeSplitSet) {
        this.activeSplit = this.activeSplitSet.splits.find((split) => split.split_id === this.splitId);
      }
    });
  }

  onCloseInfo(): void {
    this.closeInfo.emit(this.periodScaleItemId);
  }

  onChangeSplitDate(date: string): void {
    this.periodService.changeSplitDate(this.activeSplitSet, this.activeSplit, this.splitId, date);
  }

  onDeleteClick(): void {
    this.periodService.deleteSplit(this.activeSplitSet, this.splitId);
  }

  onCopyClick(): void {
    const splitIndex = this.activeSplitSet.splits.indexOf(this.activeSplitSet.splits.find((split) => split.split_id === this.splitId));
    const copySplit = this.activeSplitSet.splits[splitIndex];
    this.activeSplitSet.splits.splice(splitIndex, 0,
      {
        name: copySplit.name,
        date_from: moment(copySplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate(),
        date_to: moment(copySplit.date_to, 'DD-MM-YYYY').add(1 + copySplit.duration, 'days').toDate(),
        split_id: this.activeSplitSet.splits.slice(-1).pop().split_id + 1,
        duration: copySplit.duration
      }
    );
    this.activeSplitSet.splits.map((split) => {
      if (this.activeSplitSet.splits.indexOf(split) > splitIndex + 1) {
          const previousSplit =  this.activeSplitSet.splits[this.activeSplitSet.splits.indexOf(split) - 1];
          split.date_from = moment(previousSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate();
          split.date_from = moment(previousSplit.date_to, 'DD-MM-YYYY').add(1 + split.duration, 'days').toDate();
      }
    });
    this.periodService.updateSplitSet(this.activeSplitSet);
  }

  onChangeSplitDuration(): void {
    this.periodService.changeSplitDuration(this.activeSplitSet, this.splitId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
