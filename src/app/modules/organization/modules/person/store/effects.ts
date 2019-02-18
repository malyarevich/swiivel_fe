import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {PersonService} from "../services/person.service";
import {GetPersons, GetPersonsSuccess} from "./actions";

@Injectable()
export class Effects {
    constructor(
        private readonly actions$: Actions,
        private readonly personService: PersonService,
    ) {
    }

    @Effect()
    getPersons$ = this.actions$.pipe(
        ofType<GetPersons>(GetPersons.Type),
        switchMap(() => {
            return this.personService.getPersons().pipe(
                map((persons) => new GetPersonsSuccess({persons})),
                // catchError(error => of(new GetPersonsError({error})))
            );
        })
    );
}
