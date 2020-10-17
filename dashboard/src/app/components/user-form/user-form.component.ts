import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Email: [null, Validators.required],
    });
  }

  submitUser() {
    const { FirstName, LastName, PhoneNumber, Email } = this.userForm.controls;
    const newUser = new User(
      FirstName.value,
      LastName.value,
      PhoneNumber.value,
      Email.value
    );
    this.userService.addUser(newUser);
    this.userForm.reset();
  }
}
