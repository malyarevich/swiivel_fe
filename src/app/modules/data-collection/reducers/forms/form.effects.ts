import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FormState} from './form.reducer';
import {select, Store} from '@ngrx/store';
import {FormActionTypes, LoadForms, RequestForm, DeleteForm, EditForm, SendForm, FillForm} from './form.actions';
import {map, mergeMap, withLatestFrom,  catchError,  switchMap} from 'rxjs/operators';
import {FormService} from '../../form.service';
import { throwError} from 'rxjs';
import {selectEditedForm, selectFormById} from './form.selectors';
import {FieldActionTypes, LoadFields, UpdateField, EditField} from '../field/field.actions';
import {FieldState} from '../field/field.reducer';

@Injectable()
export class FormEffects {
  @Effect()
  loadForms$ = this.actions$
    .pipe(
      ofType<RequestForm>(FormActionTypes.RequestForm),
      switchMap(()=>this.formService.getFormsList(),),
      map(
          forms=>new LoadForms({forms})),
      catchError(err => {
        console.log('error loading all forms ', err);
        return throwError(err);
      })
    );
  // @Effect()
  // editFileds = this.actions$
  //   .pipe(
  //     ofType<UpdateField>(FieldActionTypes.UpdateField),
  //     switchMap(()=>this.formService.doFieldChanges(),),
  //     map(
  //         ress=>new EditField({id:''})),
  //     catchError(err => {
  //       console.log('error loading all forms ', err);
  //       return throwError(err);
  //     })
  //   );


   @Effect()
   deleteForm$ = this.actions$
  .pipe(
    ofType<DeleteForm>(FormActionTypes.DeleteForm),
    mergeMap((action)=>this.formService.deleteForm(action.payload.id)),
    map(res=> new RequestForm()),
    catchError(err => {
      console.log('error delete form ', err);
      return throwError(err);
    }))
   ;


@Effect()
sendForm$ = this.actions$
  .pipe(
    ofType<SendForm>(FormActionTypes.SendForm),
    withLatestFrom(this.store.pipe(select(selectEditedForm))),
    mergeMap(([id,formEdit])=> {
      return this.formService.sendForm(formEdit);
    }),
    map(res=> new RequestForm()),
    catchError(err => {
      console.log('error send form ', err);
      return throwError(err);
    }))
;

@Effect()
fillForm$ = this.actions$
  .pipe(
    ofType<FillForm>(FormActionTypes.FillForm),
switchMap(({form})=>this.formService.sendForm(form)),
    map(res=> new RequestForm()),
    catchError(err => {
      console.log('error send form ', err);
      return throwError(err);
    }))
;



@Effect()
editeForm$ = this.actions$
  .pipe(
    ofType<EditForm>(FormActionTypes.EditForm),
    withLatestFrom(this.store.pipe(select(selectEditedForm))),
    map(

      ([id,formEdit])=>new LoadFields({fields: formEdit.fields})
    ),
    catchError(err => {
      console.log('error editing form ', err);
      return throwError(err);
    }))
  ;



  constructor(private actions$: Actions,
              private store: Store<FormState>,
              private storeField: Store<FieldState>,
              private formService: FormService){}
}
