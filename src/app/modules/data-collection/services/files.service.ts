import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }


  params = new HttpParams().set("api_token", environment.api_token);


  // getFilesListAll(): Observable<any>{
  //   return this.http.get(`${environment.apiFB}/forms/attach?api_token=${environment.api_token}`)
  //     .pipe(
  //       map(response => response)
  //     )
  // }

  uploadFile(formId: string, file: any): Observable<any>{
    return this.http.post(`${environment.apiFB}/forms/attach/${formId}`, file, {params: this.params})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getFormsPDFList():Observable<any>{
    return this.http.get(`${environment.apiFB}/pdfForms?api_token=${environment.api_token}`)
      .pipe(
        map(response => response)
      )
  }

  uploadFormPDF(file: any): Observable<any>{
    let params = this.params.set('formName' , 'first form').set( 'type' ,'new form');
    return this.http.post(`${environment.apiFB}/pdfForms`, file, {params: params})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

}
