import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Family} from "../model/family.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FamilyService {

  public familyList: Observable<Family[]>;
  private _familyList: BehaviorSubject<Family[]>;

  private dataStore: {
    familyList: Family[];
  };

  tempData = [
    {id: '3493485093802', name: 'Test'},
    {id: '4523545424456', name: 'Test2'},
  ];

  constructor(private http: HttpClient) {
    this.dataStore = {
      familyList: []
    };
    this._familyList = < BehaviorSubject<Family[]>> new BehaviorSubject([]);
    this.familyList = this._familyList.asObservable();
  }

  getAll() {
    // this.http.get(`${this.baseUrl}GetAllEmployees`).map(response => response.json()).subscribe(data => {
    //   this.dataStore.employeeList = data;
    //   this._employeeList.next(Object.assign({}, this.dataStore).employeeList);
    // }, error => console.log('Could not load employee.'));

    this.dataStore.familyList = this.tempData;
    // this._familyList.next(Object.assign({}, this.dataStore).familyList);
    this._familyList.next(this.dataStore.familyList);
  }

  addFamily(familyName) {
    this.dataStore.familyList.push({id: '3234534535', name: familyName});
    this._familyList.next(this.dataStore.familyList);
  }
}
