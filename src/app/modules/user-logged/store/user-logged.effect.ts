import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {AddUser, RequestUserLogged, UserLoggedActionTypes} from "./user-logged.actions";
import {UserLoggedService} from "../user-logged.service";


@Injectable()
export class UserLoggedEffects {

    constructor(private actions$: Actions,
                private userLoggedService: UserLoggedService) {
    }

    @Effect()
    loadUserLogged$ = this.actions$
        .pipe(
            ofType<RequestUserLogged>(UserLoggedActionTypes.RequestUserLogged),
            switchMap(() => this.userLoggedService.getUserLogged()),
            map(
                user => new AddUser({user})),
            catchError(err => {
                console.log('error loading logged user ', err);
                return throwError(err);
            })
        );
}
