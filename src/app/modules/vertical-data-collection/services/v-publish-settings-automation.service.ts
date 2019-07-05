import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Form } from "../model/form.model";
import { Observable } from "rxjs";
import { ApiResponse } from "../../../models/api-response";
import { FormSearchParams } from "../../../models/form-search-params";
import { IAutomationList, IAutomationTemplate } from '../model/publish-settings.model';

@Injectable()
export class VPublishSettingsAutomationService {
  constructor(private http: HttpClient) {}

  /** Get / Put / Post of the AutomationList
   * get: 
  {
  	"automation_list": [
      {
        "id":           "1"
        "name":         "Automation first",
        "type_id":      2,
        "template_id":  2,
        "logics":       [1,2]
      }
    ]
  }
   * put: 
  {
  	"automation_list": [
      {
        "id":           "1"
        "name":         "Automation first",
        "type_id":      2,
        "template_id":  2,
        "logics":       [1,2]
      }
    ]
  }
   * post:
  
  {
  	"automation_list": [
      {
        "name":         "Automation first",
        "type_id":      2,
        "template_id":  2,
        "logics":       [1,2]
      }
    ]
  }
   * 
   */

  sendAutomationList(automationList: IAutomationList) {
    if (automationList.id !== undefined) {
      return this.http
        .put(`/proxy/forms/public-settings/${automationList.id}`, automationList)
        .pipe(map(response => response));
    }
    return this.http.post("/proxy/forms/public-settings/", automationList).pipe(map(response => response));
  }

  getOneAutomationList(id: string): Observable<any> {
    return this.http.get(`/proxy/forms/public-settings/${id}`).pipe(map(response => response));
  }

  /** Template CRUD */


  // sendAutomationTemplate(automationTemplate: IAutomationTemplate) {
  //   if (automationTemplate.id !== undefined) {
  //     return this.http
  //       .put(`/proxy/forms/public-settings/${automationTemplate.id}`, automationTemplate)
  //       .pipe(map(response => response));
  //   }
  //   return this.http.post("/proxy/forms/public-settings/", automationTemplate).pipe(map(response => response));
  // }

  // getFormsList(params?: FormSearchParams): Observable<any> {
  //   const options = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     }),
  //     params: new HttpParams().set("params", JSON.stringify(params))
  //   };
  //   return this.http.get("/proxy/forms", options).pipe(
  //     map(response => {
  //       return response;
  //     })
  //   );
  // }
  
  // /** Logic CRUD */
  
  // getFormWithPermissions(formId: number | string) {
  //   return this.http
  //     .get(`/forms/${formId}/permissions`)
  //     .pipe(map((res: ApiResponse) => res.data[0]));
  // }

  // deleteForm(id: string) {
  //   return this.http
  //     .delete(`/proxy/forms/${id}`)
  //     .pipe(map(response => response));
  // }

  // bulkDeleteForms(ids) {
  //   const options = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     }),
  //     body: {
  //       id: ids
  //     }
  //   };
  //   return this.http
  //     .delete(`/proxy/forms`, options)
  //     .pipe(map(response => response));
  // }

  // changeStatus(ids, status) {
  //   return this.http
  //     .post(`/proxy/forms/status`, {
  //       id: ids,
  //       status: status
  //     })
  //     .pipe(map(response => response));
  // }
}
