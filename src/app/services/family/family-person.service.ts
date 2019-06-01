import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {FamilyPerson} from "../../models/family/family-person.model";
import {FamilyService} from "./family.service";

interface ResponseData {
  success: boolean;
  errors: string;
  data: FamilyPerson;
}

@Injectable()
export class FamilyPersonService {

  private _familyPersonList: BehaviorSubject<FamilyPerson[]> = <BehaviorSubject<FamilyPerson[]>> new BehaviorSubject([]);

  private dataStore: {
    familyPersonList: FamilyPerson[];
  };

  get familyPersonList() {
    return this._familyPersonList.asObservable();
  }

  constructor(private http: HttpClient,private familyService: FamilyService) {
    this.dataStore = {
      familyPersonList: [],
    };
  }

  getByFamilyId(familyId, params) {
    this.getByFamilyIdRequest(familyId, params).subscribe(data => {
      this.dataStore.familyPersonList = data;
      this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
    }, error => console.log('Could not load family persons. Error: ' + error.message));
  }

  add(data) {
    this.addOneRequest(data).subscribe((res: ResponseData) => {
      const familyPerson: FamilyPerson = res.data;
      this.dataStore.familyPersonList.push(familyPerson);
      this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
      if(familyPerson.person_role === 'student') this.familyService.incrementFieldCount('students_count');
      if(familyPerson.person_role === 'child') this.familyService.incrementFieldCount('children_count');
    }, error => console.log('Could not add families persons. Error: ' + error.message));
  }

  getByFamilyIdRequest(familyId, params): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('params', JSON.stringify(params)),
    };
    return this.http.get(`/person/family/${familyId}`, options).pipe(
      map((res) => res)
    );
  }

  addOneRequest(data): Observable<any> {
    return this.http.post(`/person/family`, {...data}).pipe(
      map((res) => res)
    );
  }
}
