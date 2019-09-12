import {Injectable} from '@angular/core';
import {HttpService} from '@app/core/http.service';
import {ApiResponse, LoginData} from '@models/api';
import {FormSearchParams} from '@models/form-search-params';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';

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

  constructor(private http: HttpService) {}

  getFormsList(requestParams?: FormSearchParams): Observable<any> {

    const options = {
      body: {
        params: requestParams
      }
    };

    return this.http.post(`/proxy/form-builder/form-templates`, options).pipe(
      map(response => {
        return response;
      })
    );
  }

  archiveForms(archivedIds: number[]): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/archived`, { ids: archivedIds })
      .pipe(map(response => {
        if (response.status === 1) {
          return response.data;
        }
        throwError('Archive form error');
      })
    );
  }
}

