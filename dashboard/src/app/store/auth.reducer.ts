import { User } from '../model/User';
import * as AuthActions from './auth.actions';

export interface State {
  users: User[];
}
const initialState: State = {
  users: [new User('Ioannis Bregiannis', '12345')],
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN: {
      if (
        action.payload.username === state.users[0].username &&
        action.payload.password === state.users[0].password
      ) {
        const users: User[] = [...state.users];
        const newUser: User = { ...users[0] };
        newUser.isAuthenticated = true;
        users[0] = newUser;
        return {
          ...state,
          users,
        };
      }
    }
    default:
      return { ...state };
  }
}
