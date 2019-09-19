import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@core/auth.service';
import { Observable } from 'rxjs';



@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (this.auth.user) { return true; } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  constructor(private auth: AuthService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.user) { return true; } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.user) { return true; } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
