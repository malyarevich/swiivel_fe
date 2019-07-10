import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PeriodService {

    constructor(private readonly http: HttpClient,
    ) {
    }

    getPeriods(): Observable<any> {
      return this.http.get('/period').pipe(
        map((response) => response)
      );
    }

}
