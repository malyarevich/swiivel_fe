import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, UrlSegment, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (this.auth.user) {
        return true
      } else {
        if (window.localStorage.getItem('user')) return true;
        if (window.sessionStorage.getItem('token')) {
          return true;
        }
      }
      return true;
    }
  constructor(private auth: AuthService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.user) {
      return true;
    } else {
      if (window.localStorage.getItem('user')) return true;
      if (window.sessionStorage.getItem('token')) {
        return true;
      }
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.user) {
      return true;
    } else {
      if (window.localStorage.getItem('user')) return true;
      if (window.sessionStorage.getItem('token')) {
        return true; // this.auth.$user.toPromise();
      }
    }
  }
}
