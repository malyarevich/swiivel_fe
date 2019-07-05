import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Form } from "../model/form.model";
import { Observable } from "rxjs";
import { ApiResponse } from "../../../models/api-response";
import { FormSearchParams } from "../../../models/form-search-params";
import { IAutomationList, IAutomationTemplate, IAutomationLogic } from '../model/publish-settings.model';

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

  sendAutomationList(automationList: IAutomationList, id: string) {
    if (id !== undefined) {
      return this.http
        .put(`/proxy/forms/public-settings/${id}`, automationList)
        .pipe(map(response => response));
    }
    return this.http.post("/proxy/forms/public-settings/", automationList).pipe(map(response => response));
  }

  getOneAutomationList(id: string): Observable<any> {
    return this.http.get(`/proxy/forms/public-settings/${id}`).pipe(map(response => response));
  }

  /** Template CRUD */
  sendAutomationTemplate(automationTemplate: IAutomationTemplate) {
    if (automationTemplate.id !== undefined) {
      return this.http
        .put(`/proxy/automation/template/${automationTemplate.id}`, automationTemplate)
        .pipe(map(response => response));
    }
    return this.http.post("/proxy/automation/template/", automationTemplate).pipe(map(response => response));
  }
  
  // FIXME:
  // getOneAutomationTemplate(id: string): Observable<any> {
  //   return this.http.get(`/proxy/automation/template/${id}`).pipe(map(response => response));
  // }

  deleteOneAutomationTemplate(id: string): Observable<any> {
    return this.http.delete(`/proxy/automation/template/${id}`).pipe(map(response => response));
  }
  
  /** Logic CRUD */
  sendAutomationLogic(automationLogic: IAutomationLogic) {
    if (automationLogic.id !== undefined) {
      return this.http
        .put(`/proxy/automation/logic/${automationLogic.id}`, automationLogic)
        .pipe(map(response => response));
    }
    return this.http.post("/proxy/automation/logic/", automationLogic).pipe(map(response => response));
  }
  
  // FIXME:
  // getOneAutomationLogic(id: string): Observable<any> {
  //   return this.http.get(`/proxy/automation/logic/${id}`).pipe(map(response => response));
  // }

  deleteOneAutomationLogic(id: string): Observable<any> {
    return this.http.delete(`/proxy/automation/logic/${id}`).pipe(map(response => response));
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////
}
