import {Injectable, OnInit, Type} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Form} from '../data-collection/reducers/forms/form.model';
import {Field} from '../data-collection/reducers/field/field.model';
import {Observable} from 'rxjs';

@Injectable()
export class VFormService{

  SERVER_URL = environment.api;


  params = new HttpParams().set('api_token', environment.api_token);

  constructor(private http: HttpClient) {}

  getCustomList() {
    return this.http.get(this.SERVER_URL+'/schema', {params: this.params})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getExistingList() {
    return this.http.get(this.SERVER_URL+'/mapped', {params: this.params})
      .pipe(
        map((response) => {return response;})
      );
  }

  sendForm(form:Form) {

    if(form._id!=="0"){
      return this.http.post(this.SERVER_URL+'/forms/'+form._id, form, {params: this.params})
        .pipe(
          map((response) =>  response)
        );
    }
    return this.http.put(this.SERVER_URL + '/forms', form, {params: this.params})
      .pipe(
        map((response) => response)
      );

  }

  getOneForm(id): Observable<any> {
    return this.http.get(this.SERVER_URL+'/forms/'+id ,{params: this.params})
      .pipe(
        map((response) => response)
      );
  }



}
