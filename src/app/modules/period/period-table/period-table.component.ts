import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Period, PeriodSplit } from 'src/app/models/period/period.model';
import { PeriodService } from '@modules/period/services/period.service';
import { PeriodTableTypeEnum } from '@modules/period/period-table-type.enum';

@Component({
  selector: 'app-period-table',
  templateUrl: './period-table.component.html',
  styleUrls: ['./period-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PeriodTableComponent implements OnInit, OnChanges {
  @Input() periods: Period[];
  // public periodsData: Array<PeriodTable | SplitSetTable> = [];
  public periodsData = [];
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
      sort: true,
      search: true,
      width: '26%'
    },
    {
      width: '30%'
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
      sort: true,
      width: '51%'
    }
  ];

  constructor(public periodService: PeriodService) {
  }

  ngOnInit(): void {
    this.periodsData = this.periodService.convertGetPeriodResponse(this.periods);
  }

  ngOnChanges(): void {
    this.periodsData = this.periodService.convertGetPeriodResponse(this.periods);
    console.log(this.getSplits(1));
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
      }
    });
  }

  selectSplitSet(splitSetId: number, periodId: number): void {
    this.periodsData.map((period) => {
      if (period.period_id === periodId) {
        period.isAllSelected = false;
        period.selectedSplitSetId = splitSetId;
      }
    });
  }

  getSplits(periodId: number): PeriodSplit[] {
    // todo: добавить сплит тайп
    let returnValue = [];
    this.periodsData.map((period) => {
      if (period.period_id === periodId && period.dataTableType === PeriodTableTypeEnum.SPLIT_SET) {
        if (period.isAllSelected) {
          period.splitSets.map((item) => {
            // console.log(item.splits);
            // returnValue.push(item.splits);
          });
        } else {
          period.splitSets.map((item) => {
            if (item.split_set_id === period.selectedSplitSetId) {
              returnValue = item.splits;
            }
          });
        }
      }
    });
    return returnValue;
  }

}
