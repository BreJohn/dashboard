import { Action } from '@ngrx/store';
import { AppUser } from '../../model/AppUser';

export const LOGIN = 'LOGIN';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: AppUser) {}
}

export type AuthActions = Login;
