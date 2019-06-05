import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {FamilyQueryParams} from "../../models/family/family-query-params.model";
import {FAMILY_VIEW_GENERAL_TABS} from "../../models/family/family-view-general-tabs";

@Injectable()
export class FamilyQueryParamsService {

  private _familyQueryParams: BehaviorSubject<FamilyQueryParams> = <BehaviorSubject<FamilyQueryParams>> new BehaviorSubject(null);

  FAMILY_VIEW_GENERAL_TABS = FAMILY_VIEW_GENERAL_TABS;

  private dataStore: {
    familyQueryParams: FamilyQueryParams;
  };

  get familyQueryParams() {
    return this._familyQueryParams.asObservable();
  }

  constructor() {
    this.dataStore = {
      familyQueryParams: {
        filter: FAMILY_VIEW_GENERAL_TABS.ALL,
        query: '',
      }
    };
    this._familyQueryParams.next(Object.assign({}, this.dataStore).familyQueryParams);
  }

  setQueryParams(query: string) {
    this.dataStore.familyQueryParams.query = query;
    this._familyQueryParams.next(Object.assign({}, this.dataStore).familyQueryParams);
  }

  setFilterParams(filter: string) {
    this.dataStore.familyQueryParams.filter = filter;
    this._familyQueryParams.next(Object.assign({}, this.dataStore).familyQueryParams);
  }

}
