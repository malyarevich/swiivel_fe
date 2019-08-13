import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as AuthActions from './auth-store.actions';
import {AuthService} from '../../services/auth';
import {Router} from '@angular/router';

@Injectable()

export class AuthStoreEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
  }

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.LoginRequestAction>(AuthActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action =>
      this.authService
        .login(action.payload.username, action.payload.password)
        .pipe(
          map((res: any) => new AuthActions.LoginSuccessAction(res.data)),
          catchError(error => of(new AuthActions.LoginFailureAction(error)))
        )
    )
  );
  @Effect({dispatch: false})
  loginSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<AuthActions.LoginSuccessAction>(AuthActions.ActionTypes.LOGIN_SUCCESS),
    tap((action: any) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      this.router.navigate(['/']);
    })
  );
  @Effect({dispatch: false})
  logoutRequestAction$ = this.actions$.pipe(
    ofType<AuthActions.LogoutRequestAction>(AuthActions.ActionTypes.LOGOUT_REQUEST),
    tap(() => {
      this.authService.logout();
      this.router.navigate(['/login']);
    })
  );

}
