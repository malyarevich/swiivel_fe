import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileAttachmentService {

  constructor(private http: HttpClient) { }

  upload(data): Observable<any>{
    return this.http.post(`file/attach`, data)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getDownloadLink(link): Observable<any> {
    return this.http.get(link)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  delete(link): Observable<any> {
    return this.http.delete(link)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getByFamilyId(familyId: string) {
    return this.http.get(`file/attach/family/${familyId}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
