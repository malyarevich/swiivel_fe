import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { PeriodState } from '../store/period.reducer';
import { PeriodSplitSet } from '../../../models/period/period.model';
import { PeriodService } from '../services/period.service';
import {ChangePeriodError} from '../store/period.actions';

interface PeriodScaleItem {
  isSelected?: boolean;
  isExtreme?: boolean;
  extremeDate?: string;
  label?: string;
  splitId: number;
  slitDuration: number;
  isPen: boolean;
  isInfoOpen?: boolean;
  isLabelEdit?: boolean;
}

interface PeriodScale {
  length: number;
  width: number;
  items?: Array<PeriodScaleItem> | any;
}

@Component({
  selector: 'app-period-split-bar',
  templateUrl: './period-split-bar.component.html',
  styleUrls: ['./period-split-bar.component.scss']
})

export class PeriodSplitBarComponent implements OnInit, OnDestroy {
  // todo тут надо что-то одно оставить
  @Input() splitSetId: number;
  @Input() viewId: number;

  public periodScale: PeriodScale;
  public periodSplitSet: PeriodSplitSet[];
  public activePeriodSet: PeriodSplitSet;
  public savePeriodError: { text: string, isOpen: boolean };
  private subscription = new Subscription();

  constructor(public store: Store<PeriodState>, public periodService: PeriodService) {}

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.periodSplitSet = periodStore.period.split_sets;
      this.activePeriodSet = periodStore.period.split_sets.find((set) => set.split_set_id === this.splitSetId);
      if ( this.activePeriodSet && this.activePeriodSet.splits) {
        this.initScale();
      }
      this.savePeriodError = periodStore.savePeriodError;
    });

    this.periodScale = {
      width: this.getSplitSetLength() * 6,
      length: this.getSplitSetLength(),
      items: []
    };
    this.initScale();
  }

  getSplitSetLength(): number {
    if (this.activePeriodSet && this.activePeriodSet.splits && this.activePeriodSet.splits.length) {
      return this.activePeriodSet.splits.reduce((a, b) => a + b.duration, 0);
    } else {
      return 0;
    }
  }

  initScale(): void {
    const splitSetLength = this.getSplitSetLength();

    this.periodScale = {
      width: splitSetLength * 6,
      length: splitSetLength,
      items: []
    };
    this.activePeriodSet.splits.map((item) => {
      for (let i = 0; i < item.duration; i++) {
        this.periodScale.items.push({
          id: i,
          isExtreme: i === item.duration - 1 ? true : false,
          extremeDate: i === item.duration - 1 ? moment(item.date_to, 'DD-MM-YYYY').format('MM/DD') : null,
          label: i === 2 ? item.name : null,
          splitId: item.split_id,
          slitDuration: i === 2 ? item.duration : null,
          isPen: i === item.duration - 5 ? true : false,
          isInfoOpen: false,
          isLabelEdit: false
        });
    }});
  }

  dropItem(evt: CdkDragDrop<string[]>): void {
    console.log(evt.previousIndex, evt.currentIndex );
    if (evt.currentIndex < evt.previousIndex) {
      this.activePeriodSet.splits.map((item) => {
        if (item.split_id === parseInt(evt.item.element.nativeElement.id, 10)) {
          item.date_to = moment(item.date_to, 'DD-MM-YYYY').subtract(evt.currentIndex - evt.previousIndex, 'days').toDate();
          item.duration = item.duration - (evt.previousIndex - evt.currentIndex);
        } else if (item.split_id === parseInt(evt.item.element.nativeElement.id, 10) + 1) {
          item.date_from = moment(item.date_from, 'DD-MM-YYYY').subtract(evt.currentIndex - evt.previousIndex, 'days').toDate();
          item.duration = item.duration + (evt.previousIndex - evt.currentIndex);
        }
      });
    } else {
      this.activePeriodSet.splits.map((item) => {
        if (item.split_id === parseInt(evt.item.element.nativeElement.id, 10)) {
          item.date_to = moment(item.date_to, 'DD-MM-YYYY').add(evt.currentIndex - evt.previousIndex, 'days').toDate();
          item.duration = item.duration + (evt.currentIndex - evt.previousIndex);
        } else if (item.split_id === parseInt(evt.item.element.nativeElement.id, 10) + 1) {
          item.date_from = moment(item.date_from, 'DD-MM-YYYY').add(evt.currentIndex - evt.previousIndex, 'days').toDate();
          item.duration = item.duration - (evt.currentIndex - evt.previousIndex);
        }
      });
    }
    this.periodService.updateSplitSet(this.activePeriodSet);
  }

  getColor(): string {
    return this.viewId % 2 === 0 ? '#C87F13' : '#1079C4';
  }

  onChangeSplitName(name: string, id: number): void {
    this.periodService.setSplitName(this.activePeriodSet, name, id);
  }

  onCreateSplit(): void {
    this.periodService.createSplit(this.activePeriodSet);
  }

  onPenClick(id: number): void {
    const splitId = this.periodScale.items[id].splitId;
    this.periodScale.items[id].isInfoOpen = !this.periodScale.items[id].isInfoOpen;
    this.periodScale.items.map((item) => {
      if (item.splitId === splitId) {
        item.isLabelEdit = !item.isLabelEdit;
      }
    });
  }

  onCloseInfo(id: number): void {
    const splitId = this.periodScale.items[id].splitId;
    this.periodScale.items[id].isInfoOpen = false;
    this.periodScale.items.map((item) => {
      if (item.splitId === splitId) {
        item.isLabelEdit = false;
      }
    });
  }

  getWidth(label): string {
    return (label.length * 8) + 'px';
  }

  getIndex(cellItem: PeriodScaleItem): number {
    if (!cellItem.isInfoOpen && (cellItem.isPen || cellItem.isExtreme || cellItem.label)) {
      return 2;
    } else if (cellItem.isInfoOpen) {
      return 3;
    } else {
      return 0;
    }
  }

  onCloseSplitSetError(): void {
    this.activePeriodSet.error.isBarErrorOpen = false;
    this.periodService.updateSplitSet(this.activePeriodSet);
  };

  hasShownSplitSetError(splitSet: PeriodSplitSet): boolean {
    return splitSet.error && splitSet.error.text && splitSet.error.text.length && splitSet.error.isBarErrorOpen;
  }

  onCloseSavePeriodError(): void {
    this.store.dispatch(new ChangePeriodError({text: this.savePeriodError.text, isOpen: false }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
