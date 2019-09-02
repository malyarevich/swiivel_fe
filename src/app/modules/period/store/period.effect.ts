import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import {
  ChangePeriodError,
  CreatePeriodRequest, DeletePeriod,
  GetPeriodsRequest,
  GetPeriodsResponse, LoadPeriods,
  PeriodActionTypes, UpdateExistingPeriodRequest
} from './period.actions';
import { PeriodService } from '../services/period.service';
import { Router } from '@angular/router';

@Injectable()
export class PeriodEffect {

  constructor(private actions$: Actions,
              private periodService: PeriodService,
              public router: Router) {}

  @Effect() createPeriod$: Observable<Action> = this.actions$
    .pipe(
      ofType<CreatePeriodRequest>(PeriodActionTypes.CreatePeriodRequest),
      mergeMap((action) => {
        return this.periodService.createPeriod(action.payload).pipe(
          map( res => {
            this.router.navigate(['/period']);
            return new ChangePeriodError({text: null, isOpen: false});
          }),
          catchError(err => {
            console.log('error saving period', err);
            throwError(err);
            return of(new ChangePeriodError({ text: err.error.errors, isOpen: true }));
          })
        );
      }),
    );

  @Effect() updatePeriod: Observable<Action> = this.actions$
    .pipe(
      ofType<UpdateExistingPeriodRequest>(PeriodActionTypes.UpdateExistingPeriodRequest),
      mergeMap((action) => {
        return this.periodService.updatePeriod(action.payload).pipe(
          map( res => {
            this.router.navigate(['/period']);
            return new ChangePeriodError({ text: null, isOpen: false });
          }),
          catchError(err => {
            console.log('error update period', err);
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
      switchMap( res => {
        return [new LoadPeriods(false), new GetPeriodsResponse(this.periodService.convertGetPeriodResponse(res.data.periods))];
      }),
      catchError(err => {
        console.log('error periods request', err);
        throwError(err);
        return of(new LoadPeriods(false));
      })
    );

  @Effect() deletePeriod: Observable<Action> = this.actions$
    .pipe(
      ofType<DeletePeriod>(PeriodActionTypes.DeletePeriod),
      mergeMap((action) => {
        return this.periodService.deletePeriod(action.payload).pipe(
          map( res => new GetPeriodsRequest()),
          catchError(err => {
            console.log('error delete period', err);
            return throwError(err);
          })
        );
      }),
    );
}

