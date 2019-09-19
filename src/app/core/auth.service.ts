// import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '@app/models/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private redirectUrl: string;
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
    this.userSubject$.subscribe((user) => {
      if (user) {
        this.saveUser(user);
      }
    });
    // if ()
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
      let savedUser = this.loadUser();
      if (savedUser) {
        this.setUser(savedUser);
        return resolve(true);
      } else {
        resolve(null);
      }
    });
  }

  public login(username: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.api.login({username, password}).pipe(first()).subscribe((user: User) => {
        this.userSubject$.next(user);
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });
  }

  setUser(user: User) {
    this.userSubject$.next(user);
  }

  get token() {
    if (this.user && this.user.access_token) {
      return this.user.access_token;
    } else {
      return null;
    }
  }
  get $user() {
    return this.userSubject$.asObservable();
  }
  get user() {
    return this.userSubject$.getValue();
  }

  public loadUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user: User = JSON.parse(userStr);
        return user;
      } catch (error) {
        return null;
      }
    } else {
      return null;
    }
  }
  public saveUser(user: User, session?: boolean) {
    if (session) { return sessionStorage.setItem('user', JSON.stringify(user)); } else { return localStorage.setItem('user', JSON.stringify(user)); }
  }


  public clearStorage() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('redirect');
    localStorage.removeItem('user');
  }


  public signout() { // should send signout request to backend?
    this.clearStorage();
    this.userSubject$.next(null);
  }
}
