import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class FormsStatsService {
  constructor(private http: HttpClient) {}

  getViewsRate() {
    return this.http
      .get(`/proxy/stats/forms/views`)
      .pipe(map(response => response));
  }

  getSubmissionsRate() {
    return this.http
      .get(`/proxy/stats/forms/submissions`)
      .pipe(map(response => response));
  }

  getInvitesRate() {
    return this.http
      .get(`/proxy/stats/forms/invites`)
      .pipe(map(response => response));
  }
}
