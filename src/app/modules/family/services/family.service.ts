import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Family} from "../../../models/family/family.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";

interface GetResponseData {
  success: boolean;
  data: Family[];
}

interface UpdateCreateResponseData {
  success: boolean;
  data: Family;
}

interface DeleteResponseData {
  success: boolean;
  id: string;
}


@Injectable()
export class FamilyService {

  private _familyList: BehaviorSubject<Family[]> = <BehaviorSubject<Family[]>> new BehaviorSubject([]);
  private _family: BehaviorSubject<Family> = <BehaviorSubject<Family>> new BehaviorSubject({});
  private _loading: BehaviorSubject<boolean> = <BehaviorSubject<boolean>> new BehaviorSubject(false);

  private dataStore: {
    familyList: Family[];
    family: Family;
    loading: boolean;
  };

  get familyList() {
    return this._familyList.asObservable();
  }

  get family() {
    return this._family.asObservable();
  }

  get loading() {
    return this._loading.asObservable();
  }

  constructor(private http: HttpClient) {
    this.dataStore = {
      familyList: [],
      family: null,
      loading: false,
    };
  }

  getAll() {
    this.startLoading();
    this.getAllRequest().subscribe((res: GetResponseData) => {
      if(res.success) {
        this.stopLoading();
        this.dataStore.familyList = res.data;
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not load families. Error: ' + error.message));
  }

  getOne(family_id) {
    this.getOneRequest(family_id).subscribe((res:GetResponseData) => {
      if(res.success) {
        this.dataStore.family = res.data[0];
        this._family.next(Object.assign({}, this.dataStore).family);
      }
    }, error => console.log('Could not load family. Error: ' + error.message));
  }

  add(familyName) {
    this.startLoading();
    this.createOneRequest(familyName).subscribe((res:UpdateCreateResponseData) => {
      if(res.success) {
        this.stopLoading();
        this.dataStore.familyList.push(res.data);
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not add family. Error: ' + error.message));
  }

  update(family) {
    this.updateOneRequest(family).subscribe((res: UpdateCreateResponseData) => {
      if(res.success) {
        this.dataStore.family = res.data;
        this._family.next(Object.assign({}, this.dataStore).family);

        this.dataStore.familyList.forEach((item, i) => {
          if (item.family_id === res.data.family_id) { this.dataStore.familyList[i] = res.data; }
        });
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not update family. Error: ' + error.message));
  }

  delete(familyId) {
    this.deleteOneRequest(familyId).subscribe((data: DeleteResponseData) => {
      if(data.success) {
        this.dataStore.familyList.forEach((item, i) => {
            if (item.family_id === data.id) { this.dataStore.familyList.splice(i, 1); }
          });
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not delete family. Error: ' + error.message));
  }

  getAllRequest(): Observable<any> {
    return this.http.get(`${environment.apiFB}/families?api_token=${environment.api_token}`).pipe(
      map((res: GetResponseData) => res)
    );
  }

  getOneRequest(family_id): Observable<any> {
    return this.http.get(`${environment.apiFB}/families/${family_id}?api_token=${environment.api_token}`).pipe(
      map((res : GetResponseData) => res)
    );
  }

  createOneRequest(name): Observable<any> {
    return this.http.post(`${environment.apiFB}/families?api_token=${environment.api_token}`, {name: name}).pipe(
      map((res: UpdateCreateResponseData) => res)
    );
  }

  updateOneRequest(family): Observable<any> {
    return this.http.put(`${environment.apiFB}/families/${family.family_id}?api_token=${environment.api_token}`, {...family}).pipe(
      map((res: UpdateCreateResponseData) => res)
    );
  }

  deleteOneRequest(familyId): Observable<any> {
    return this.http.delete(`${environment.apiFB}/families/${familyId}?api_token=${environment.api_token}`).pipe(
      map((res: DeleteResponseData) => res)
    );
  }

  startLoading() {
    this.dataStore.loading = true;
    this._loading.next(Object.assign({}, this.dataStore).loading);
  }

  stopLoading() {
    this.dataStore.loading = false;
    this._loading.next(Object.assign({}, this.dataStore).loading);
  }
}
