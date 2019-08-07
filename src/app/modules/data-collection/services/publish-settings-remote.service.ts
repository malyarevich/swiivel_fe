import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  IAutomation,
  IAutomationTemplateListItem,
  IAutomationLogicListItem,
  IData
} from "../model/publish-settings.model";

@Injectable()
export class PublishSettingsRemoteService {
  constructor(private http: HttpClient) {}


  getOneData(id: string): Observable<any> {
    return this.http.get(`/proxy/forms/publish-settings/${id}`).pipe(
      map(
        (response): IAutomation => {
          return response["data"];
        }
      )
    );
  }

  sendData(data: IData, id: string) {
    // console.log( JSON.stringify(data));
    return this.http
      .post(`/proxy/forms/publish-settings/${id}`, data)
      .pipe(map(response => response));
  }

  /** Get / Put / Post of the Automation
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

  sendAutomation(automation: IAutomation, id: string) {
    console.log( JSON.stringify(automation));
    if (id !== undefined) {
      return this.http
        .put(`/proxy/forms/publish-settings/${id}`, automation)
        .pipe(map(response => response));
    }
    console.log(automation);
    return this.http
      .post("/proxy/forms/publish-settings/", automation)
      .pipe(map(response => response));
  }

  getOneAutomation(id: string): Observable<any> {
    return this.http.get(`/proxy/forms/publish-settings/${id}`).pipe(
      map(
        (response): IAutomation => {
          return response["data"]["automation"];
        }
      )
    );
  }


  /** Template CRUD */
  sendAutomationTemplate(automationTemplate: IAutomationTemplateListItem) {
    if (automationTemplate.id !== undefined) {
      return this.http
        .put(
          `/proxy/automation/template/${automationTemplate.id}`,
          automationTemplate
        )
        .pipe(map(response => response));
    }
    return this.http
      .post("/proxy/automation/template/", automationTemplate)
      .pipe(map(response => response));
  }

  // FIXME:
  // getOneAutomationTemplate(id: string): Observable<any> {
  //   return this.http.get(`/proxy/automation/template/${id}`).pipe(
  //     map(
  //       (response): IAutomation => {
  //         return response["data"]["automation"];
  //       }
  //     )
  //   );
  // }

  deleteOneAutomationTemplate(id: string): Observable<any> {
    return this.http
      .delete(`/proxy/automation/template/${id}`)
      .pipe(map(response => response));
  }

  /** Logic CRUD */
  sendAutomationLogic(automationLogic: IAutomationLogicListItem) {
    if (automationLogic.id !== undefined) {
      return this.http
        .put(`/proxy/automation/logic/${automationLogic.id}`, automationLogic)
        .pipe(map(response => response));
    }
    return this.http
      .post("/proxy/automation/logic/", automationLogic)
      .pipe(map(response => response));
  }

  // // FIXME:
  // getOneAutomationLogic(id: string): Observable<any> {
  //   return this.http.get(`/proxy/automation/logic/${id}`).pipe(
  //     map(
  //       (response): IAutomation => {
  //         return response["data"]["automation"];
  //       }
  //     )
  //   );
  // }

  deleteOneAutomationLogic(id: string): Observable<any> {
    return this.http
      .delete(`/proxy/automation/logic/${id}`)
      .pipe(map(response => response));
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
}


