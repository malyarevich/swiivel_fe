import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class SystemSignatureService {

  constructor(private http: HttpClient) {
  }

  sign(formId, personId) {

    let data = {
      api_token: `${environment.api_token}`,
      formId,
      personId,
    };

    return this.http.post(`${environment.apiFB}/sign`, data)
      .pipe(
        map((response) => response)
      );
  }

}
