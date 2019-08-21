import { Action } from '@ngrx/store';
import { Period, PeriodSplitSet } from 'src/app/models/period/period.model';
import { GetPeriodResponse } from 'src/app//models/period/get-period-response';

export enum PeriodActionTypes {
  AddPeriod = '[Period] Add Period',
  ChangePeriod = '[Period] Change Period',
  OpenCreatePeriodPage  = '[Period] Open Create Period Page',
  CreatePeriodRequest = '[Period] Create Period Request',
  CreatePeriodResponse = '[Period] Create Period Response',
  ChangePeriodError = '[Period] Change Period Error',
  GetPeriodsRequest = '[Period] Get Periods Request',
  GetPeriodsResponse = '[Period] Get Periods Response',
  AddSplitSet  = '[Period] Add split Set',
  ValidatePeriod = '[Period] Validate period',
  ChangeSplitSet = '[Period] Change split',
  DeleteSplitSet = '[Period] Delete split'
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

export class CreatePeriodResponse implements Action {
  readonly type = PeriodActionTypes.CreatePeriodResponse;

  constructor(public payload: any) {}
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

  constructor(public payload: GetPeriodResponse) {}
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

export type PeriodActions =
  AddPeriod
  | AddSplitSet
  | ChangePeriod
  | ChangeSplitSet
  | DeleteSplitSet
  | CreatePeriodRequest
  | CreatePeriodResponse
  | OpenCreatePeriodPage
  | ValidatePeriod
  | GetPeriodsRequest
  | GetPeriodsResponse
  | ChangePeriodError;
