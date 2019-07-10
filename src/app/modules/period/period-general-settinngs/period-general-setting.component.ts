import { Period } from '../../../models/period/period.model';
import { ChangeDetectionStrategy, Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { Store } from '@ngrx/store';
import { PeriodState } from '../store/period.reducer';
import { Observable } from 'rxjs';
import { ChangePeriod } from '../store/period.actions';
import * as moment from 'moment';

@Component({
  selector: 'app-period-general-setting',
  templateUrl: './period-general-setting.component.html',
  styleUrls: ['./period-general-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class PeriodGeneralSettingComponent implements OnInit {
  periodSubscribe: Observable<PeriodState>;
  period: Period;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor(public store: Store<PeriodState>) {
    console.log(this.store);
    this.periodSubscribe = store.select('state');
    this.periodSubscribe.subscribe(periodStore => {
      this.period = periodStore.period;
      this.dashboard = [
        {
          cols: this.period.duration,
          rows: 1,
          label: this.period.name,
          y: 0,
          x: 0,
          minItemCols: 1,
          maxItemCols: 366
        }
      ];
    });
  }

  onChangePeriod(): void {
    // здесь у нее нет доступа для скоупа самой компоненты - нужно придумать, как из компоненты диспачить
    // имя: дашборд[0].лабел
    // date_from : начальная дата + x
    // date_to : начальная дата + х + колоночки
    // duration : колоночки
    // console.log(this.store);
    // this.store.dispatch(new ChangePeriod({
    //     name: this.dashboard[0].label,
    //     date_from: moment(this.selectPeriod.date_from, 'DD-MM-YYYY').add(this.dashboard[0].x, 'days').toDate(),
    //     date_to: moment(this.selectPeriod.date_to, 'DD-MM-YYYY').add(this.dashboard[0].x + this.dashboard[0].cols, 'days').toDate(),
    //     duration: this.dashboard[0].cols
    //   }
    // ));
    // console.log('change');
  }

  ngOnInit() {

    this.options = {
      gridType: GridType.Fixed,
      displayGrid: DisplayGrid.Always,
      fixedColWidth: 2,
      fixedRowHeight: 20,
      mobileBreakpoint: 340,
      itemChangeCallback: PeriodGeneralSettingComponent.prototype.onChangePeriod,
      minCols: 10,
      minRows: 1,
      maxRows: 1,
      pushItems: false,
      disableScrollVertical: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
        handles: {
          s: false,
          e: true,
          n: false,
          w: true,
          se: false,
          ne: false,
          sw: false,
          nw: false
        },
      }
    };

  }

}

