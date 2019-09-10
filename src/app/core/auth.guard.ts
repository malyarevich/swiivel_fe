import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, UrlSegment, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (this.auth.user) {
        if (childRoute.data.requiredRoles === undefined) { return true; }
        else if (childRoute.data.requiredRoles.length === 0) {
          return true;
        // } else {
        //   const can = this.auth.hasRole(route.data.requiredRoles);
        //   return can;
        }
      } else {
        if (window.sessionStorage.getItem('token')) {
          return true; // this.auth.$user.toPromise();
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
  constructor(private auth: AuthService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.user) {
      if (route.data.requiredRoles === undefined) { return true; }
      else if (route.data.requiredRoles.length === 0) {
        return true;
      // } else {
      //   const can = this.auth.hasRole(route.data.requiredRoles);
      //   return can;
      }
    } else {
      if (window.sessionStorage.getItem('token')) {
        return true; // this.auth.$user.toPromise();
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.user) {
      if (route.data.requiredRoles === undefined) { return true; }
      else if (route.data.requiredRoles.length === 0) {
        return true;
      // } else {
      //   const can = this.auth.hasRole(route.data.requiredRoles);
      //   return can;
      }
    } else {
      if (window.sessionStorage.getItem('token')) {
        return true; // this.auth.$user.toPromise();
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
