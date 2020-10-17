import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { moveItemInPlace } from '../../lib/arrayFunctions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  @ViewChild('table') table: MatTable<User>;

  public userHeaders = ['FirstName', 'LastName', 'PhoneNumber', 'Email'];
  public users: User[] = [];
  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((state) => (this.users = state.users));
  }

  drop(event: CdkDragDrop<User[]>) {
    const users = [...event.container.data];
    this.users = moveItemInPlace(
      users,
      event.previousIndex,
      event.currentIndex
    );
    this.table.renderRows();
  }
}
