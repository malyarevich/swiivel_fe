import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://fin.red.dev.codeblue.ventures/api/v1';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 123'
  })
};

@Injectable()
export class PayersService {
  constructor(private http: HttpClient) { }

  getAllPayers(): Observable<any> {
    return this.http.get(`${API_URL}/payers`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getPayer(id): Observable<any> {
    return this.http.get(`${API_URL}/payers/${id}`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  addPayerAccount(data) {
    return this.http.post(`${API_URL}/payers`, data, httpOptions)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }
}
