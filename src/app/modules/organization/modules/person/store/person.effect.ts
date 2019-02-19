import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {PersonState} from './person.reducer';
import {Store} from '@ngrx/store';
import {LoadPersons, PersonActionTypes, RequestPerson} from './person.actions';
import {PersonService} from '../services/person.service';


@Injectable()
export class PersonEffects {
  @Effect()
  loadForms$ = this.actions$
    .pipe(
      ofType<RequestPerson>(PersonActionTypes.RequestPerson),
      switchMap(() => this.personeSevice.getPersons(),),
      map(
        persons => new LoadPersons({persons})),
      catchError(err => {
        console.log('error loading all person ', err);
        return throwError(err);
      })
    );

  constructor(private actions$: Actions,
              private personeSevice: PersonService,
              private personStore$: Store<PersonState>){}

}
