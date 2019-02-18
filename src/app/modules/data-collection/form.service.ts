import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Field} from './reducers/field/field.model';
import {Form} from './reducers/forms/form.model';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  emitChanges:EventEmitter<any> = new EventEmitter();
  emitSettings:EventEmitter<any> = new EventEmitter();

  params = new HttpParams().set('api_token', environment.api_token);
  removeId = new BehaviorSubject('');
  editeId = new BehaviorSubject('');

  SERVER_URL = environment.api;
  form: Form ;
  formName: string = '';


  constructor(private http: HttpClient) {
  }




  editField(id: string){
    this.setEditeId(id);
  }


  sendForm(form:Form) {

    console.log(form);
    if(form._id!=="0"){
      return this.http.post(this.SERVER_URL+'/form/'+form._id, form, {params: this.params})
        .pipe(
          map((response) =>  response)
        );
    }
      return this.http.put(this.SERVER_URL + '/form', form, {params: this.params})
        .pipe(
          map((response) => response)
        );

  }


  getFormsList(): Observable<any> {
    return this.http.get(this.SERVER_URL+'/form' ,{params: this.params})
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }


  getOneForm(id): Observable<any> {
    return this.http.get(this.SERVER_URL+'/form/'+id ,{params: this.params})
      .pipe(
        map((response) => response)
      );
  }
  deleteForm(id: string) {
   return this.http.delete(this.SERVER_URL+`/form/${id}`,  {params: this.params})
       .pipe(
         map((response) => response)
       );
  }




  getRemoveId(): Observable<string> {
    return this.removeId.asObservable();
  }

  setRemoveId(val: string) {
    this.removeId.next(val);
  }

  getEditeId(): Observable<string> {
    return this.editeId.asObservable();
  }

  setEditeId(val: string) {
    this.editeId.next(val);
  }
  clearId(){
    this.editeId.next('');
  }

  getField(id: string): Field{
    return this.form.fields[id];
  }



  doFieldChanges(): any{
    this.emitChanges.emit();
  }
  doFieldSettings(): any{
    this.emitSettings.emit();
  }
}
