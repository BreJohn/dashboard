import { Action } from '@ngrx/store';
import { User } from 'src/app/model/User';

export const ADD_USER = 'ADD_USER';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {}
}

export type UserActions = AddUser;
