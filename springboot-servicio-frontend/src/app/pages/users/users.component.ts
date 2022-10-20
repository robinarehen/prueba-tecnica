import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: UserInterface[] = [];

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.gerAllUsers().subscribe(
      data => {
        this.listUsers = data;
      },
      error => {
        if(error.status == 401) {
          this.router.navigateByUrl('pages');
        }
      }
    );
  }
}
