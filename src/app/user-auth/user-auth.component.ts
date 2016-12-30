import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  private isLogged: boolean = false;
  private username: string;
  private image: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.isLogged = this.userService.isLoggedIn();
  }

  loginUser(username: string, password: string) {
    this.userService.login(username, password)
        .subscribe((result) => {
          if (result) {
            this.username = localStorage.getItem('username_key');
            this.image = localStorage.getItem('image_key');
            this.isLogged = true;
          }
        });
  }

  logoutUser() {
    this.isLogged = false;
    this.userService.logout();
  }
}
