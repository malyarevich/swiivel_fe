import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: Замен ть тестовый сервер на реальный
const API_URL = 'http://fin.red.dev.codeblue.ventures/api/v1';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 123'
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

  getPayer(id): Observable<any> {
    return this.http.get(`${API_URL}/person/${id}`, httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
