import { Component, Input, OnInit } from '@angular/core';
import { PeriodState } from '../store/period.reducer';
import { PeriodSplitSet } from '../../../models/period/period.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeSplitSet} from '../store/period.actions';

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

export class PeriodSplitBarComponent implements OnInit {
  periodSubscribe: Observable<PeriodState>;
  periodScale: PeriodScale;
  periodSplitSet: PeriodSplitSet[];
  activePeriodSet: PeriodSplitSet;
  // todo тут надо что-то одно оставить
  @Input() splitSetId: number;
  @Input() viewId: number;

  constructor(public store: Store<PeriodState>) {
    this.periodSubscribe = store.select('state');
  }

  ngOnInit(): void {
    this.periodSubscribe.subscribe(periodStore => {
      this.periodSplitSet = periodStore.splitsSet;
      this.activePeriodSet = periodStore.splitsSet.find((set) => set.split_set_id === this.splitSetId);
      this.initScale();
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
    this.updateSplitSet(this.activePeriodSet.split_set_id, this.activePeriodSet);
  }

  getColor(): string {
    return this.viewId % 2 === 0 ? '#C87F13' : '#1079C4';
  }

  onChangeSplitName(evt: string, id: number): void {
    this.activePeriodSet.splits.map((split) => {
      if (split.split_id === id) {
        split.name = evt;
      }
    });
    this.updateSplitSet(this.activePeriodSet.split_set_id, this.activePeriodSet);
  }

  // todo возможно onAdd & onCreate это в одну функцию
  onAddSplit(): void {
    const startDate = moment(this.activePeriodSet.splits.slice(-1).pop().date_to, 'DD-MM-YYYY').add(1, 'days').toDate();
    const previousSetIndex = this.activePeriodSet.splits && this.activePeriodSet.splits.length ?
      this.activePeriodSet.splits.slice(-1).pop().split_id : 1;

    this.activePeriodSet.splits.push({
      name: previousSetIndex + 1 + ' split',
      date_from: startDate,
      date_to: moment(startDate, 'DD-MM-YYYY').add(31, 'days').toDate(),
      split_id: previousSetIndex + 1,
      duration: 31
    });
    this.updateSplitSet(this.activePeriodSet.split_set_id, this.activePeriodSet);
  }

  onCreateSplit(): void {
    const previousSetIndex = this.activePeriodSet.splits && this.activePeriodSet.splits.length ?
      this.activePeriodSet.splits.slice(-1).pop().split_id : 0;

    this.activePeriodSet.splits.push({
      name: previousSetIndex + 1 + ' split',
      date_from: new Date(),
      date_to: moment(new Date(), 'DD-MM-YYYY').add(31  , 'days').toDate(),
      split_id: previousSetIndex + 1,
      duration: 31
    });
    this.updateSplitSet(this.activePeriodSet.split_set_id, this.activePeriodSet);
    console.log(this.activePeriodSet);
  }

  updateSplitSet(updatedSplitSetIndex: number, updatedSplitSet: PeriodSplitSet): void {
    this.store.dispatch(new ChangeSplitSet( {
      index: updatedSplitSetIndex,
      splitSet: updatedSplitSet
    }));
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
}
