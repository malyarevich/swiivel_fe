import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '@core/auth.service';



@Injectable()
export class AuthGuard implements  CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AuthService, private router: Router) { }

  canLoad(_route: Route, _segments: UrlSegment[]) {
    return this.isAllowed();
  }
  canActivateChild(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAllowed() ? true : this.toLogin(state.url);
  }
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAllowed() ? true : this.toLogin(state.url);
  }

  isAllowed(): boolean {
    return !!this.auth.user;
  }

  toLogin(from?: string) {
    if (from) this.auth.redirect = from;
    return this.router.parseUrl('/login');
  }
}
