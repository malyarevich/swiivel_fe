import { Action } from '@ngrx/store';
import { Period, PeriodSplitSet } from '../../../models/period/period.model';

export enum PeriodActionTypes {
  AddPeriod = '[Period] Add Period',
  ChangePeriod = '[Period] Change Period',
  AddSplitSet  = '[Period] Add split Set',
  ChangeSplitSet = '[Period] change split'
}

export class AddPeriod implements Action {
  readonly type = PeriodActionTypes.AddPeriod;

  constructor(public payload: Period[]) {}
}

export class ChangePeriod implements Action {
  readonly type = PeriodActionTypes.ChangePeriod;

  constructor(public payload: Period) {
  }
}

export class AddSplitSet implements Action {
  readonly type = PeriodActionTypes.AddSplitSet;

  constructor(public payload: PeriodSplitSet) {
  }
}

export class ChangeSplitSet implements Action {
  readonly type = PeriodActionTypes.ChangeSplitSet;

  constructor(public payload: {index: number, splitSet: PeriodSplitSet }) {
  }
}

export type PeriodActions =
  AddPeriod
  | AddSplitSet
  | ChangePeriod
  | ChangeSplitSet;
