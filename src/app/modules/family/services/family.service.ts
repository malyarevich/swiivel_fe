import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Family} from "../model/family.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class FamilyService {

  private _familyList: BehaviorSubject<Family[]> = <BehaviorSubject<Family[]>> new BehaviorSubject([]);
  private _family: BehaviorSubject<Family> = <BehaviorSubject<Family>> new BehaviorSubject({});

  private dataStore: {
    familyList: Family[];
    family: Family;
  };

  // TODO delete
  tempFamily = {
    id: 3,
    name: 'Test3',
    family_id: 'sfferervr',
    address: '',
    city: '',
    state: '',
    zip: '',
    preferred_contact: '',
    preferred_contact_method: '',
    home_phone_number: '',
    language_spoken_at_home: '',
    number_of_siblings: '',
    children_at_home: '',
    family_rabbi: '',
    rabbi_phone_number: '',
    family_shul: '',
  };

  tempData = [
    {
      id: 1,
      name: 'Test',
      family_id: 'fewf43rg4g2rg24',
      address: '',
      city: '',
      state: '',
      zip: '',
      preferred_contact: '',
      preferred_contact_method: '',
      home_phone_number: '',
      language_spoken_at_home: '',
      number_of_siblings: '',
      children_at_home: '',
      family_rabbi: '',
      rabbi_phone_number: '',
      family_shul: '',
    },
    {
      id: 2,
      name: 'Test2',
      family_id: 'fewf43rgdsdc4g2rg24',
      address: '',
      city: '',
      state: '',
      zip: '',
      preferred_contact: '',
      preferred_contact_method: '',
      home_phone_number: '',
      language_spoken_at_home: '',
      number_of_siblings: '',
      children_at_home: '',
      family_rabbi: '',
      rabbi_phone_number: '',
      family_shul: '',
    },
  ];

  get familyList() {
    return this._familyList.asObservable();
  }

  get family() {
    return this._family.asObservable();
  }

  constructor(private http: HttpClient) {
    this.dataStore = {
      familyList: [],
      family: null,
    };
  }

  getAll() {
    this.getAllRequest().subscribe(data => {
      this.dataStore.familyList = data;
      this._familyList.next(Object.assign({}, this.dataStore).familyList);
    }, error => console.log('Could not load families. Error: ' + error.message));
  }

  getOne(family_id) {
    this.getOneRequest(family_id).subscribe(data => {
      this.dataStore.family = data;
      this._family.next(Object.assign({}, this.dataStore).family);
    }, error => console.log('Could not load family. Error: ' + error.message));
  }

  add(familyName) {
    this.createOneRequest(familyName).subscribe(data => {
      console.log(data);
      // this.dataStore.familyList.push(data);
      // this._familyList.next(Object.assign({}, this.dataStore).familyList);
    }, error => console.log('Could not add family. Error: ' + error.message));
  }

  update(family) {
    this.updateOneRequest(family).subscribe(data => {
      console.log(data);
      // this.dataStore.family = data;
      // this._family.next(Object.assign({}, this.dataStore).family);

      // this.dataStore.familyList.forEach((item, i) => {
      //   if (item.family_id === data.family_id) { this.dataStore.familyList[i] = data; }
      // });
      //
      // this._familyList.next(Object.assign({}, this.dataStore).familyList);


    }, error => console.log('Could not update family. Error: ' + error.message));
  }

  delete(familyId) {
    this.deleteOneRequest(familyId).subscribe(data => {
      console.log(data);
      // this.dataStore.familyList.forEach((item, i) => {
      //   if (item.family_id === familyId) { this.dataStore.familyList.splice(i, 1); }
      // });
      //
      // this._familyList.next(Object.assign({}, this.dataStore).familyList);
    }, error => console.log('Could not delete family. Error: ' + error.message));
  }

  getAllRequest(): Observable<any> {
    return this.http.get(`${environment.apiFB}/families?api_token=${environment.api_token}`).pipe(
      map((res) => res)
    );
  }

  getOneRequest(family_id): Observable<any> {
    return this.http.get(`${environment.apiFB}/families/${family_id}?api_token=${environment.api_token}`).pipe(
      map((res) => res[0])
    );
  }

  createOneRequest(name): Observable<any> {
    return this.http.post(`${environment.apiFB}/families?api_token=${environment.api_token}`, {name: name}).pipe(
      map((res) => res)
    );
  }

  updateOneRequest(family): Observable<any> {
    return this.http.put(`${environment.apiFB}/families/${family.id}?api_token=${environment.api_token}`, {...family}).pipe(
      map((res) => res)
    );
  }

  deleteOneRequest(familyId): Observable<any> {
    return this.http.delete(`${environment.apiFB}/families/${familyId}?api_token=${environment.api_token}`).pipe(
      map((res) => res)
    );
  }
}
