import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../../../environments/environment";

@Injectable()
export class SystemSignatureService {
  constructor(private http: HttpClient) {}

  sign(
    formId: string,
    personId: number,
    entity: string,
    entityId: string | number | null = null
  ) {
    let data = {
      api_token: `${environment.api_token}`,
      formId,
      personId,
      entity,
      entityId
    };

    return this.http
      .post(`${environment.apiFB}/sign`, data)
      .pipe(map(response => response));
  }
}
