import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {IUser} from '../IUser';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(private usersService: UserService) {
    this.users$ = this.usersService.getUsers();
  }

  ngOnInit() {

  }

}
