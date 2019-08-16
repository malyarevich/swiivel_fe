import {Component, OnDestroy, OnInit} from '@angular/core';
import { PeriodState } from './store/period.reducer';
import { Store } from '@ngrx/store';
import { GetPeriodsRequest } from './store/period.actions';
import { Period } from '../../models/period/period.model';
import { Subscription } from 'rxjs';
import { PeriodService } from './services/period.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})

export class PeriodComponent implements OnInit, OnDestroy  {
  public periods: Period[] = [];
  private subscription = new Subscription();

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
    },
    {
      id: 'date_from',
      title: 'SPLIT START',
      sort: true,
    },
    {
      id: 'duration',
      title: 'DURATION',
      sort: true,
    },
    {
      id: 'date_to',
      title: 'SPLIT END',
      sort: true,
    },
    {
      id: 'type',
      title: 'SPLIT TYPES',
      sort: true,
    },
    {
    }
  ];

  constructor(public store: Store<PeriodState>, public periodService: PeriodService) {
    this.subscription = this.periodService.getPeriodStore().subscribe((periodStore) => {
      this.periods = periodStore.periods;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPeriodsRequest());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
