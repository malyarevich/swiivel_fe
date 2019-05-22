import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {FamilyPerson} from "../../../models/family/family-person.model";

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

  constructor(private http: HttpClient) {
    this.dataStore = {
      familyPersonList: [],
    };
  }

  getByFamilyId(familyId) {
    this.getByFamilyIdRequest(familyId).subscribe(data => {
      this.dataStore.familyPersonList = data;
      this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
    }, error => console.log('Could not load family persons. Error: ' + error.message));
  }

  add(data) {
    this.addOneRequest(data).subscribe((res: ResponseData) => {
      this.dataStore.familyPersonList.push(res.data);
      this._familyPersonList.next(Object.assign({}, this.dataStore).familyPersonList);
    }, error => console.log('Could not add families persons. Error: ' + error.message));
  }

  getByFamilyIdRequest(familyId): Observable<any> {
    return this.http.get(`${environment.apiFB}/persons/family/${familyId}?api_token=${environment.api_token}`).pipe(
      map((res) => res)
    );
  }

  addOneRequest(data): Observable<any> {
    return this.http.post(`${environment.apiFB}/persons/family?api_token=${environment.api_token}`, {...data}).pipe(
      map((res) => res)
    );
  }
}