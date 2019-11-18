import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { ApiResponse, LoginData } from '@models/api';
import { FormSearchParams } from '@models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    protected http: HttpService,
  ) { }

  public login(data: LoginData): any {
    return this.http.post('/login', { ...data });
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
    if (!requestParams) {
      requestParams = { page: 1, limit: 150 };
    }

    let params = new HttpParams();

    if ('filter' in requestParams) {
      for (const filter of Object.keys(requestParams.filter)) {
        if (filter === 'status' || filter === 'type') {
          requestParams.filter[filter].forEach((item) => {
            params = params.append(`filter[${filter}][]`, item.value);
          });
        } else {
          params = params.append(`filter[${filter}]`, requestParams.filter[filter]);
        }
      }
    }
    if ('sort' in requestParams) {
      params = params.append(`sort[${requestParams.sort.field}]`, requestParams.sort.order);
    }
    if ('page' in requestParams) {
      params = params.append('page', requestParams.page.toString());
    }
    if ('limit' in requestParams) {
      params = params.append('limit', requestParams.limit.toString());
    }
    return this.http.get(`/proxy/form-builder/form-templates`, { params });
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

  updateGeneralForm(form: any, id?: string) {
    if (!id && !form._id) return throwError(`No id`);
    else if (!id) id = form._id;
    return this.http.put(`/proxy/form-builder/form-template/${id}`, form);
  }

  // FORM SEND

  getFormSend(form_id: string) {
    return this.http.get(`/proxy/form-builder/release/${form_id}`);
  }

  getUsersByRole(key: string) {
    return this.http.get(`/persons/eligible/${key}`);
  }

  createRound(round) {
    return this.http.post(`/proxy/form-builder/release/round`, round);
  }

  update(round, roundId) {
    return this.http.put(`/proxy/form-builder/release/round/${roundId}`, round);
  }

  deleteRound(roundId) {
    return this.http.delete(`/proxy/form-builder/release/round/${roundId}`);
  }

  // FORM SEND END

  uploadFile(formId, file) {
    const fbLibk = environment.apiFB;
    return this.http.request('post', `${fbLibk}/forms/attach/${formId}?api_token=${environment.api_token}`, file);
  }

  getFormsPDFList():Observable<any>{
    const fbLibk = environment.apiFB;
    return this.http.request('get', `${fbLibk}/pdfForms?api_token=${environment.api_token}`);
  }



  public download(url: string) {
    return this.http.getFile(url);
  }

  // FORM

  public changeFormStatus(updatedIds: number[], updatedStatus: string): Observable<any> {
    return this.http.post(`/proxy/form-builder/form-template/status`, { ids: updatedIds, status: updatedStatus });
  }

  public exportFormPDF(mongoId: string) {
    return this.download(`/proxy/form-builder/pdf-export/${mongoId}`).pipe(map((response: any) => {
      return window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
    }), first());
  }
}
