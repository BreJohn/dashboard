import { AppUser } from 'src/app/model/AppUser';
import * as AuthActions from './auth.actions';

export interface State {
  appUsers: AppUser[];
}
const initialState: State = {
  appUsers: [new AppUser('Ioannis', '12345')],
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN: {
      if (
        action.payload.username === state.appUsers[0].username &&
        action.payload.password === state.appUsers[0].password
      ) {
        const users: AppUser[] = [...state.appUsers];
        const newUser: AppUser = { ...users[0] };
        newUser.isAuthenticated = true;
        users[0] = newUser;
        return {
          ...state,
          appUsers: users,
        };
      }
    }
    default:
      return { ...state };
  }
}
