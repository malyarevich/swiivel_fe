import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators"
import {ApiResponse} from "../../models/api-response";

@Injectable()
export class UserService {

  constructor(private readonly http: HttpClient) { }

  getAllUsers(): Observable<any> {
      return this.http.post('/users', {}).pipe(
          map((res: ApiResponse) => res.data)
      );
  }
}
