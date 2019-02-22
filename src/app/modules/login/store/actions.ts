import { Action } from '@ngrx/store';
import { LoginData, User } from '../rest';
import { HttpErrorResponse } from '@angular/common/http';

export class Login implements Action {
    static Type = '[Login Page] Login';

    public type = Login.Type;

    constructor(public data: LoginData) {}
}

export class LoginSuccess implements Action {
    static Type = '[Login API] LoginSuccess';

    public type = LoginSuccess.Type;

    constructor(public user: User) {}
}

export class LoginError implements Action {
    static Type = '[Login API] LoginError';

    public type = LoginError.Type;

    constructor(public error: HttpErrorResponse) {}
}

export class RestorePassword implements Action {
    static Type = '[Login Page] RestorePassword';

    public type = RestorePassword.Type;

    constructor(public email: string) {}
}

export class RestorePasswordSuccess implements Action {
    static Type = '[Login API] RestorePasswordSuccess';

    public type = RestorePasswordSuccess.Type;

    constructor(public email: string) {}
}

export class RestorePasswordError implements Action {
    static Type = '[Login API] RestorePasswordError';

    public type = RestorePasswordError.Type;

    constructor(public error: HttpErrorResponse) {}
}

export class Logout implements Action {
    static Type = '[Main Page] Logout';

    public type = Logout.Type;

    constructor() {}
}

export class ClearState implements Action {
    static Type = '[App] Clear State';

    public type = ClearState.Type;

    constructor() {}
}

export type UserAction =
    | Login
    | LoginSuccess
    | LoginError
    | Logout
    | RestorePassword
    | RestorePasswordSuccess
    | RestorePasswordError
    | ClearState
