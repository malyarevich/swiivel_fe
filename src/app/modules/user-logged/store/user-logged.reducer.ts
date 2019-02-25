import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {UserLogged} from './user-logged.model';
import {UserLoggedActions, UserLoggedActionTypes} from './user-logged.actions';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromForm from "../../data-collection/reducers/forms/form.reducer";
import {selectFormsState} from "../../data-collection/reducers/forms/form.selectors";
import {FormState} from "../../data-collection/reducers/forms/form.reducer";

export interface UserLoggedState {
    // additional entities state properties
}

// export const adapter: EntityAdapter<UserLogged> = createEntityAdapter<UserLogged>();

export const initialState: UserLoggedState = {};

export function reducer(
    state = initialState,
    action: UserLoggedActions
): UserLoggedState {
    switch (action.type) {
        case UserLoggedActionTypes.AddUser: {
            const {user} = action.payload;
            return {
                ...state,
                user
            };
        }

        default: {
            return state;
        }
    }
}

// export const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal,
// } = adapter.getSelectors();

// export const getUserLogged = (state: UserLoggedState) => state.ids;
// export const selectUserLoggedState = createFeatureSelector<UserLoggedState>("user-logged");
// export const selectUserLogged = createSelector(
//     'user-logged',
//     selectIds
// );

