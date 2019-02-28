import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Form} from './reducers/forms/form.model';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  emitChanges:EventEmitter<any> = new EventEmitter();
  emitSettings:EventEmitter<any> = new EventEmitter();

  params = new HttpParams().set('api_token', environment.api_token);


  SERVER_URL = environment.api;
  form: Form ;


  constructor(private http: HttpClient) {
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


  getFormsList(): Observable<any> {
    return this.http.get('/proxy/forms')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }


  getOneForm(id): Observable<any> {
    return this.http.get(`/proxy/forms/${id}`)
      .pipe(
        map((response) => response)
      );
  }
  deleteForm(id: string) {
   return this.http.delete(`/proxy/forms/${id}`)
       .pipe(
         map((response) => response)
       );
  }



  doFieldChanges(): any{
    this.emitChanges.emit();
  }
  doFieldSettings(): any{
    this.emitSettings.emit();
  }
}
