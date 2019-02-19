import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Person } from '../person.model';
import {FormActionTypes} from '../../../../data-collection/reducers/forms/form.actions';

export enum PersonActionTypes {
  LoadPersons = '[Person] Load Persons',
  RequestPerson = '[Person] RequestPerson',
  AddPerson = '[Person] Add Person',
  UpsertPerson = '[Person] Upsert Person',
  AddPersons = '[Person] Add Persons',
  UpsertPersons = '[Person] Upsert Persons',
  UpdatePerson = '[Person] Update Person',
  UpdatePersons = '[Person] Update Persons',
  DeletePerson = '[Person] Delete Person',
  DeletePersons = '[Person] Delete Persons',
  ClearPersons = '[Person] Clear Persons'
}


export class RequestPerson implements Action {
  readonly type = PersonActionTypes.RequestPerson;
}

export class LoadPersons implements Action {
  readonly type = PersonActionTypes.LoadPersons;

  constructor(public payload: { persons: Person[] }) {}
}

export class AddPerson implements Action {
  readonly type = PersonActionTypes.AddPerson;

  constructor(public payload: { person: Person }) {}
}

export class UpsertPerson implements Action {
  readonly type = PersonActionTypes.UpsertPerson;

  constructor(public payload: { person: Person }) {}
}

export class AddPersons implements Action {
  readonly type = PersonActionTypes.AddPersons;

  constructor(public payload: { persons: Person[] }) {}
}

export class UpsertPersons implements Action {
  readonly type = PersonActionTypes.UpsertPersons;

  constructor(public payload: { persons: Person[] }) {}
}

export class UpdatePerson implements Action {
  readonly type = PersonActionTypes.UpdatePerson;

  constructor(public payload: { person: Update<Person> }) {}
}

export class UpdatePersons implements Action {
  readonly type = PersonActionTypes.UpdatePersons;

  constructor(public payload: { persons: Update<Person>[] }) {}
}

export class DeletePerson implements Action {
  readonly type = PersonActionTypes.DeletePerson;

  constructor(public payload: { id: string }) {}
}

export class DeletePersons implements Action {
  readonly type = PersonActionTypes.DeletePersons;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPersons implements Action {
  readonly type = PersonActionTypes.ClearPersons;
}

export type PersonActions =
 LoadPersons
 | AddPerson
  | RequestPerson
 | UpsertPerson
 | AddPersons
 | UpsertPersons
 | UpdatePerson
 | UpdatePersons
 | DeletePerson
 | DeletePersons
 | ClearPersons;
