import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable()
export class FamilyService {

  constructor(private readonly http: HttpClient) {
  }

  getAllFamilyPersons(): Observable<any> {
    return this.http.get(`${environment.apiFB}/persons/family?api_token=${environment.api_token}`).pipe(
      map((res) => res)
    );
  }

}
