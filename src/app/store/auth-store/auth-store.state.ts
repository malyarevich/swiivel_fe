import { State } from './auth-store.models';

export const initialState: State = {
  user: null,
  passwordRestored: false,
  isLoading: false,
  error: null
};
