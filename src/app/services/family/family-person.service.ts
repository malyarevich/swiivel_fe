import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {FamilyPerson} from "../../models/family/family-person.model";
import {FamilyService} from "./family.service";
import {FamilyRoles} from "../../enums/family-roles";
import {FamilyQueryParamsService} from "./family-query-params.service";
import {FAMILY_VIEW_GENERAL_TABS} from "../../models/family/family-view-general-tabs";

interface ResponseData {
  status: boolean;
  errors?: string;
  data?: FamilyPerson;
}

@Injectable()
export class FamilyPersonService {

  private _familyPersonList: BehaviorSubject<FamilyPerson[]> = <BehaviorSubject<FamilyPerson[]>> new BehaviorSubject([]);
  private familyRoles = FamilyRoles;

  FAMILY_VIEW_GENERAL_TABS = FAMILY_VIEW_GENERAL_TABS;

  private dataStore: {
    familyPersonList: FamilyPerson[];
  };

  get familyPersonList() {
    return this._familyPersonList.asObservable();
  }

  constructor(private http: HttpClient,
              private familyService: FamilyService,
              private familyQueryParamsService: FamilyQueryParamsService) {
    this.dataStore = {
      familyPersonList: [],
    };
  }

  getByFamilyId(familyId, params?) {
    this.getByFamilyIdRequest(familyId, params).subscribe(data => {
      this.dataStore.familyPersonList = data;
      this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
    }, error => console.log('Could not load family persons. Error: ' + error.message));
  }

  add(data) {
    this.addOneRequest(data).subscribe((res: FamilyPerson) => {
      // this.dataStore.familyPersonList.push(res);
      // this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
      if (res.person_role === this.familyRoles.student) this.familyService.incrementFieldCount('students_count');
      if (res.person_role === this.familyRoles.child) this.familyService.incrementFieldCount('children_count');
      this.familyQueryParamsService.setFilterParams(this.FAMILY_VIEW_GENERAL_TABS.ALL);
    }, error => console.log('Could not add families persons. Error: ' + error.message));
  }

  update(data, id) {
    this.updateOneRequest(data, id).subscribe((res: FamilyPerson) => {
        // this.dataStore.familyPersonList.forEach((item, i) => {
        //   if (item.id == res.id) {
        //     this.dataStore.familyPersonList[i] = res;
        //   }
        //   this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
        //   });
        this.familyQueryParamsService.setFilterParams(this.FAMILY_VIEW_GENERAL_TABS.ALL);
    });
  }

  delete(id, role) {
    this.deleteOneRequest(id).subscribe((id) => {
        // this.dataStore.familyPersonList.forEach((item, i) => {
        // if (item.id == id) {
        //   this.dataStore.familyPersonList.splice(i, 1);
        // }
        // this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
        // });
        if (role === this.familyRoles.student) this.familyService.decrementFieldCount('students_count');
        if (role === this.familyRoles.child) this.familyService.decrementFieldCount('children_count');
        this.familyQueryParamsService.setFilterParams(this.FAMILY_VIEW_GENERAL_TABS.ALL);
    }, error => console.log('Could not delete family person. Error: ' + error.message));
  }

  getByFamilyIdRequest(familyId, params?): Observable<any> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    if (params) options['params'] = new HttpParams().set('params', JSON.stringify(params));
    return this.http.get(`/person/family/${familyId}`, options).pipe(
      map((res: ResponseData) => {
        if (res.status) {
         return res.data;
        } else {
          return throwError(res.errors);
        }
      })
    );
  }

  addOneRequest(data): Observable<any> {
    return this.http.post(`/person/family`, {...data}).pipe(
      map((res : ResponseData) => {
        if (res.status) {
          return res.data;
        } else {
          return throwError(res.errors);
        }
      })
    );
  }

  updateOneRequest(data, id): Observable<any> {
    return this.http.put(`/person/family/${id}`, {...data}).pipe(
      map((res: ResponseData) => {
        if (res.status) {
          return res.data;
        } else {
          return throwError(res.errors);
        }
      })
    );
  }

  deleteOneRequest(id): Observable<any> {
    return this.http.delete(`person/family/${id}`).pipe(
      map((res: ResponseData) => {
        if (res.status) {
          return res.data;
        } else {
          return throwError(res.errors);
        }
      })
    );
  }

  getAllRequest(): Observable<any> {
    return this.http.get('/person/family').pipe(
      map((res: ResponseData) => {
        if (res.status) {
          return res.data;
        } else {
          return throwError(res.errors);
        }
      })
    );
  }
}
