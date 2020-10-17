import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppUser } from '../model/AppUser';
import { Login } from '../store/auth/auth.actions';
import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private store: Store<fromApp.AppState>) {}

  login(username: string, password: string) {
    const user = new AppUser(username, password);
    this.store.dispatch(new Login(user));
  }
}
