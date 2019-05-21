import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Family} from "../../../models/family/family.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {PersonsListComponent} from "../../organization/modules/person/components/persons-list/persons-list.component";
import {Person} from "../../../models/person.model";
import {FamilyPerson} from "../../../models/family/family-person.model";


// interface ResponseData {
//   success: boolean;
//   data: Family[];
// }

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

//
//   getOne(family_id) {
//     this.getOneRequest(family_id).subscribe(data => {
//       this.dataStore.family = data;
//       this._family.next(Object.assign({}, this.dataStore).family);
//     }, error => console.log('Could not load family. Error: ' + error.message));
//   }
//
//   add(familyName) {
//     this.createOneRequest(familyName).subscribe((data: ResponseData) => {
//       if (!data.success) return;
//       this.dataStore.familyList.push(data.data[0]);
//       this._familyList.next(Object.assign({}, this.dataStore).familyList);
//     }, error => console.log('Could not add family. Error: ' + error.message));
//   }
//
//   update(family) {
//     this.updateOneRequest(family).subscribe(data => {
//       console.log(data);
//       // this.dataStore.family = data;
//       // this._family.next(Object.assign({}, this.dataStore).family);
//
//       // this.dataStore.familyList.forEach((item, i) => {
//       //   if (item.family_id === data.family_id) { this.dataStore.familyList[i] = data; }
//       // });
//       //
//       // this._familyList.next(Object.assign({}, this.dataStore).familyList);
//
//
//     }, error => console.log('Could not update family. Error: ' + error.message));
//   }
//
//   delete(familyId) {
//     this.deleteOneRequest(familyId).subscribe(data => {
//       console.log(data);
//       // this.dataStore.familyList.forEach((item, i) => {
//       //   if (item.family_id === familyId) { this.dataStore.familyList.splice(i, 1); }
//       // });
//       //
//       // this._familyList.next(Object.assign({}, this.dataStore).familyList);
//     }, error => console.log('Could not delete family. Error: ' + error.message));
//   }
//
  getByFamilyIdRequest(familyId): Observable<any> {
    return this.http.get(`${environment.apiFB}/persons/family/${familyId}?api_token=${environment.api_token}`).pipe(
      map((res) => res)
    );
  }

//
//   getOneRequest(family_id): Observable<any> {
//     return this.http.get(`${environment.apiFB}/families/${family_id}?api_token=${environment.api_token}`).pipe(
//       map((res) => res[0])
//     );
//   }
//
//   createOneRequest(name): Observable<any> {
//     return this.http.post(`${environment.apiFB}/families?api_token=${environment.api_token}`, {name: name}).pipe(
//       map((res) => res)
//     );
//   }
//
//   updateOneRequest(family): Observable<any> {
//     return this.http.put(`${environment.apiFB}/families/${family.id}?api_token=${environment.api_token}`, {...family}).pipe(
//       map((res) => res)
//     );
//   }
//
//   deleteOneRequest(familyId): Observable<any> {
//     return this.http.delete(`${environment.apiFB}/families/${familyId}?api_token=${environment.api_token}`).pipe(
//       map((res) => res)
//     );
//   }
}
