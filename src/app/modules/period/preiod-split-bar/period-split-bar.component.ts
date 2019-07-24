import { Component, Input, OnInit } from '@angular/core';
import { PeriodState } from '../store/period.reducer';
import { Period, PeriodSplitSet } from '../../../models/period/period.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangePeriod, ChangeSplitSet} from '../store/period.actions';

interface PeriodScaleItem {
  isSelected?: boolean;
  isLowExtreme?: boolean;
  isHighExtreme?: boolean;
  splitSetInfo: PeriodSplitSet;
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
  period: Period;
  periodScale: PeriodScale;
  periodSplitSet: PeriodSplitSet[];
  activePeriodSet: PeriodSplitSet;
  // тут надо что-то одно оставить
  @Input() splitSetId: number;
  @Input() viewId: number;

  constructor(public store: Store<PeriodState>) {
    this.periodSubscribe = store.select('state');
  }

  ngOnInit(): void {
    this.periodSubscribe.subscribe(periodStore => {
      this.periodSplitSet = periodStore.splitsSet;
      this.activePeriodSet = periodStore.splitsSet.find((set) => set.split_set_id === this.splitSetId);
      console.log(this.activePeriodSet);
      this.period = periodStore.period;
      this.initScale();
    });

    this.periodScale = {
      width: (366 * 6),
      length: 366,
      items: []
    };
  }

  getSplitSetLength(): number {
    if (this.activePeriodSet && this.activePeriodSet.splits && this.activePeriodSet.splits.length) {
      // почему здеь объект?
      // console.log(this.activePeriodSet.splits.reduce((a, b) => a.duration + b.duration, 0));
    } else {
      return 0;
    }
  }

  initScale(): void {
    this.periodScale = {
      width: (366 * 6),
      length: 366,
      items: []
    };
    for (let i = 0; i < this.periodScale.length; i++ ) {
      this.drawItem(i);
    }
    if (this.periodScale.items && this.period && this.period.duration && this.period.duration > 0) {
      this.periodScale.items[0].isLowExtreme = true;
      console.log(this.period.duration - 1);
      this.periodScale.items[this.period.duration - 1].isHighExtreme = true;
    }
  }

  drawItem(index: number): void {
    if (moment(this.period.date_from, 'DD-MM-YYYY').add(index,  'days').date() === 1) {
      this.periodScale.items.push({
        id: index,
        label: moment()
          .month(moment(this.period.date_from, 'DD-MM-YYYY').add(index,  'days').month()).format('MMMM').slice(0, 3),
      });
    } else {
      this.periodScale.items.push({id: index});
    }

    this.periodScale.items[index].isSelected = (
      moment(this.period.date_from, 'DD-MM-YYYY') <= moment(this.period.date_from, 'DD-MM-YYYY').add(index, 'days')
      && moment(this.period.date_from, 'DD-MM-YYYY').add(index, 'days') <= moment(this.period.date_to, 'DD-MM-YYYY'));
  }

  dropItem(evt: CdkDragDrop<string[]>): void {
    console.log(evt);
    const elements = Array.prototype.slice.call(evt.item.element.nativeElement.children);
    elements.map((element) => {
      if (element.className.includes('app-period-bar__cell--high-extreme')) {
        } else if (element.className.includes('app-period-bar__cell--low-extreme')) {
        const tempDuration = this.period.duration;
      }
    });
  }

  getInputColor(): string {
    return this.viewId % 2 === 0 ? '#C87F13' : '#1079C4';
  }

  onChangeSplitName(evt: string): void {
    console.log(evt);
  }

  onAddSplit(): void {
    const startDate = moment(this.activePeriodSet.splits.slice(-1).pop().date_to, 'DD-MM-YYYY').add(1, 'days').toDate();
    const previousSetIndex = this.activePeriodSet.splits && this.activePeriodSet.splits.length ?
      this.activePeriodSet.splits.slice(-1).pop().split_id : 0;

    this.activePeriodSet.splits.push({
      name: previousSetIndex + 1 + ' split',
      date_from: startDate,
      date_to: moment(startDate, 'DD-MM-YYYY').add(31, 'days').toDate(),
      split_id: previousSetIndex + 1
    });
    console.log(this.activePeriodSet);
  }

  onCreateSplit(): void {
    const previousSetIndex = this.activePeriodSet.splits && this.activePeriodSet.splits.length ?
      this.activePeriodSet.splits.slice(-1).pop().split_id : 0;

    this.activePeriodSet.splits.push({
      name: previousSetIndex + ' split',
      date_from: new Date(),
      date_to: moment(new Date(), 'DD-MM-YYYY').add(30  , 'days').toDate(),
      split_id: previousSetIndex + 1
    });
    this.store.dispatch(new ChangeSplitSet( {
      index: this.activePeriodSet.split_set_id,
      splitSet: this.activePeriodSet
    }));
    console.log(this.activePeriodSet);
  }
}
