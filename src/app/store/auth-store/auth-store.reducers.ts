import {Actions, ActionTypes} from './auth-store.actions';
import {State} from './auth-store.models';
import {initialState} from './auth-store.state';

export function AuthStoreReducers(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.RESTORE_LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload
      };
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false
      };
    case ActionTypes.RESTORE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.RESTORE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ActionTypes.RESTORE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordRestored: true,
        isLoading: false
      };
    case ActionTypes.LOGOUT_REQUEST:
      return initialState;
    default: {
      return state;
    }
  }
}
