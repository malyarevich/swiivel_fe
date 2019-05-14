import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiFinanceCore;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: environment.apiFinanceToken,
  })
};

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<any> {
    return this.http.get(`${API_URL}/persons`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
