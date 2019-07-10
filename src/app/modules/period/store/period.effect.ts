import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PeriodState } from './period.reducer';
import { Store } from '@ngrx/store';
import { PeriodService } from '../services/period.service';

@Injectable()
export class PeriodEffect {
  // @Effect()

  constructor(private actions$: Actions,
              private periodService: PeriodService,
              private periodStore$: Store<PeriodState>) {}

}
