import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export const ROUTE_NOT_AUTHENTICATED = 'ROUTE_NOT_AUTHENTICATED';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private readonly authService: AuthService,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.token) {
            throw makeCancelingError(new Error(ROUTE_NOT_AUTHENTICATED));
        } else {
            return true;
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
