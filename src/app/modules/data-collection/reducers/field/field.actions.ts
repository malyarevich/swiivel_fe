import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Field} from './field.model';

export enum FieldActionTypes {
  LoadFields = '[Field] Load Fields',
  AddField = '[Field] Add Field',
  UpsertField = '[Field] Upsert Field',
  AddFields = '[Field] Add Fields',
  UpsertFields = '[Field] Upsert Fields',
  UpdateField = '[Field] Update Field',
  UpdateFields = '[Field] Update Fields',
  DeleteField = '[Field] Delete Field',
  EditField = '[Field] Edit Field',
  DeleteFields = '[Field] Delete Fields',
  ClearFields = '[Field] Clear Fields'
}

export class LoadFields implements Action {
  readonly type = FieldActionTypes.LoadFields;

  constructor(public payload: { fields: Field[] }) {
  }
}

export class AddField implements Action {
  readonly type = FieldActionTypes.AddField;

  constructor(public payload: { field: Field }) {
  }
}

export class UpsertField implements Action {
  readonly type = FieldActionTypes.UpsertField;

  constructor(public payload: { field: Field }) {
  }
}

export class AddFields implements Action {
  readonly type = FieldActionTypes.AddFields;

  constructor(public payload: { fields: Field[] }) {
  }
}

export class UpsertFields implements Action {
  readonly type = FieldActionTypes.UpsertFields;

  constructor(public payload: { fields: Field[] }) {
  }
}

export class UpdateField implements Action {
  readonly type = FieldActionTypes.UpdateField;

  constructor(public payload: { field: Update<Field> }) {
  }
}

export class UpdateFields implements Action {
  readonly type = FieldActionTypes.UpdateFields;

  constructor(public payload: { fields: Update<Field>[] }) {
  }
}

export class DeleteField implements Action {
  readonly type = FieldActionTypes.DeleteField;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteFields implements Action {
  readonly type = FieldActionTypes.DeleteFields;

  constructor(public payload: { ids: string[] }) {
  }
}

export class ClearFields implements Action {
  readonly type = FieldActionTypes.ClearFields;
}


export class EditField implements Action {
  readonly type = FieldActionTypes.EditField;

  constructor(public payload: { id: string }) {
  }
}


export type FieldActions =
  LoadFields
  | AddField
  | UpsertField
  | AddFields
  | UpsertFields
  | UpdateField
  | UpdateFields
  | DeleteField
  | DeleteFields
  | ClearFields
  | EditField;
