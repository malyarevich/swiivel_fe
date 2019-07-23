import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// todo: сюда нужно вынести обезрваблы, чтобы на них из компонет можно было попдписываться
@Injectable()
export class PeriodService {

    constructor(private readonly http: HttpClient) {
    }

    getPeriods(): Observable<any> {
      return this.http.get('/period').pipe(
        map((response) => response)
      );
    }

}
