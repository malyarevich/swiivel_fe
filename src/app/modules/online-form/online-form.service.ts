import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OnlineFormService {

  constructor(private http: HttpClient) { }

  getOneForm(id): Observable<any> {
    return this.http.get(`/proxy/forms/${id}`)
      .pipe(
        map((response) => response)
      );
  }

}
