import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeriodState } from '../store/period.reducer';
import { Store } from '@ngrx/store';

// todo: сюда нужно вынести обезрваблы, чтобы на них из компонет можно было попдписываться
@Injectable()
export class PeriodService {

    constructor(private readonly http: HttpClient, public store: Store<PeriodState>) {
    }

    // getPeriods(): Observable<any> {
    //   return this.http.get('/period').pipe(
    //     map((response) => response)
    //   );
    // }

    // getPeriod(): Observable<any> {
    //   return store.select('state');
    // }

}
