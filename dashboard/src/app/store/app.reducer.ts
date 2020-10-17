import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
import * as fromUser from './user/user.reducer';

export interface AppState {
  users: fromUser.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  users: fromUser.userReducer,
};
