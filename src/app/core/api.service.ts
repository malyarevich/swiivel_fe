import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { ApiResponse, LoginData } from '@models/api';
import { FormSearchParams } from '@models/form-search-params';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(protected http: HttpService) {}

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

export class DataCollectionService extends ApiService {
  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    return this.http
      .post(`/proxy/form-builder/form-templates`, {
        params: requestParams
      })
      .pipe(
        map(response => response.data)
      );
  }

  exportPDFForm(mongoId: string): Observable<any> {
    return this.http.get(
      `/proxy/form-builder/pdf-export/${mongoId}`,
      {responseType: 'blob'})
      .pipe(
        map(response => {
          const downloadURL = window.URL.createObjectURL(new Blob([response], {type: 'application/pdf'}));
          const link = document.createElement('a');

          link.href = downloadURL;
          link.download = `form-${mongoId}.pdf`;
          link.click();
        })
      );
  }
}
