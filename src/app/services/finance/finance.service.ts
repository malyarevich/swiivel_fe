import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiResponse, MasterFeesResponse} from "../../models/api-response";

@Injectable()
export class FinanceService {

  constructor(private readonly http: HttpClient) { }

  getAllFeeTemplates(): Observable<any> {
    return this.http.get('/proxy/fee-templates').pipe(
      map((res: ApiResponse) => {
        if(res.status) {
          return res.data;
        }

      })
    );
  }

  getMasterFees(): Observable<any> {
    return this.http.get('/proxy/fees').pipe(
      map((res: MasterFeesResponse) => {
        if(res.status) {
          return res.data;
        }
      })
    );
  }
}
