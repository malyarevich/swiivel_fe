import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as moment from 'moment';

import {SortService} from '@app/shared/services/sort/sort.service';

import {Period, PeriodSplit, PeriodTable} from 'src/app/models/period/period.model';

import {PeriodService} from '@modules/period/services/period.service';
import {PeriodTableTypeEnum} from '@modules/period/period-table-type.enum';
import {ChangeEditPeriodId, DeletePeriod} from '@modules/period/store/period.actions';
import {PeriodState} from '@modules/period/store/period.state';

interface OnSearchParamModel {
  name: string;
  date_from: string;
  date_to: string;
  duration: string;
  type: string;
}

@Component({
  selector: 'app-period-table',
  templateUrl: './period-table.component.html',
  styleUrls: ['./period-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PeriodTableComponent implements OnInit, OnChanges {
  @Input() periods: Period[] | null;
  @Input() isLoading: boolean;
  public isPopupShown: boolean = false;
  public deletePeriodId: number = null;
  public periodsData = [];
  public purePeriodData = [];
  public onSearchParam: OnSearchParamModel = { name: null, date_from: null, date_to: null, duration: null, type: null };

  public periodTableColumns = [
    {
      id: 'name',
      title: 'NAME',
      sort: true,
      search: true,
      width: '20%'
    },
    {
      id: 'date_from',
      title: 'PERIOD START',
      sort: true,
      dateSearch: true,
      width: '8%'
    },
    {
      id: 'duration',
      title: 'DURATION',
      sort: true,
      search: true,
      width: '8%'
    },
    {
      id: 'date_to',
      title: 'PERIOD END',
      sort: true,
      dateSearch: true,
      width: '8%'
    },
    {
      id: 'type',
      title: 'SPLIT TYPES',
      search: true,
      width: '26%'
    },
    {
      width: '27%'
    },
    {
      width: '3%'
    }
  ];

  public splitsTableColumns = [
    {
      id: 'name',
      title: 'SPLITS',
      sort: true,
      width: '22%'
    },
    {
      id: 'date_from',
      title: 'SPLIT START',
      sort: true,
      width: '9%'
    },
    {
      id: 'duration',
      title: 'DURATION',
      sort: true,
      width: '9%'
    },
    {
      id: 'date_to',
      title: 'SPLIT END',
      sort: true,
      width: '9%'
    },
    {
      id: 'type',
      title: 'SPLIT TYPES',
      width: '51%',
      sort: true,
    }
  ];

  constructor(
    public store: Store<PeriodState>,
    public periodService: PeriodService,
    public router: Router,
    public sortService: SortService) {
  }

  ngOnInit(): void {
    this.periodsData = this.periodService.convertGetPeriodResponseToTableData(this.periods);
  }

  ngOnChanges(): void {
    this.periodsData = this.periodService.convertGetPeriodResponseToTableData(this.periods);
    this.purePeriodData = this.periodsData;
  }

  onOpenRow(periodId: number): void {
    this.periodsData.map((item) => {
        item.period_id === periodId ? item.open = !item.open : item.open = false;
      }
    );
  }

  selectAll(periodId: number): void {
    this.periodsData.map((period) => {
      if (period.period_id === periodId) {
        period.isAllSelected = true;
        period.selectedSplitSetId = null;
        period.sortingSplitSetParams = null;
      }
    });
  }

  selectSplitSet(splitSetId: number, periodId: number): void {
    this.periodsData.map((period) => {
      if (period.period_id === periodId) {
        period.isAllSelected = false;
        period.selectedSplitSetId = splitSetId;
        period.sortingSplitSetParams = null;
      }
    });
  }

  getSplits(periodId: number): PeriodSplit[] {
    let returnValue = [];
    this.periodsData.map((period) => {
      if (period.period_id === periodId && period.dataTableType === PeriodTableTypeEnum.SPLIT_SET) {
        if (period.isAllSelected) {
          period.splitSets.map((item) => {
            if (returnValue && returnValue.length) {
              returnValue = returnValue.concat(item.splits);
            } else {
              returnValue = item.splits ;
            }
          });
        } else {
          period.splitSets.map((item) => {
            if (item.id === period.selectedSplitSetId) {
              returnValue = item.splits;
            }
          });
        }
        if (period.sortingSplitSetParams && period.sortingSplitSetParams.order && period.sortingSplitSetParams.name) {
          if (period.sortingSplitSetParams.order === 'DESC') {
            returnValue.sort((referenceSplit, compareSplit) => {
              if (period.sortingSplitSetParams.name === 'name') {
                return SortService.nameDescCompare(referenceSplit, compareSplit);
              } else if (period.sortingSplitSetParams.name === 'type') {
                return referenceSplit[period.sortingSplitSetParams.name].name > compareSplit[period.sortingSplitSetParams.name].name ?
                  1 : -1;
              } else {
                return referenceSplit[period.sortingSplitSetParams.name] > compareSplit[period.sortingSplitSetParams.name] ? 1 : -1;
              }
            });
          } else if (period.sortingSplitSetParams.order === 'ASC') {
            returnValue.sort((referenceSplit, compareSplit) => {
              if (period.sortingSplitSetParams.name === 'name') {
                return SortService.nameAscCompare(referenceSplit, compareSplit);
              } else if (period.sortingSplitSetParams.name === 'type') {
                return referenceSplit[period.sortingSplitSetParams.name].name < compareSplit[period.sortingSplitSetParams.name].name ?
                  1 : -1;
              } else {
                return referenceSplit[period.sortingSplitSetParams.name] < compareSplit[period.sortingSplitSetParams.name] ? 1 : -1;
              }
            });
          }
        }
      }
    });
    return returnValue;
  }

  onSortSplitSet(event: any, periodId: number): void {
    this.periodsData.map((period) => {
        if (period.period_id === periodId) {
          period.sortingSplitSetParams = { name: event.id, order: event.order };
        }
      }
    );
  }

  onSortPeriods(event): void {
    this.periodsData = this.sortService.getComplexSort(
      this.periodsData,
      event,
      PeriodTableTypeEnum.PERIOD,
      'dataTableType',
      'period_id');
  }

  pushItemToFilterValue(filterData: Array<any>, item: PeriodTable): Array<any> {
    filterData.push(item);
    filterData.push(this.purePeriodData[this.purePeriodData.indexOf(item) + 1]);
    return filterData;
  }

  getFilterData(periodsData: any, param: string): any {
    const filterData = [];
    periodsData.map((item) => {
      if (param === 'name' &&
        item.dataTableType === PeriodTableTypeEnum.PERIOD &&
        item[param].toLowerCase().includes(this.onSearchParam[param].toLowerCase())) {
        this.pushItemToFilterValue(filterData, item);
      } else if (param === 'duration' &&
        item.dataTableType === PeriodTableTypeEnum.PERIOD &&
        parseInt(item[param], 10) === parseInt(this.onSearchParam[param], 10)) {
        this.pushItemToFilterValue(filterData, item);
      } else if ((param === 'date_from' || param === 'date_to') &&
        item.dataTableType === PeriodTableTypeEnum.PERIOD &&
        moment(moment(item[param])).isSame(moment(this.onSearchParam[param]), 'day')) {
        this.pushItemToFilterValue(filterData, item);
      } else if (param === 'type' && item.dataTableType === PeriodTableTypeEnum.PERIOD) {
        item.type.map((type) => {
          if (type.name.toLowerCase().includes(this.onSearchParam[param].toLowerCase())) {
            this.pushItemToFilterValue(filterData, item);
          }
        });
      }
    });
    return filterData;
  }

  onSearchPeriod(event): void {
    if (this.onSearchParam.hasOwnProperty(event.name)) {
      event.value ? this.onSearchParam[event.name] = event.value : this.onSearchParam[event.name] = null;
    }
    let filterData = [];

    if (!!Object.values(this.onSearchParam).find((value) => value)) {
      Object.keys(this.onSearchParam).map((param) => {
        if (this.onSearchParam[param]) {
          if (filterData.length) {
            filterData = this.getFilterData(filterData, param);
          } else {
            filterData = this.getFilterData(this.purePeriodData, param);
          }
        }
      });
    } else {
      filterData = this.purePeriodData;
    }
    this.periodsData = filterData;
  }

  onEditPeriod(periodId: number): void {
    this.store.dispatch(new ChangeEditPeriodId(periodId));
    this.router.navigate(['/period/edit']);
  }

  onDeletePeriod(periodId: number): void {
    this.isPopupShown = true;
    this.deletePeriodId = periodId;
  }

  onDeletePeriodAccept(): void {
    this.store.dispatch(new DeletePeriod(this.deletePeriodId));
    this.deletePeriodId = null;
  }

  onCancelDeletePeriod(): void {
    this.isPopupShown = !this.isPopupShown;
    this.deletePeriodId = null;
  }
}
