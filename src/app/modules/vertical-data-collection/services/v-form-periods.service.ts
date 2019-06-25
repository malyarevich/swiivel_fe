import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../../../environments/environment';
import {FinPeriod} from "../../../models/fin-period.model";

interface Response {
  data: {
    periods: [FinPeriod];
    total: number;
  };
  status: number;
  errors: [any];
}

@Injectable()
export class VFormPeriodsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {

    // const API_URL = environment.apiFinanceCore;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': environment.apiFinanceToken,
    // });

    return this.http.get(`/proxy/periods`)
      .pipe(
        map((response: Response) => response.data.periods)
      );
  }
}
