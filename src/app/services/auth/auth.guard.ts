import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
// import { SessionStorageService } from './../session-storage/session-storage.service';
import { Observable } from 'rxjs';

export const ROUTE_NOT_AUTHENTICATED = 'ROUTE_NOT_AUTHENTICATED';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private readonly authService: AuthService,
        // private readonly sessionStorage: SessionStorageService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.token) {
            throw makeCancelingError(new Error(ROUTE_NOT_AUTHENTICATED));
        } else {
            return true;

            // const isChecked = this.sessionStorage.getItem('isChecked');
            // if (isChecked) {
            //     return true;
            // } else {
            //     return Observable.create((observer: any) => {
            //         this.authService.checkToken(this.authService.token)
            //         .then(() => {
            //             observer.next(true);
            //         }).catch(() => {
            //             observer.next(makeCancelingError(new Error(ROUTE_NOT_AUTHENTICATED)));
            //         }).then(() => {
            //             observer.complete();
            //         });
            //     });
            // }
        }
    }

    canLoad(route: Route): boolean {
        return true;
    }
}

/**
 * Copied over from Angular Router
 * @see https://goo.gl/8qUsNa
 */
export const NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';

/**
 * Similar to navigationCancelingError
 * @see https://goo.gl/nNd9TX
 */
export function makeCancelingError(error: Error) {
    (error as any)[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}
