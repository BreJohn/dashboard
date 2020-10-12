import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../model/User';
import { Login } from '../store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private store: Store<{ auth: { users: User[] } }>) {}

  login(username: string, password: string) {
    const user = new User(username, password);
    this.store.dispatch(new Login(user));
  }
}
