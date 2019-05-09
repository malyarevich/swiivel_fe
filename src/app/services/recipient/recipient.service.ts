import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiFinanceCore;
const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  Authorization: environment.apiFinanceToken,
});

@Injectable()
export class RecipientService {
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    const params = new HttpParams().set('type', 'Student');

    return this.http.get(`${API_URL}/recipients/`, { headers, params })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
