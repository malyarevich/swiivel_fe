import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '@core/auth.service';



@Injectable()
export class AuthGuard implements  CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AuthService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.isAllowed();
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAllowed() ? true : this.toLogin(state.url);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAllowed() ? true : this.toLogin(state.url);
  }

  isAllowed(): boolean {
    return !!this.auth.user;
  }

  toLogin(from?: string) {
    if (from) { this.auth.redirect = from; }
    return this.router.parseUrl('/login');
  }
}
