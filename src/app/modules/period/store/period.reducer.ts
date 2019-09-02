import * as moment from 'moment';
import { PeriodActions, PeriodActionTypes } from './period.actions';
import { PeriodState } from './period.state';

export const initialState: PeriodState = {
  periods: [],
  period: {
    name: 'new period',
    date_from: new Date(),
    date_to: moment(new Date(), 'DD-MM-YYYY').add(365, 'days').toDate(),
    duration: 366,
    split_sets: [{
      name: 'Financial',
      id: 1,
      error: { text: null, isBarErrorOpen: false, isTableErrorOpen: false },
      splits: [{
        name: '1 split',
        date_from: new Date(),
        date_to: moment(new Date(), 'DD-MM-YYYY').add(30, 'days').toDate(),
        id: 1,
        duration: 31
      }]
    }],
  },
  savePeriodError: { text: null, isOpen: false },
  editPeriodId: null,
  isPeriodsLoading: false
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
      return { ...state, periods: action.payload };
    }
    case PeriodActionTypes.AddSplitSet: {
      return { ...state, period: { ...state.period, split_sets: [...state.period.split_sets, action.payload] } };
    }
    case PeriodActionTypes.ChangeSplitSet: {
      const updatedSplitSet =
        [...state.period.split_sets].map((set) => set.id === action.payload.index ? action.payload.splitSet : set);
      return { ...state, period: { ...state.period, split_sets : updatedSplitSet } };
    }
    case PeriodActionTypes.DeleteSplitSet: {
      const updatedSplitSet =  [...state.period.split_sets].filter(item => item.id !== action.payload.index);
      return { ...state, period: { ...state.period, split_sets : updatedSplitSet } };
    }
    case PeriodActionTypes.ValidatePeriod: {
      return {...state, period: { ...state.period, error: action.payload} };
    }
    case PeriodActionTypes.ChangePeriodError: {
      return { ...state, savePeriodError: action.payload };
    }
    case PeriodActionTypes.ChangeEditPeriodId: {
      return { ...state, editPeriodId: action.payload };
    }
    case PeriodActionTypes.LoadPeriods: {
      return { ...state, isPeriodsLoading: action.payload };
    }
    default: {
      return state;
    }
  }
}
