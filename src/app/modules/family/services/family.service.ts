import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Family} from "../model/family.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FamilyService {

  private _familyList: BehaviorSubject<Family[]> = <BehaviorSubject<Family[]>> new BehaviorSubject([]);

  private dataStore: {
    familyList: Family[];
  };

  // TODO delete
  tempFamily = {
    id: 1,
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

  constructor(private http: HttpClient) {
    this.dataStore = {
      familyList: []
    };
  }

  getAll() {
    // this.http.get(`${this.baseUrl}GetAllEmployees`).map(response => response.json()).subscribe(data => {
    //   this.dataStore.employeeList = data;
    //   this._employeeList.next(Object.assign({}, this.dataStore).employeeList);
    // }, error => console.log('Could not load employee.'));

    this.dataStore.familyList = this.tempData;
    this._familyList.next(this.dataStore.familyList);
  }

  addFamily(familyName) {

    this.tempFamily.name = familyName;

    this.dataStore.familyList.push(this.tempFamily);
    this._familyList.next(this.dataStore.familyList);
  }
}
