import { Period, PeriodSplitSet } from '../../../models/period/period.model';
import { PeriodActions, PeriodActionTypes } from './period.actions';
import * as moment from 'moment';

export interface PeriodState {
  period: Period;
  splitsSet: PeriodSplitSet[];
}

export const initialState: PeriodState = {
  period: {
    name: 'new period',
    date_from: new Date(),
    date_to: moment(new Date(), 'DD-MM-YYYY').add(365, 'days').toDate(),
    duration: 366
  },
  splitsSet: [{
    name: 'Financial',
    split_set_id: 1,
    splits: [{
      name: '1 split',
      date_from: new Date(),
      date_to: moment(new Date(), 'DD-MM-YYYY').add(30, 'days').toDate(),
      split_id: 1,
      duration: 31
    }]
  }]
};

export function reducer(state = initialState, action: PeriodActions): PeriodState {
  switch (action.type) {
    case PeriodActionTypes.ChangePeriod: {
      return { ...state, period: { ...action.payload} };
    }
    case PeriodActionTypes.AddSplitSet: {
      return { ...state, splitsSet: [...state.splitsSet, action.payload] };
    }
    case PeriodActionTypes.ChangeSplitSet: {
      const updatedSplitSet = [...state.splitsSet];
      updatedSplitSet.map((set) => set.split_set_id === action.payload.index ? action.payload.splitSet : set);
      return { ...state, splitsSet: updatedSplitSet };
    }
    default: {
      return state;
    }
  }
}
