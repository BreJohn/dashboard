import { User } from 'src/app/model/User';
import * as UserActions from './user.actions';

export interface State {
  users: User[];
}
const initialState: State = {
  users: [],
};

export function userReducer(
  state = initialState,
  action: UserActions.UserActions
) {
  switch (action.type) {
    case UserActions.ADD_USER: {
      const users = [...state.users];
      const newUsers = users.concat([action.payload]);
      return {
        ...state,
        users: newUsers,
      };
    }
    default:
      return { ...state };
  }
}
