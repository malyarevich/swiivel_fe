import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State, Error, User} from './auth-store.models';

export const getError = (state: State): Error => state.error;
export const isLoading = (state: State): boolean => state.isLoading;
export const getUser = (state: State): User => state.user;
export const getUserToken = (state: State): string => state.user.access_token;

export const authStoreGetState: MemoizedSelector<State, State> = createFeatureSelector('auth');
export const authStoreGetError: MemoizedSelector<State, Error> = createSelector(authStoreGetState, getError);
export const authStoreIsLoading: MemoizedSelector<State, boolean> = createSelector(authStoreGetState, isLoading);
export const authStoreGetUser: MemoizedSelector<State, User> = createSelector(authStoreGetState, getUser);
export const authStoreGetUserToken: MemoizedSelector<State, string> = createSelector(authStoreGetState, getUserToken);
