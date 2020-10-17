import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { User } from '../model/User';
import { AddUser } from '../store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store<fromApp.AppState>) {}

  addUser(user: User) {
    this.store.dispatch(new AddUser(user));
  }

  getUsers() {
    return this.store.select('users');
  }
}
