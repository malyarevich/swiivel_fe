import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Form } from "src/app/models/data-collection/form.model";
import { ApiResponse } from "src/app/models/api-response";
import { FormSearchParams } from "src/app/models/form-search-params";

interface Response {
  status: number;
  data?: any;
  errors?: any[];
}

@Injectable()
export class FormService {
  constructor(private http: HttpClient) {}

  sendForm(form: Form) {
    if (form._id !== "") {
      return this.http
        .put(`/proxy/forms/${form._id}`, form)
        .pipe(map(response => response));
    }
    return this.http.post("/proxy/forms", form).pipe(map(response => response));
  }

  getOneForm(id): Observable<any> {
    return this.http
      .get(`/proxy/form-builder/form-template/${id}`)
      .pipe(map((response: Response) => response.data));
  }

  getOneFormSql(id): Observable<any> {
    return this.http
      .get(`/proxy/templates/${id}`)
      .pipe(map(response => response));
  }

  getFormsList(params?: FormSearchParams): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams().set("params", JSON.stringify(params))
    };
    return this.http.get("/proxy/forms", options).pipe(
      map(response => {
        return response;
      })
    );
  }

  getFormWithPermissions(formId: number | string) {
    return this.http
      .get(`/forms/${formId}/permissions`)
      .pipe(map((res: ApiResponse) => res.data[0]));
  }

  deleteForm(id: string) {
    return this.http
      .delete(`/proxy/forms/${id}`)
      .pipe(map(response => response));
  }

  bulkDeleteForms(ids) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: {
        id: ids
      }
    };
    return this.http
      .delete(`/proxy/forms`, options)
      .pipe(map(response => response));
  }

  changeStatus(ids, status) {
    return this.http
      .post(`/proxy/forms/status`, {
        id: ids,
        status: status
      })
      .pipe(map(response => response));
  }
}
