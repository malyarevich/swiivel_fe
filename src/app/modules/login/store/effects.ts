import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { merge, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User, LoginService } from '../rest';
import {
    Login,
    LoginError,
    LoginSuccess,
    Logout
} from './actions';
import { Store } from '@ngrx/store';

@Injectable()
export class Effects {
    constructor(
        private readonly actions$: Actions,
        private readonly userService: LoginService,
        private readonly router: Router,
        private readonly store: Store<any>
    ) {}

    status$: Observable<any> = merge(
        this.actions$.pipe(ofType<LoginError>(LoginError.Type))
    );

    @Effect()
    login$ = this.actions$.pipe(
        ofType<Login>(Login.Type),
        switchMap(({ data }) =>
            this.userService.login(data).then(
                (res: User) => new LoginSuccess(res),
                err => new LoginError(err)
            )
        )
    );

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType<LoginSuccess>(LoginSuccess.Type),
        tap(() => {
            this.router.navigate(['/']);
        })
    );

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType<Logout>(Logout.Type),
        tap(() => {
            this.userService.logout();
            this.router.navigate(['/login']);
        })
    );
}
