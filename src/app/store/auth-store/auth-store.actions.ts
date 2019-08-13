import { Action } from '@ngrx/store';
import { LoginData, Error, User, Email } from './auth-store.models';

export enum ActionTypes {
  RESTORE_LOGIN_REQUEST = '[App] Restore Login Request',
  LOGIN_REQUEST = '[Login Page] Login Request',
  LOGIN_FAILURE = '[Login Page] Login Failure',
  LOGIN_SUCCESS = '[Login Page] Login Success',
  RESTORE_PASSWORD_REQUEST = '[Login Page] Restore Password Request',
  RESTORE_PASSWORD_FAILURE = '[Login Page] Restore Password Failure',
  RESTORE_PASSWORD_SUCCESS = '[Login Page] Restore Password Success',
  LOGOUT_REQUEST = '[App] Logout Request'
}

export class RestoreLoginAction implements Action {
  readonly type = ActionTypes.RESTORE_LOGIN_REQUEST;
  constructor(public payload: User) {}
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: LoginData) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: Error) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class RestorePasswordRequestAction implements Action {
  readonly type = ActionTypes.RESTORE_PASSWORD_REQUEST;
  constructor(public payload: Email) {}
}

export class RestorePasswordFailureAction implements Action {
  readonly type = ActionTypes.RESTORE_PASSWORD_FAILURE;
  constructor(public payload: Error) {}
}

export class RestorePasswordSuccessAction implements Action {
  readonly type = ActionTypes.RESTORE_PASSWORD_SUCCESS;
  constructor(public payload: Email) {}
}

export class LogoutRequestAction implements Action {
  readonly type = ActionTypes.LOGOUT_REQUEST;
}

export type Actions =
  | RestoreLoginAction
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | RestorePasswordRequestAction
  | RestorePasswordFailureAction
  | RestorePasswordSuccessAction
  | LogoutRequestAction;
