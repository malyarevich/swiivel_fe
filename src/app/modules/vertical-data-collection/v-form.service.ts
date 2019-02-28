import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Form} from '../data-collection/reducers/forms/form.model';
import {Observable} from 'rxjs';

@Injectable()
export class VFormService{

  constructor(private http: HttpClient) {}

  getCustomList() {
    return this.http.get('/proxy/schema')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getExistingList() {
    return this.http.get('/proxy/mapped')
      .pipe(
        map((response) => {return response;})
      );
  }

  sendForm(form:Form) {

    if(form._id!=="0"){
      return this.http.put(`/proxy/forms/${form._id}`, form)
        .pipe(
          map((response) =>  response)
        );
    }
    return this.http.post('/proxy/forms', form)
      .pipe(
        map((response) => response)
      );

  }

  getOneForm(id): Observable<any> {
    return this.http.get(`/proxy/forms/${id}`)
      .pipe(
        map((response) => response)
      );
  }

  getFormsList(): Observable<any> {
    return this.http.get('/proxy/forms')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  deleteForm(id: string) {
    return this.http.delete(`/proxy/forms/${id}`)
      .pipe(
        map((response) => response)
      );
  }
}
