import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SystemSignatureService {
  constructor(private http: HttpClient) {}

  sign(
    formId: string,
    personId: number,
    entity: string,
    entityId: string | number | null = null
  ) {
    const data = {
      api_token: `${environment.apiToken}`,
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
