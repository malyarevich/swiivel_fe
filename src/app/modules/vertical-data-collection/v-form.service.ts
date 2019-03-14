import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Form} from './model/form.model';
import {Observable} from 'rxjs';
import {ApiResponse} from "../../models/api-response";

@Injectable()
export class VFormService{

  constructor(private http: HttpClient) {}


  sendForm(form:Form) {

    if(form._id!==""){
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

    getFormWithPermissions(formId: number | string) {
        return this.http.get(`/forms/${formId}/permissions`).pipe(
            map((res: ApiResponse) => res.data[0])
        );
    }

  deleteForm(id: string) {
    return this.http.delete(`/proxy/forms/${id}`)
      .pipe(
        map((response) => response)
      );
  }
}
