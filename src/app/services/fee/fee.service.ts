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
export class FeeService {
  constructor(private http: HttpClient) { }

  getPayerFee(payerId): Observable<any> {
    const params = new HttpParams().set('payer_id[]', payerId);

    return this.http.get(`${API_URL}/fees/`, { headers, params })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getRecipientFee(recipientId): Observable<any> {
    const params = new HttpParams().set('recipient_id[]', recipientId);

    return this.http.get(`${API_URL}/fees/`, { headers, params })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
