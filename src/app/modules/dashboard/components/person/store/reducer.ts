import {GetPersonsSuccess, PersonsAction} from './actions';

export interface PersonsState {
    persons: any;
}

export const initialState: PersonsState = {
    persons: null,
};

export function reducer(state: PersonsState = initialState, action: PersonsAction) {
    if (action instanceof GetPersonsSuccess) {
        const {persons} = action.data;
        return {...state, persons};
    }
    return state;
}
