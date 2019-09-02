import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { Period, PeriodSplit, PeriodSplitSet } from 'src/app/models/period/period.model';

import {ChangePeriodError, ChangeSplitSet, LoadPeriods, OpenCreatePeriodPage, ValidatePeriod} from '@modules/period/store/period.actions';
import { PeriodErrorEnum } from '@modules/period/period-error.enum';
import { PeriodState } from '@modules/period/store/period.state';
import { PeriodTableTypeEnum } from '@modules/period/period-table-type.enum';

const API_URL = 'http://fin.red.dev.codeblue.ventures/api/v1';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 123'
  })
};

const splitTypeColor = ['#CD690E', '#1AA6D2', '#6A23DD', '#DB2869', '#2AAF5F', '#1E68D7'];

@Injectable()
export class PeriodService {
  public periodStore: Observable<PeriodState>;

  constructor(public store: Store<PeriodState>, private http: HttpClient) {
    this.periodStore = store.select('state');
  }

  static getSplitTypeColor(index: number): string {
    if (index > 5) {
      return splitTypeColor[index - (Math.floor(index / 6) * 6)];
    } else {
      return splitTypeColor[index];
    }
  }

  static getDuration(from: Date, to: Date): number {
    return moment(to).diff(moment(from), 'days');
  }

  static comparePeriod(comparePeriod, referencePeriod): boolean {
    return (comparePeriod.name === referencePeriod.name &&
      comparePeriod.date_from === referencePeriod.date_from &&
      comparePeriod.date_to === referencePeriod.date_to &&
      comparePeriod.duration === referencePeriod.duration &&
      comparePeriod.splitSets === referencePeriod.splitSets
    );
  }

  setSplitName(activePeriodSet: PeriodSplitSet, name: string, splitId: number): void {
    if (activePeriodSet) {
      activePeriodSet.splits.map((split) => {
        if (split.id === splitId) {
          split.name = name;
        }
      });
      this.updateSplitSet(activePeriodSet);
    }
  }

  getPeriodStore(): Observable<PeriodState> {
    return this.periodStore;
  }

  onOpenCreateNewPeriodPage(): void {
    this.store.dispatch(new OpenCreatePeriodPage({
      name: 'new period',
      date_from: new Date(),
      date_to: moment(new Date(), 'DD-MM-YYYY').add(365, 'days').toDate(),
      duration: 366,
      split_sets: [{
        name: 'Financial',
        id: 1,
        error: {text: null, isBarErrorOpen: false, isTableErrorOpen: false},
        splits: [{
          name: '1 split',
          date_from: new Date(),
          date_to: moment(new Date(), 'DD-MM-YYYY').add(30, 'days').toDate(),
          id: 1,
          duration: 31
        }]
      }],
    }));
    this.store.dispatch(new ChangePeriodError({text: null, isOpen: false}));
  }

  onOpenEditPeriodPage(period: Period): void {
    this.store.dispatch(new OpenCreatePeriodPage({
      name: period.name,
      date_from: period.date_from,
      date_to: period.date_to,
      duration: period.duration,
      id: period.id,
      split_sets: period.split_sets
    }));
    this.store.dispatch(new ChangePeriodError({text: null, isOpen: false}));
  }

  createSplit(activeSplitSet: PeriodSplitSet): void {
    const previousSetIndex = activeSplitSet.splits && activeSplitSet.splits.length ? activeSplitSet.splits.slice(-1).pop().id : 0;

    if (activeSplitSet.splits && activeSplitSet.splits.length) {
      const startDate = moment(activeSplitSet.splits.slice(-1).pop().date_to, 'DD-MM-YYYY').add(1, 'days').toDate();
      activeSplitSet.splits.push({
        name: previousSetIndex + 1 + ' split',
        date_from: startDate,
        date_to: moment(startDate, 'DD-MM-YYYY').add(31, 'days').toDate(),
        id: previousSetIndex + 1,
        duration: 31
      });
    } else {
      activeSplitSet.splits.push({
        name: previousSetIndex + 1 + ' split',
        date_from: new Date(),
        date_to: moment(new Date(), 'DD-MM-YYYY').add(31, 'days').toDate(),
        id: previousSetIndex + 1,
        duration: 31
      });
    }
    this.updateSplitSet(activeSplitSet);
  }

  changeSplitDate(activeSplitSet: PeriodSplitSet, activeSplit: PeriodSplit, splitId: number, date: string): void {
    const splitIndex = activeSplitSet.splits.indexOf(activeSplitSet.splits.find((split) => split.id === splitId));
    const oldActiveSplitDuration = activeSplit.duration;
    const updatedActiveSplitDuration = moment(activeSplit.date_to).diff(moment(activeSplit.date_from), 'days') + 1;

    if (updatedActiveSplitDuration > 7) {
      activeSplitSet.splits[splitIndex] = {
        name: activeSplit.name,
        date_from: activeSplit.date_from,
        date_to: activeSplit.date_to,
        id: activeSplit.id,
        duration: updatedActiveSplitDuration
      };
      if (date === 'dateFrom' && activeSplitSet.splits[splitIndex - 1]) {
        const previousSplit = activeSplitSet.splits[splitIndex - 1];
        activeSplitSet.splits[splitIndex - 1] = {
          name: previousSplit.name,
          date_from: previousSplit.date_from,
          date_to: moment(activeSplit.date_from, 'DD-MM-YYYY').subtract(1, 'days').toDate(),
          id: previousSplit.id,
          duration: previousSplit.duration - (updatedActiveSplitDuration - oldActiveSplitDuration)
        };
      } else if (date === 'dateTo' && activeSplitSet.splits[splitIndex + 1]) {
        const nextSplit = activeSplitSet.splits[splitIndex + 1];
        activeSplitSet.splits[splitIndex + 1] = {
          name: nextSplit.name,
          date_from: moment(activeSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate(),
          date_to: nextSplit.date_to,
          id: nextSplit.id,
          duration: nextSplit.duration - (updatedActiveSplitDuration - oldActiveSplitDuration)
        };
      }
      this.updateSplitSet(activeSplitSet);
    }
  }

  changeSplitDuration(activeSplitSet: PeriodSplitSet, splitId: number): void {
    const splitIndex = activeSplitSet.splits.indexOf(activeSplitSet.splits.find((split) => split.id === splitId));
    const updatedSplit = activeSplitSet.splits[splitIndex];
    const updateSplitDateTo = moment(updatedSplit.date_from, 'DD-MM-YYYY').add(updatedSplit.duration, 'days').toDate();

    if (updatedSplit.duration > 5) {
      if (activeSplitSet.splits[splitIndex + 1] === undefined) {
        activeSplitSet.splits[splitIndex].date_to = updateSplitDateTo;
      } else {
        activeSplitSet.splits[splitIndex].date_to = updateSplitDateTo;
        activeSplitSet.splits.map((split) => {
          if (activeSplitSet.splits.indexOf(split) > splitIndex) {
            const previousSplit = activeSplitSet.splits[activeSplitSet.splits.indexOf(split) - 1];
            split.date_from = moment(previousSplit.date_to, 'DD-MM-YYYY').add(1, 'days').toDate();
            split.date_to = moment(split.date_from, 'DD-MM-YYYY').add(split.duration, 'days').toDate();
          }
        });
      }
    }
    this.updateSplitSet(activeSplitSet);
  }

  deleteSplit(activeSplitSet: PeriodSplitSet, splitId: number): void {
    const splitIndex = activeSplitSet.splits.indexOf(activeSplitSet.splits.find((split) => split.id === splitId));

    if (activeSplitSet.splits[splitIndex + 1]) {
      activeSplitSet.splits[splitIndex + 1].date_from = activeSplitSet.splits[splitIndex].date_from;
      activeSplitSet.splits[splitIndex + 1].duration += activeSplitSet.splits[splitIndex].duration;
    }
    activeSplitSet.splits.splice(splitIndex, 1);
    this.updateSplitSet(activeSplitSet);
  }

  updateSplitSet(updatedSplitSet: PeriodSplitSet): void {
    const splitId = updatedSplitSet.id;

    this.store.dispatch(new ChangeSplitSet({
      index: splitId,
      splitSet: updatedSplitSet
    }));
  }

  createPeriod(period: PeriodState): Observable<any> {
    this.store.dispatch(new ChangePeriodError({text: null, isOpen: false}));
    const data = this.convertPeriodDataForRequest(period);
    return this.http.post(`${API_URL}/periods`, data, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  updatePeriod(period: PeriodState): Observable<any> {
    this.store.dispatch(new ChangePeriodError({text: null, isOpen: false}));
    const data = this.convertPeriodDataForRequest(period);
    return this.http.put(`${API_URL}/periods/${period.period.id}`, data, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  convertPeriodDataForRequest(period: PeriodState): any {
    const dataSplitSets = [];

    if (period.period.split_sets) {
      period.period.split_sets.map((splitSet) => {
        const splitSetSlits = [];
        splitSet.splits.map((split) => {
          splitSetSlits.push({
            name: split.name,
            date_from: moment(split.date_from).format('YYYY-MM-DD'),
            date_to: moment(split.date_to).format('YYYY-MM-DD')
          });
        });
        dataSplitSets.push({name: splitSet.name, splits: splitSetSlits});
      });
    }

    return {
      name: period.period.name,
      date_from: moment(period.period.date_from).format('YYYY-MM-DD'),
      date_to: moment(period.period.date_to).format('YYYY-MM-DD'),
      split_sets: dataSplitSets
    };
  }

  getPeriods(): Observable<any> {
    this.store.dispatch(new LoadPeriods(true));
    return this.http.get(`${API_URL}/periods`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  deletePeriod(periodId): Observable<any> {
    return this.http.delete(`${API_URL}/periods/${periodId}`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  validatePeriod(period: PeriodState): void {
    const error = [];
    if (!period.period.name) {
      error.push(PeriodErrorEnum.EMPTY_PERIOD_NAME);
    }
    if (!period.period.date_from) {
      error.push(PeriodErrorEnum.EMPTY_PERIOD_DATE_FROM);
    }
    if (!period.period.date_to) {
      error.push(PeriodErrorEnum.EMPTY_PERIOD_DATE_DO);
    }
    this.store.dispatch(new ValidatePeriod(error));
  }

  validateSplitSet(period: PeriodState): void {
    period.period.split_sets.map((splitSet) => {
      const error = [];
      if (splitSet.splits) {
        splitSet.splits.map((split) => {
          if (!split.name) {
            error.push(PeriodErrorEnum.EMPTY_SPLIT_NAME);
          }
          if (!split.date_from) {
            error.push(PeriodErrorEnum.EMPTY_SPLIT_DATE);
          }
          if (!split.date_to) {
            error.push(PeriodErrorEnum.EMPTY_SPLIT_DATE);
          }
          if (!split.duration) {
            error.push(PeriodErrorEnum.EMPTY_SPLIT_DURATION);
          }
        });
      } else if (!!splitSet.splits.length) {
        error.push(PeriodErrorEnum.EMPTY_SPLIT_SET);
      }
      splitSet.error = {text: error, isBarErrorOpen: true, isTableErrorOpen: true};
      this.updateSplitSet(splitSet);
    });
  }

  isError(period: PeriodState): boolean {
    let splitError = false;
    period.period.split_sets.map((splitSet) => {
      if (splitSet.error && splitSet.error.text && !!splitSet.error.text.length) {
        splitError = true;
      }
    });
    return splitError;
  }

  convertGetPeriodResponseToTableData(periods: Period[]): any {
    const periodsData = [];

    periods.map((period) => {
      const splitSetsData = [];
      const splitTypes = [];

      period.split_sets.map((splitSet) => {
        let splitsLength = null;

        if (splitSet.splits && splitSet.splits.length) {
          splitsLength = splitSet.splits.length;
          splitSet.splits.map((split) => {
            split.type = {
              name: splitSet.name + ' ' + splitsLength, color: PeriodService.getSplitTypeColor(period.split_sets.indexOf(splitSet))
            };
          });
        }
        splitSetsData.push({
          name: splitSet.name,
          splits: splitSet.splits,
          id: splitSet.id,
          period_id: period.id,
          isViewed: false,
          type: {name: splitSet.name + ' ' + splitsLength, color: PeriodService.getSplitTypeColor(period.split_sets.indexOf(splitSet))},
          dataTableType: PeriodTableTypeEnum.SPLIT_SET,
        });

        splitTypes.push({
          name: splitSet.name + ' ' + splitsLength, color: PeriodService.getSplitTypeColor(period.split_sets.indexOf(splitSet))
        });
      });

      const periodData = {
        name: period.name,
        date_from: period.date_from,
        date_to: period.date_to,
        dataTableType: PeriodTableTypeEnum.PERIOD,
        period_id: period.id,
        open: false,
        type: splitTypes,
        bkgColor: periods.indexOf(period) % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
        sortingSplitSetParams: {name: null, order: null}
      };

      periodsData.push(periodData);

      periodsData.push(
        {
          dataTableType: PeriodTableTypeEnum.SPLIT_SET,
          splitSets: splitSetsData,
          open: false,
          period_id: period.id,
          isAllSelected: true,
          selectedSplitSetId: null,
        });
    });
    return periodsData;
  }

  convertGetPeriodResponse(periods: Period[]): Period[] {
    periods.map((period) => {
      period.date_to = new Date(period.date_to);
      period.date_from = new Date(period.date_from);
      period.duration = PeriodService.getDuration(period.date_from, period.date_to);
      period.split_sets.map((splitSet) => {
        splitSet.splits.map((split) => {
          split.date_to = new Date(split.date_to);
          split.date_from = new Date(split.date_from);
          split.duration = PeriodService.getDuration(split.date_from, split.date_to);
        });
      });
    });
    return periods;
  }
}
