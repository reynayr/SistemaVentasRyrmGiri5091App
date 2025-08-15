import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: false,
})
export class UserComponent implements OnInit {
  users: any[] = [];
  newUserName: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    if (!this.newUserName.trim()) return;
    this.userService.addUser({ name: this.newUserName }).subscribe(() => {
      this.newUserName = '';
      this.loadUsers();
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
