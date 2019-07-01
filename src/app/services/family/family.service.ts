import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Family} from "../../models/family/family.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {LoaderService} from "../loader/loader.service";

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

  private dataStore: {
    familyList: Family[];
    family: Family;
  };

  get familyList() {
    return this._familyList.asObservable();
  }

  get family() {
    return this._family.asObservable();
  }

  constructor(private http: HttpClient, private loaderService: LoaderService) {
    this.dataStore = {
      familyList: [],
      family: null,
    };
  }

  getAll(params?) {
    let options = {};
    if (params) {
       options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: new HttpParams().set('params', JSON.stringify(params)),
      };
    }

    this.loaderService.startLoader();
    this.getAllRequest(options).subscribe((res: GetResponseData) => {
      if(res.success) {
        this.loaderService.stopLoader();
        this.dataStore.familyList = res.data;
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not load families. Error: ' + error.message));
  }

  getOne(family_id) {
    this.loaderService.startLoader();
    this.getOneRequest(family_id).subscribe((res:GetResponseData) => {
      if(res.success) {
        this.loaderService.stopLoader();
        this.dataStore.family = res.data[0];
        this._family.next(Object.assign({}, this.dataStore).family);
      }
    }, error => console.log('Could not load family. Error: ' + error.message));
  }

  add(familyName) {
    this.loaderService.startLoader();
    this.createOneRequest(familyName).subscribe((res:UpdateCreateResponseData) => {
      if(res.success) {
        this.loaderService.stopLoader();
        this.dataStore.familyList.push(res.data);
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not add family. Error: ' + error.message));
  }

  update(family) {
    this.loaderService.startLoader();
    this.updateOneRequest(family).subscribe((res: UpdateCreateResponseData) => {
      if(res.success) {
        this.loaderService.stopLoader();
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
    this.loaderService.startLoader();
    this.deleteOneRequest(familyId).subscribe((data: DeleteResponseData) => {
      if(data.success) {
        this.loaderService.stopLoader();
        this.dataStore.familyList.forEach((item, i) => {
            if (item.family_id === data.id) { this.dataStore.familyList.splice(i, 1); }
          });
        this._familyList.next(Object.assign({}, this.dataStore).familyList);
      }
    }, error => console.log('Could not delete family. Error: ' + error.message));
  }

  incrementFieldCount(fieldName: 'students_count' | 'children_count') {
    this.dataStore.family[fieldName]++;
    this._family.next(Object.assign({}, this.dataStore).family);
  }

  decrementFieldCount(fieldName: 'students_count' | 'children_count') {
    this.dataStore.family[fieldName]--;
    this._family.next(Object.assign({}, this.dataStore).family);
  }

  getAllRequest(options?): Observable<any> {
    return this.http.get(`/families`, options).pipe(
      map((res) => res)
    );
  }

  getOneRequest(family_id): Observable<any> {
    return this.http.get(`/families/${family_id}`).pipe(
      map((res : GetResponseData) => res)
    );
  }

  createOneRequest(name): Observable<any> {
    return this.http.post(`/families`, {name: name}).pipe(
      map((res: UpdateCreateResponseData) => res)
    );
  }

  updateOneRequest(family): Observable<any> {
    return this.http.put(`/families/${family.family_id}`, {...family}).pipe(
      map((res: UpdateCreateResponseData) => res)
    );
  }

  deleteOneRequest(familyId): Observable<any> {
    return this.http.delete(`/families/${familyId}`).pipe(
      map((res: DeleteResponseData) => res)
    );
  }
}
