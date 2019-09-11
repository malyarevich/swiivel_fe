import {Injectable} from '@angular/core';
import {HttpService} from '@app/core/http.service';
import {ApiResponse, LoginData} from '@models/api';
import {FormSearchParams} from '@models/form-search-params';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = 'http://red.dev.codeblue.ventures/api/v1';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpService) {}

  public login(data: LoginData): any {
    return this.http.post('/login', {...data}).pipe(
      map((response: ApiResponse) => {
        if (response.status === 1) { return response.data; }
      })
    );
  }
  forgotPassword(email: string) {
    return this.http.post('/forgot-password', { email });
  }

  resetPassword(token: string, new_password: object) {
    return this.http.post('/reset-password', { token, new_password });
  }

  signin(email: string, password: string, uuid: string) {
    return this.http.post('/sign-in', { email, password, uuid });
  }
}


export class DataCollectionService {

  constructor(private http: HttpClient) {}

  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    const options = {
      body: {
        params: requestParams
      }
    };

    return this.http.post(`${API_URL}/proxy/form-builder/form-templates`, options, {
      headers: new HttpHeaders({
        'x-access-token': JSON.parse(localStorage.getItem('user')).access_token,
        'Content-Type': 'application/json',
      })}).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

}
