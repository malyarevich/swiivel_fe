import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(private readonly http: HttpClient) { }

  getAllUsers(): Observable<any> {
      return this.http.post('/users', {});
  }
}
