import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { DeleteSplitSet } from '../store/period.actions';
import { PeriodSplit, PeriodSplitSet } from '../../../models/period/period.model';
import { PeriodState } from '../store/period.reducer';
import { PeriodService } from '../services/period.service';

@Component({
  selector: 'app-period-split-information',
  templateUrl: './period-split-information.component.html',
  styleUrls: ['./period-split-information.scss']
})

export class PeriodSplitInformationComponent implements OnInit, OnDestroy {
  @Input() splitSetId: number;
  @Input() viewId: number;

  public activeSplitSet: PeriodSplitSet;
  public viewSplits: PeriodSplit[] = [];
  public periodDuration: number = 0;
  public splitUnits: string[] = ['months', 'weeks', 'days', 'equal parts'];
  private splitInformationForm: FormGroup;
  private sortingParam: { name: string, order: string } = { name: null, order: null };
  private subscription = new Subscription();

  public splitSetTableColumns = [
    {
      id: 'name',
      title: 'SPLIT NAME',
      sort: true,
      search: true,
      width: '170px'
    },
    {
      id: 'date_from',
      title: 'SPLIT START',
      sort: true,
      dateSearch: true,
      width: '170px'
    },
    {
      id: 'date_to',
      title: 'SPLIT END',
      sort: true,
      dateSearch: true,
      width: '170px'
    },
    {
      id: 'duration',
      title: 'DAYS IN SPLIT',
      sort: true,
      search: true,
      width: '170px'
    },
    {
    }
  ];

  constructor(public store: Store<PeriodState>, private fb: FormBuilder, public periodService: PeriodService) {
    this.splitInformationForm = fb.group( {
      splitUnit: ['months', Validators.required],
      splitAmount: [null, Validators.required],
      splitDuration: [null, Validators.required]
    });
    this.viewSplits = [];
  }

  ngOnInit(): void {
    this.subscription = this.periodService.getPeriodStore().subscribe(periodStore => {
      this.activeSplitSet = periodStore.period.split_sets.find((set) => set.split_set_id === this.splitSetId);
      this.periodDuration = periodStore.period.duration;
      if (this.activeSplitSet && this.activeSplitSet.splits) {
        this.viewSplits = this.getSortedSplits(this.activeSplitSet.splits, this.sortingParam.order, this.sortingParam.name);
      }
    });
  }

  getBkgColor(): string {
    return this.viewId % 2 === 0 ? '#FBE2BC' : '#DEF1FF';
  }

  getRowColor(i: number): string {
    if (this.hasShownSplitSetError(this.activeSplitSet)) {
      return '#FFF3F3';
    } else {
      return i % 2 === 0 ? 'transparent' : '#FAFAFA';
    }
  }

  onSortSplits(event): void {
    this.sortingParam = { name: event.id, order: event.order};
    this.viewSplits = this.getSortedSplits(this.viewSplits, this.sortingParam.order, this.sortingParam.name);
  }

  getSortedSplits(splits: PeriodSplit[], order: string, name: string): PeriodSplit[] {
    const viewSplits: PeriodSplit[] = splits.slice();

    if (order && name && splits) {
      if (order === 'DESC') {
        viewSplits.sort((referenceSplit, compareSplit) => {
          if (name === 'name') {
            return referenceSplit.name.localeCompare(compareSplit.name, 'en', {
              numeric: true,
              sensitivity: 'base'
            });
          } else {
            return referenceSplit[name] > compareSplit[name] ? 1 : -1;
          }
        });
      } else if (order === 'ASC') {
        viewSplits.sort((referenceSplit, compareSplit) => {
          if (name === 'name') {
            return compareSplit.name.localeCompare(referenceSplit.name, 'en', {
              numeric: true,
              sensitivity: 'base'
            });
          } else {
            return referenceSplit[name] < compareSplit[name] ? 1 : -1;
          }
        });
      }
    }
    return viewSplits;
  }

  onDeleteClick(): void {
    this.store.dispatch(new DeleteSplitSet( { index: this.activeSplitSet.split_set_id }));
  }

  onCreateSplit(): void {
    const unit = this.getUnit();
    const amount = this.splitInformationForm.get('splitAmount').value;
    const duration = this.splitInformationForm.get('splitUnit').value === 'equal parts' ?
      1 : this.splitInformationForm.get('splitDuration').value;
    if (amount && duration && amount > 0 && duration > 0) {
      for (let i = 0; i < amount; i++) {
        const previousSplit = this.activeSplitSet.splits[i - 1];
        this.activeSplitSet.splits.push({
          name: i + 1 + ' split',
          date_from: previousSplit ? moment(previousSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate() : new Date(),
          date_to: previousSplit ? moment(previousSplit.date_to, 'DD-MM-YYYY').add(unit * duration, 'days').toDate() :
            moment(new Date(), 'DD-MM-YYYY').add(unit * duration, 'days').toDate(),
          split_id: i + 1,
          duration: this.splitInformationForm.get('splitUnit').value === 'equal parts' ? unit : (unit * amount)
        });
      }
      this.periodService.updateSplitSet(this.activeSplitSet);
    }
  }

  onModifySplit(): void {
    const unit = this.getUnit();
    const amount = this.splitInformationForm.get('splitAmount').value;
    const duration = this.splitInformationForm.get('splitUnit').value === 'equal parts' ?
      1 : this.splitInformationForm.get('splitDuration').value;

    if (amount && duration && amount > 0 && duration > 0) {
      if (amount >= this.activeSplitSet.splits.length) {
        for (let i = 0; i < amount; i++) {
          const previousSplit = this.activeSplitSet.splits[i - 1];
          const activeSplitSet = this.activeSplitSet.splits[i];
          if (activeSplitSet) {
            activeSplitSet.date_from = previousSplit ?
              moment(previousSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate() : activeSplitSet.date_from;
            activeSplitSet.date_to = previousSplit ?
              moment(previousSplit.date_to, 'DD-MM-YYYY').add(unit * duration, 'days').toDate() :
              moment(activeSplitSet.date_from, 'DD-MM-YYYY').add(unit * duration, 'days').toDate();
            activeSplitSet.duration = unit * duration;
          } else {
            this.activeSplitSet.splits.push({
              name: i + 1  + ' split',
              date_from: previousSplit ? moment(previousSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate() : new Date(),
              date_to: previousSplit ? moment(previousSplit.date_to, 'DD-MM-YYYY').add(unit * amount, 'days').toDate() :
                moment(new Date(), 'DD-MM-YYYY').add(unit * duration, 'days').toDate(),
              split_id: previousSplit ? previousSplit.split_id + 1 : 0,
              duration: unit * duration
            });
          }
        }
      } else {
        this.activeSplitSet.splits.splice(amount, this.activeSplitSet.splits.length);
        for (let i = 0; i < amount; i++) {
          const activeSplitSet = this.activeSplitSet.splits[i];
          const previousSplit = this.activeSplitSet.splits[i - 1];
          if (activeSplitSet) {
            activeSplitSet.date_from = previousSplit ?
              moment(previousSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate() : activeSplitSet.date_from;
            activeSplitSet.date_to = previousSplit ?
              moment(previousSplit.date_to, 'DD-MM-YYYY').add(unit * duration, 'days').toDate() :
              moment(activeSplitSet.date_from, 'DD-MM-YYYY').add(unit * duration, 'days').toDate();
            activeSplitSet.duration = unit * duration;
          }
        }
      }
      this.periodService.updateSplitSet(this.activeSplitSet);
    }
  }

  getUnit(): number {
    if (this.splitInformationForm.get('splitUnit').value === 'months') {
      return 31;
    } else if (this.splitInformationForm.get('splitUnit').value === 'weeks') {
      return 7;
    } else if (this.splitInformationForm.get('splitUnit').value === 'days') {
      return 1;
    } else if (this.splitInformationForm.get('splitUnit').value === 'equal parts') {
      return Math.ceil(this.periodDuration / this.splitInformationForm.get('splitAmount').value);
    }
  }

  onChangeName(name: string, splitId: number): void {
    this.periodService.setSplitName(this.activeSplitSet, name, splitId);
  }

  onChangeDate(activeSplit: PeriodSplit, date: string): void {
    this.periodService.changeSplitDate(this.activeSplitSet, activeSplit, activeSplit.split_id, date);
  }

  onChangeDuration(splitId: number): void {
    this.periodService.changeSplitDuration(this.activeSplitSet, splitId);
  }

  onSplitCreate(): void {
    this.periodService.createSplit(this.activeSplitSet);
  }

  onDeleteSplit(splitId: number): void {
    this.periodService.deleteSplit(this.activeSplitSet, splitId);
  }

  onSearch(evt: { value: any, name: string }): void {
    if (evt.value) {
      if (evt.name === 'name') {
        this.viewSplits = this.viewSplits.filter((split) => split[evt.name].includes(evt.value));
      } else if (evt.name === 'duration' && evt.value) {
        this.viewSplits = this.activeSplitSet.splits.filter((split) => parseInt(split[evt.name], 10) === parseInt(evt.value, 10));
      } else if (evt.value) {
        this.viewSplits = this.activeSplitSet.splits.filter((split) => {
          return moment(moment(split[evt.name])).isSame(moment(evt.value), 'day');
          });
      }
    } else {
      this.viewSplits = this.getSortedSplits(this.activeSplitSet.splits, this.sortingParam.order, this.sortingParam.name);
    }
  }

  onCloseSplitSetError(): void {
    this.activeSplitSet.error.isBarErrorOpen = false;
    this.periodService.updateSplitSet(this.activeSplitSet);
  };

  hasShownSplitSetError(splitSet: PeriodSplitSet): boolean {
    return splitSet.error && splitSet.error.text && splitSet.error.text.length && splitSet.error.isBarErrorOpen;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
