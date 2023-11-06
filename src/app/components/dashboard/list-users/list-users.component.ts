import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{
  usersList: any[] = [];
  loading = true;

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._usersService.getUsers().subscribe(data => {
      this.usersList = data;
      this.loading = false;
    })
  }
}
