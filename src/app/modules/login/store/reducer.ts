import { UserAction, LoginSuccess, Logout } from './actions';
import { User } from '../rest';

export interface UserState {
    user: User | null;
}

export const initialState: UserState = {
    user: null,
};

export function reducer(state: UserState = initialState, action: UserAction) {
    if (action instanceof LoginSuccess) {
        const {user} = action;
        return { ...state, user };
    }
    if (action instanceof Logout) {
        return { ...state, user: null };
    }

    return state;
}
