import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Store} from '@ngrx/store';
import {PersonService} from "../../../../../services/person/person.service";
import {GetPersons, GetPersonsSuccess} from "./actions";

@Injectable()
export class Effects {
    constructor(
        private readonly actions$: Actions,
        private readonly personService: PersonService,
        // private readonly router: Router,
        // private readonly store: Store<any>
    ) {
    }

    @Effect()
    getPersons$ = this.actions$.pipe(
        ofType<GetPersons>(GetPersons.Type),
        switchMap(() => this.personService.getPersons()),
        map(
            persons => {
                new GetPersonsSuccess({persons})
            }),
        catchError(err => {
            console.log('error loading all forms ', err);
            return throwError(err);
        })
    );

    // @Effect({ dispatch: false })
    // loginSuccess$ = this.actions$.pipe(
    //     ofType<LoginSuccess>(LoginSuccess.Type),
    //     tap(() => {
    //         this.router.navigate(['/']);
    //     })
    // );
    //
    // @Effect({ dispatch: false })
    // logout$ = this.actions$.pipe(
    //     ofType<GetPersons>(GetPersons.Type),
    //     tap(() => {
    //         this.userService.logout();
    //         this.router.navigate(['/login']);
    //     })
    // );
}
