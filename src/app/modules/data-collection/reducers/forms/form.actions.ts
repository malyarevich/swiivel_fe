import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Form} from './form.model';

export enum FormActionTypes {
  RequestForm = '[Form] Reques Form List',
  LoadForms = '[Form] Load Forms',
  EditForm = '[Form] Edit Form',
  AddForm = '[Form] Add Form',
  SendForm = '[Form] Send Form',
  UpdateForm = '[Form] Update Form',
  DeleteForm = '[Form] Delete Form'
}

export class LoadForms implements Action {
  readonly type = FormActionTypes.LoadForms;

  constructor(public payload: { forms: Form[] }) {
  }
}


export class RequestForm implements Action {
  readonly type = FormActionTypes.RequestForm;
}
export class SendForm implements Action {
  readonly type = FormActionTypes.SendForm;

}

export class AddForm implements Action {
  readonly type = FormActionTypes.AddForm;


}


export class UpdateForm implements Action {
  readonly type = FormActionTypes.UpdateForm;

  constructor(public payload: { form: Update<Form> }) {
  }
}

export class EditForm implements Action {
  readonly type = FormActionTypes.EditForm;

  constructor(public payload: { id: string }) {
  }
}
export class DeleteForm implements Action {
  readonly type = FormActionTypes.DeleteForm;

  constructor(public payload: { id: string }) {
  }
}


export type FormActions =
  LoadForms
  | RequestForm
  | AddForm
  | SendForm
  | EditForm
  | UpdateForm
  | DeleteForm;
