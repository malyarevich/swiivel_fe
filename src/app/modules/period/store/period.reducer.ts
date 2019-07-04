import { Period } from '../../../models/period/period.model';
import { PeriodActions, PeriodActionTypes } from './period.actions';


export interface PeriodState {
  periods: Period[];
  period: Period;
}

export const initialState: PeriodState = {
  periods: [],
  period: {
    name: 'test',
    date_from: new Date(),
    date_to:  new Date(),
    duration: 1
  },
};

export function reducer(
  state = initialState,
  action: PeriodActions
): PeriodState {
  switch (action.type) {
    case PeriodActionTypes.ChangePeriod: {
      return { ...state, period: { ...action.payload} };
    }
    default: {
      return state;
    }
  }
}
