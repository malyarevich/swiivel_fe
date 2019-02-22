import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {UserLogged} from './user-logged.model';
import {UserLoggedActions, UserLoggedActionTypes} from './user-logged.actions';

export interface UserLoggedState extends EntityState<UserLogged> {
    // additional entities state properties
}

export const adapter: EntityAdapter<UserLogged> = createEntityAdapter<UserLogged>();

export const initialState: UserLoggedState = adapter.getInitialState({
    // additional entity state properties
});

export function reducer(
    state = initialState,
    action: UserLoggedActions
): UserLoggedState {
    switch (action.type) {
        case UserLoggedActionTypes.AddUser: {
            return adapter.addOne(action.payload.user, state);
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
