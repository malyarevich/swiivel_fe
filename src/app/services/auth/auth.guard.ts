import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private readonly store: Store<any>,
    private readonly router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('auth').pipe(
      map(auth => auth.user),
      switchMap((user) => {
        if (user && user.expires_at > moment().unix()) {
          return of(true);
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }

}
