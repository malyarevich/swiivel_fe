import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { ApiResponse, LoginData } from '@models/api-response';
import { FormSearchParams } from '@models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(protected http: HttpService) {}

  public login(data: LoginData): any {
    return this.http.post('/login', {...data});
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

  getSidebarFields() {
    return this.http.get('/proxy/sidebar-fields');
  }

  getFormsList(requestParams?: FormSearchParams): Observable<any> {
    if (!requestParams) requestParams = {page: 1, limit: 150};
    let params = new HttpParams();
    if ('filter' in requestParams) {
      for (const filter of Object.keys(requestParams.filter)) {
        params = params.append(`filter[${filter}]`, requestParams.filter[filter]);
      }
    }
    if ('sort' in requestParams) {
      params = params.append(`sort[${requestParams.sort['field']}]`, requestParams.sort['order']);
    }
    if ('page' in requestParams) {
      params = params.append('page', requestParams.page.toString());
    }
    if ('limit' in requestParams) {
      params = params.append('limit', requestParams.limit.toString());
    }
    return this.http.get(`/proxy/form-builder/form-templates`, {params});
  }

  getFormsShortList(type: string = 'registration'): Observable<any> {
    return this.http.get(`/proxy/form-builder/form-templates/short/${type}`);
  }

  getFormTemplate(mongoId: string) {
    return this.http.get(`/proxy/form-builder/form-template/${mongoId}`);
  }

  updateFormTemplate(mongoId: string, form) {
    return this.http.put(`/proxy/form-builder/form-template/${mongoId}`, form);
  }

  saveNewForm(form: any) {
    return this.http.post('/proxy/form-builder/form-template', form);
  }

  updateGeneralForm(form: any, id: string) {
    return this.http.put(`/proxy/form-builder/form-template/${ id }`, form);
  }

  public download(url: string) {
    return this.http.getFile(url)
  }
}
