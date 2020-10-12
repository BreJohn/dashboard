import { Action } from '@ngrx/store';
import { User } from '../model/User';

export const LOGIN = 'LOGIN';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: User) {}
}

export type AuthActions = Login;
