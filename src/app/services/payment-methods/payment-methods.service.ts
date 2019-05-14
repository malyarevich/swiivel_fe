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
export class PaymentMethodsService {
  constructor(private http: HttpClient) { }

  getPaymentMethodsForPayerAccount(id: number): Observable<any> {
    return this.http.get(`${API_URL}/payment-methods/${id}`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
