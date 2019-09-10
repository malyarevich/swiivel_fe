import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, UrlSegment, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/auth.service';



@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (this.auth.token) return true;
      else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  constructor(private auth: AuthService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.token) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.token) return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
