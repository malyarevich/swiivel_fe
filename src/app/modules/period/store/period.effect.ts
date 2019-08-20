import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  ChangePeriodError,
  CreatePeriodRequest,
  GetPeriodsRequest,
  GetPeriodsResponse,
  PeriodActionTypes
} from './period.actions';
import { PeriodService } from '../services/period.service';

@Injectable()
export class PeriodEffect {

  constructor(private actions$: Actions,
              private periodService: PeriodService) {}

  @Effect() createPeriod$: Observable<Action> = this.actions$
    .pipe(
      ofType<CreatePeriodRequest>(PeriodActionTypes.CreatePeriodRequest),
      mergeMap((action) => {
        return this.periodService.createPeriod(action.payload).pipe(
          map( res => new ChangePeriodError({ text: null, isOpen: false })),
          catchError(err => {
            console.log('error saving period', err);
            throwError(err);
            return of(new ChangePeriodError({ text: err.error.errors, isOpen: true }));
          })
        );
      }),
    );

  @Effect() getPeriods$: Observable<Action> = this.actions$
    .pipe(
      ofType<GetPeriodsRequest>(PeriodActionTypes.GetPeriodsRequest),
      switchMap(() => {
        return this.periodService.getPeriods();
      }),
      map( res => {
        console.log(res);
        // this.periodService.convertGetPeriodResponse(res);
        return new GetPeriodsResponse(res);
      }),
      catchError(err => {
        console.log('error periods request', err);
        return throwError(err);
      })
    );

  // @Effect() openCreatePeriodPage: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<OpenCreatePeriodPage>(PeriodActionTypes.OpenCreatePeriodPage),
  //     switchMap(() => {
  //       return this.periodService.getPeriods();
  //     }),
  //     map( res => new GetPeriodsResponse(res)),
  //     catchError(err => {
  //       console.log('error periods request', err);
  //       return throwError(err);
  //     })
  //   );
}

