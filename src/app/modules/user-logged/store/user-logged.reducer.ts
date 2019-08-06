import {UserLoggedActions, UserLoggedActionTypes} from './user-logged.actions';

export interface UserLoggedState {
    // additional entities state properties
}

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

