import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {FamilyPerson} from "../../models/family/family-person.model";

interface QueryParams {
  filter: string;
  query: string;
}

@Injectable()
export class FamilyQueryParamsService {

  private _familyQueryParams: BehaviorSubject<QueryParams> = <BehaviorSubject<QueryParams>> new BehaviorSubject({});

  private dataStore: {
    familyQueryParams: QueryParams;
  };

  get familyQueryParams() {
    return this._familyQueryParams.asObservable();
  }

  constructor(private http: HttpClient) {
    this.dataStore = {
      familyQueryParams: {
        filter: '',
        query: '',
      }
    };
  }


}
