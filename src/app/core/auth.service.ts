// import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '@app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$ = new BehaviorSubject<User>(null);
  constructor(
    private api: ApiService
  ) {
  }

  get user$() {
    return this._user$.asObservable();
  }

  get user() {
    return window.localStorage.getItem('user');
    // return this._user$.getValue();
  }

  public login(username: string, password: string): Observable<User> {
    return this.api.login({username, password}).subscribe((user: User) => {
      this._user$.next(user);
      return user;
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  // public logout(): void {
    // localStorage.removeItem('user');
  // }
}
