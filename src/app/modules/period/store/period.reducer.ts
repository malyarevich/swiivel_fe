import * as moment from 'moment';

import { Period } from '../../../models/period/period.model';
import { PeriodActions, PeriodActionTypes } from './period.actions';

export interface PeriodState {
  periods: Period[];
  period: Period;
  savePeriodError?: { text: string, isOpen: boolean };
}

export const initialState: PeriodState = {
  periods: [],
  period: {
    name: 'new period',
    date_from: new Date(),
    date_to: moment(new Date(), 'DD-MM-YYYY').add(365, 'days').toDate(),
    duration: 366,
    split_sets: [{
      name: 'Financial',
      split_set_id: 1,
      error: { text: null, isBarErrorOpen: false, isTableErrorOpen: false },
      splits: [{
        name: '1 split',
        date_from: new Date(),
        date_to: moment(new Date(), 'DD-MM-YYYY').add(30, 'days').toDate(),
        split_id: 1,
        duration: 31
      }]
    }],
  },
  savePeriodError: { text: null, isOpen: false }
};

export function reducer(state = initialState, action: PeriodActions): PeriodState {
  switch (action.type) {
    case PeriodActionTypes.ChangePeriod: {
      return { ...state, period: { ...action.payload} };
    }
    case PeriodActionTypes.OpenCreatePeriodPage: {
      return { ...state, period: { ...action.payload} };
    }
    case PeriodActionTypes.GetPeriodsResponse: {
      return { ...state, periods: action.payload.data.periods };
    }
    case PeriodActionTypes.AddSplitSet: {
      // return { ...state, splitsSet: [...state.splitsSet, action.payload] };
      return { ...state, period: { ...state.period, split_sets: [...state.period.split_sets, action.payload] } };
    }
    case PeriodActionTypes.ChangeSplitSet: {
      const updatedSplitSet =
        [...state.period.split_sets].map((set) => set.split_set_id === action.payload.index ? action.payload.splitSet : set);
      // return { ...state, splitsSet: updatedSplitSet };
      return { ...state, period: { ...state.period, split_sets : updatedSplitSet } };
    }
    case PeriodActionTypes.DeleteSplitSet: {
      const updatedSplitSet =  [...state.period.split_sets].filter(item => item.split_set_id !== action.payload.index);
      // return { ...state, splitsSet: updatedSplitSet};
      return { ...state, period: { ...state.period, split_sets : updatedSplitSet } };
    }
    case PeriodActionTypes.ValidatePeriod: {
      return {...state, period: { ...state.period, error: action.payload} };
    }
    case PeriodActionTypes.ChangePeriodError: {
      return { ...state, savePeriodError: action.payload };
    }
    default: {
      return state;
    }
  }
}
