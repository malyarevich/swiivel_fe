import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: Заменмить тестовый сервер на реальный
const API_URL = 'http://fin.red.dev.codeblue.ventures/api/v1';
const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'Bearer 123'
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
