import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { MyErrorStateMatcher } from '../../lib/MyErrorStateMatcher';
import { User } from '../../model/User';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: Observable<{ users: User[] }>;
  subscription = new Subscription();
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private store: Store<{ auth: { users: User[] } }>,
    private router: Router
  ) {}

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.setSubscription();
  }

  login(): void {
    this.loginService.login(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
    );
  }

  checkForLoginErrors(user: User): void {
    const { username, password } = this.loginForm.controls;
    if (user.isAuthenticated) {
      this.router.navigateByUrl('/home');
      return;
    }
    if (user.username !== username.value) {
      username.setErrors({ auth: true });
      return;
    }
    if (user.password !== password.value) {
      password.setErrors({ auth: true });
    }
  }

  setSubscription(): void {
    this.users = this.store.select('auth');
    this.subscription.add(
      this.users.subscribe((state) => {
        this.checkForLoginErrors(state.users[0]);
      })
    );
  }
}
