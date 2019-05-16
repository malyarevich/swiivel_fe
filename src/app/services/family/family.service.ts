import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Family} from "../../models/family/family.model";

@Injectable()
export class FamilyService {

  constructor(private readonly http: HttpClient) {
  }

  getAllFamilyPersons(): Observable<any> {
    return this.http.get(`${environment.apiFB}/persons/family?api_token=${environment.api_token}`).pipe(
      map((res) => res)
    );
  }

  createFamily(family: Family): Observable<any> {
    return this.http.post(`${environment.apiFB}/family?api_token=${environment.api_token}`, family).pipe(
      map((res) => res)
    );
    // return this.http.post(`http://localhost:8000/api/v1/family?api_token=${environment.api_token}`, {...family}).pipe(
    //   map((res) => res)
    // );
  }

}
