import {Action} from '@ngrx/store';
import {UserLogged} from './user-logged.model';

export enum UserLoggedActionTypes {
    RequestUserLogged = '[User] Request Logged User',
    AddUser = '[User] Add Logged User',
}

export class RequestUserLogged implements Action {
    readonly type = UserLoggedActionTypes.RequestUserLogged;
}

export class AddUser implements Action {
    readonly type = UserLoggedActionTypes.AddUser;

    constructor(public payload: { user: UserLogged }) {
    }
}

export type UserLoggedActions =
    RequestUserLogged
    | AddUser;
