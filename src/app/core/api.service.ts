import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/http.service';
import { DateService } from '@app/services/date.service';
import { ApiResponse, LoginData } from '@models/api';
import { FormSearchParams } from '@models/form-search-params';
import { Observable, throwError } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    protected http: HttpService,
    public dateService: DateService
  ) { }

  public login(data: LoginData): any {
    return this.http.post('/login', { ...data });
  }

  forgotPassword(email: string) {
    return this.http.post('/forgot-password', { email });
  }

  resetPassword(token: string, newPassword: object) {
    return this.http.post('/reset-password', { token, newPassword });
  }

  signin(email: string, password: string, uuid: string) {
    return this.http.post('/sign-in', { email, password, uuid });
  }

  getSidebarFields() {
    return this.http.get('/proxy/sidebar-fields');
  }

  getMappedFields() {
    return this.http.get('/proxy/mapped');
  }

  getCustomFields() {
    return this.http.get('/proxy/schema');
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
        } else if (filter === 'createdAt') {
          if (requestParams.filter[filter]['startDate'] && requestParams.filter[filter]['startDate'].date) {
            params = params.append(
              `filter[${filter}][startDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['startDate'].date));
          }
          if (requestParams.filter[filter].endDate && requestParams.filter[filter].endDate.date) {
            params = params.append(
              `filter[${filter}][endDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['endDate'].date));
          } else {
            params = params.append(
              `filter[${filter}][endDate]`,
              this.dateService.getStandardDate(requestParams.filter[filter]['startDate'].date));
          }
        } else if (filter === 'access') {
          requestParams.filter[filter].forEach((item) => {
            params = params.append(`filter[${filter}][]`, item.id);
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
    if (!id && !form._id) {
      return throwError(`No id`);
    } else if (!id) {
      id = form._id;
    }
    return this.http.put(`/proxy/form-builder/form-template/${id}`, form);
  }

  // FORM SEND

  getFormSend(formId: string) {
    return this.http.get(`/proxy/form-builder/release/${formId}`);
  }

  getMailingHouseList() {
    return this.http.get(`/proxy/form-builder/mailing-house-list`);
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
    const fbLink = environment.apiFB;
    const opt = {
      body: file
    };
    return this.http.request('POST', `${fbLink}/forms/attach/${formId}?api_token=${environment.apiToken}`, opt);
  }

  uploadFormPDF(file) {
    const fbLibk = environment.apiFB;
    const params = new HttpParams().set("api_token", environment.apiToken).set('formName' , 'first form').set('type' ,'new form');
    const opt = {
      body: file,
      params
    }
    return this.http.request('POST', `${fbLibk}/pdfForms`, opt);
  }

  getFormsPDFList(): Observable<any> {
    const fbLibk = environment.apiFB;
    return this.http.request('get', `${fbLibk}/pdfForms?api_token=${environment.apiToken}`);
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
