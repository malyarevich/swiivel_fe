// import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '@app/models/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private redirectUrl: string;
  private tokenSubject$: BehaviorSubject<string> = new BehaviorSubject(null);
  private userSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private eventSubject$: Subject<any> = new Subject();
  private requestsCounter = 0;
  private occupied$: BehaviorSubject<any> = new BehaviorSubject(null);
  get isOccupied() {
    return this.occupied$.asObservable();
  }
  set occupied(value: boolean) {
    this.occupied$.next(value);
  }

  private oldToken: string;
  set request(count: number) {
    if (count === 0) {
      this.requestsCounter++;
    }
  }
  get request() {
    this.requestsCounter++;
    return this.requestsCounter;
  }

  constructor(private api: ApiService) {
    this.redirect;
    this.tokenSubject$.subscribe((token) => {
      if (token && token !== this.oldToken) {
        this.saveToken(token, true);
      }
    });
    this.userSubject$.subscribe((user) => {
      if (user) {
        this.saveUser(user);
        this.saveToken(user.access_token);
      }
    });
  }
  get events$() {
    return this.eventSubject$;
  }
  set event(eventObj: any) {
    this.eventSubject$.next(eventObj);
  }
  get redirect() {
    if (!this.redirectUrl && !window.sessionStorage.getItem('redirect') && window.location.pathname !== '/login') { window.sessionStorage.setItem('redirect', window.location.pathname); }
    if (!this.redirectUrl) { this.redirectUrl = window.sessionStorage.getItem('redirect'); }
    if (!this.redirectUrl) {
      this.redirectUrl = '/';
    }
    return this.redirectUrl;
  }
  set redirect(url: string) {
    if (url !== '/login') {
      this.redirectUrl = url;
      if (window.sessionStorage) {
        window.sessionStorage.setItem('redirect', this.redirectUrl);
      }
    }
  }

  clearRedirect() {
    this.redirectUrl = null;
    return true;
  }

  load() {
    return new Promise((resolve, reject) => {
      let token = window.sessionStorage.getItem(`token`);
      if (token) {
        this.tokenSubject$.next(token);
        return resolve(true);
      }
      token = localStorage.getItem('token');
      if (!token) {
        const userStr = localStorage.getItem('user');
        if (userStr) {
          try {
            const user: User = JSON.parse(userStr);
            // if (user.access_token) this.tokenSubject$.next(token);
            this.setUser(user);
            return resolve(true);
          } catch (error) {
            return resolve(null);
          }
        }
        resolve(null);
      } else {
        this.tokenSubject$.next(token);
        return resolve(true);
      }
    });
  }

  public login(username: string, password: string): Observable<User> {
    return this.api.login({username, password}).subscribe((user: User) => {
      this.userSubject$.next(user);
      return user;
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  setUser(user: User) {
    this.userSubject$.next(user);
  }

  get token$() {
    return this.tokenSubject$.asObservable();
  }
  get token() {
    return this.tokenSubject$.getValue();
  }
  get $user() {
    return this.userSubject$.asObservable();
  }
  get user() {
    return this.userSubject$.getValue();
  }

  public saveToken(token: string, session?: boolean) {
    if (session) { return sessionStorage.setItem('token', token); } else { return localStorage.setItem('token', token); }
  }
  public saveUser(user: User, session?: boolean) {
    if (session) { return sessionStorage.setItem('user', JSON.stringify(user)); } else { return localStorage.setItem('user', JSON.stringify(user)); }
  }
  public removeToken(session?: boolean) {
    if (session) { return sessionStorage.removeItem('token'); } else { return localStorage.removeItem('token'); }
  }

  public clearStorage() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('redirect');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


  public signout() { // should send signout request to backend?
    this.clearStorage();
    this.userSubject$.next(null);
    this.tokenSubject$.next(null);
  }
}
