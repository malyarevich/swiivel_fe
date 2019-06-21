import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileAttachmentService {

  constructor(private http: HttpClient) { }

  uploadFile(data): Observable<any>{
    return this.http.post(`file/attach`, data)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
