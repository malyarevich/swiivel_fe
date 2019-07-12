import { Action } from '@ngrx/store';
import { Period } from '../../../models/period/period.model';

export enum PeriodActionTypes {
  AddPeriod = '[Period] Add Period',
  ChangePeriod = '[Period] Change Period',
}

export class AddPeriod implements Action {
  readonly type = PeriodActionTypes.AddPeriod;

  constructor(public payload: Period[]) {}
}

export class ChangePeriod implements Action {
  readonly type = PeriodActionTypes.ChangePeriod;

  constructor(public payload: Period ) {
  }
}

export type PeriodActions =
  AddPeriod
  | ChangePeriod;
