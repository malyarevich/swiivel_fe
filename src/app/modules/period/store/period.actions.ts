import { Action } from '@ngrx/store';
import { Period, PeriodSplitSet } from 'src/app/models/period/period.model';

export enum PeriodActionTypes {
  AddPeriod = '[Period] Add Period',
  ChangePeriod = '[Period] Change Period',
  OpenCreatePeriodPage  = '[Period] Open Create Period Page',
  CreatePeriodRequest = '[Period] Create Period Request',
  ChangePeriodError = '[Period] Change Period Error',
  GetPeriodsRequest = '[Period] Get Periods Request',
  GetPeriodsResponse = '[Period] Get Periods Response',
  AddSplitSet  = '[Period] Add split Set',
  ValidatePeriod = '[Period] Validate period',
  ChangeSplitSet = '[Period] Change split',
  DeleteSplitSet = '[Period] Delete split',
  ChangeEditPeriodId = '[Period] Edit Period',
  DeletePeriod = '[Period] Delete period',
  UpdateExistingPeriodRequest = '[Period] Update existing period'
}

export class AddPeriod implements Action {
  readonly type = PeriodActionTypes.AddPeriod;

  constructor(public payload: Period[]) {}
}

export class OpenCreatePeriodPage implements Action {
  readonly type = PeriodActionTypes.OpenCreatePeriodPage;

  constructor(public payload: Period) {}
}

export class ChangePeriod implements Action {
  readonly type = PeriodActionTypes.ChangePeriod;

  constructor(public payload: Period) {}
}

export class CreatePeriodRequest implements Action {
  readonly type = PeriodActionTypes.CreatePeriodRequest;

  constructor(public payload: any) {
  }
}

export class UpdateExistingPeriodRequest implements Action {
  readonly type = PeriodActionTypes.UpdateExistingPeriodRequest;

  constructor(public payload: any) {
  }
}

export class ChangePeriodError implements Action {
  readonly type = PeriodActionTypes.ChangePeriodError;

  constructor(public payload: any) {}
}

export class GetPeriodsRequest implements Action {
  readonly type = PeriodActionTypes.GetPeriodsRequest;

  constructor() {}
}

export class GetPeriodsResponse implements Action {
  readonly type = PeriodActionTypes.GetPeriodsResponse;

  constructor(public payload: Period[]) {}
}

export class ValidatePeriod implements Action {
  readonly type = PeriodActionTypes.ValidatePeriod;

  constructor(public payload: string[]) {}
}

export class AddSplitSet implements Action {
  readonly type = PeriodActionTypes.AddSplitSet;

  constructor(public payload: PeriodSplitSet) {}
}

export class ChangeSplitSet implements Action {
  readonly type = PeriodActionTypes.ChangeSplitSet;

  constructor(public payload: { index: number, splitSet: PeriodSplitSet }) {}
}

export class DeleteSplitSet implements Action {
  readonly type = PeriodActionTypes.DeleteSplitSet;

  constructor(public payload: { index: number }) {}
}

export class DeletePeriod implements Action {
  readonly type = PeriodActionTypes.DeletePeriod;

  constructor(public payload: number) {}
}

export class ChangeEditPeriodId implements Action {
  readonly type = PeriodActionTypes.ChangeEditPeriodId;

  constructor(public payload: number) {}
}

export type PeriodActions =
  AddPeriod
  | AddSplitSet
  | ChangePeriod
  | ChangeSplitSet
  | DeleteSplitSet
  | DeletePeriod
  | CreatePeriodRequest
  | ChangeEditPeriodId
  | OpenCreatePeriodPage
  | ValidatePeriod
  | GetPeriodsRequest
  | GetPeriodsResponse
  | ChangePeriodError
  | UpdateExistingPeriodRequest;
