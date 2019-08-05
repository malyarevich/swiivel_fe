import { Component, OnInit } from '@angular/core';
import { PeriodState } from '../store/period.reducer';
import { Period } from '../../../models/period/period.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangePeriod } from '../store/period.actions';

interface PeriodScaleItem {
  id?: number;
  label?: string;
  isSelected?: boolean;
  isLowExtreme?: boolean;
  isHighExtreme?: boolean;
}

interface PeriodScale {
  length: number;
  width: number;
  duration: number;
  label?: string;
  items?: Array<PeriodScaleItem> | any;
}

@Component({
  selector: 'app-period-bar',
  templateUrl: './period-bar.component.html',
  styleUrls: ['./period-bar.component.scss']
})

export class PeriodBarComponent implements OnInit {
  periodSubscribe: Observable<PeriodState>;
  period: Period;
  periodScale: PeriodScale;

  constructor(public store: Store<PeriodState>) {
    this.periodSubscribe = store.select('state');
  }

  ngOnInit(): void {
    this.periodSubscribe.subscribe(periodStore => {
      this.period = periodStore.period;
      this.initScale();
    });
    this.periodScale = {
      width: (366 * 6),
      length: 366,
      items: [],
      label: this.period.name,
      duration: this.period.duration > 366 ? 366 : this.period.duration
    };
   this.initScale();
  }

  initScale(): void {
    this.periodScale = {
      width: (366 * 6),
      length: 366,
      items: [],
      label: this.period.name,
      duration: this.period.duration > 366 ? 366 : this.period.duration
    };
    for (let i = 0; i < this.periodScale.length; i++ ) {
      this.drawItem(i);
    }

    if (this.periodScale.items && this.period && this.period.duration && this.period.duration > 0) {
      this.periodScale.items[0].isLowExtreme = true;
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
    const elements = Array.prototype.slice.call(evt.item.element.nativeElement.children);
    elements.map((element) => {
      if (element.className.includes('app-period-bar__cell--high-extreme')) {
        this.store.dispatch(new ChangePeriod({
            name: this.periodScale.label,
            date_from: this.period.date_from,
            date_to: moment(this.period.date_from, 'DD-MM-YYYY').add(evt.currentIndex + 1, 'days').toDate(),
            duration: evt.currentIndex + 2
          }
        ));
      } else if (element.className.includes('app-period-bar__cell--low-extreme')) {
        const tempDuration = this.period.duration;
        this.store.dispatch(new ChangePeriod({
            name: this.periodScale.label,
            date_from: moment(this.period.date_from, 'DD-MM-YYYY').add(evt.currentIndex, 'days').toDate(),
            date_to: this.period.date_to,
            duration: tempDuration - evt.currentIndex + 1
          }
        ));
      }
    });
  }

  getWidth(): string {
    return this.periodScale.duration > 15 ? ((this.periodScale.duration * 6) - 12).toString() + 'px' : '0px';
  }

  onChangeName(evt: string): void {
    this.store.dispatch(new ChangePeriod({
        name: evt,
        date_from: this.period.date_from,
        date_to: this.period.date_to,
        duration: this.period.duration
      }
    ));
  }
}
