import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from '../actions/user.actions';

export interface State {
  user: User | null;
  error: string | null;
}

export const initialState: State = {
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUserSuccess, (state, { user }) => ({ ...state, user })),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error })),
);
