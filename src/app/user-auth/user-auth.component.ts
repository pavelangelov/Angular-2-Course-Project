import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from '../../../node_modules/crypto-js';

import { UserService } from '../services/user.service';
import { Notificator } from '../utils/';

@Component({
  providers: [Notificator],
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  private isLogged: boolean = false;
  private username: string;
  private image: string;
  private requests;

  public options;

  constructor(private router: Router, private userService: UserService, private notificator: Notificator) {
  }

  ngOnInit() {
    this.options = this.notificator.options;
    this.isLogged = this.userService.isLoggedIn();
    if (this.isLogged) {
      this.username = localStorage.getItem('username_key');
      this.image = localStorage.getItem('image_key');
      this.requests = localStorage.getItem('requests-count');
      this.isLogged = true;
    } else {
      this.router.navigate(['/home']);
    }
  }

  loginUser(username: string, password: string) {
    password = CryptoJS.SHA256(password).toString();
    this.userService.login(username, password)
      .subscribe((result) => {
        if (result.success) {
          this.username = localStorage.getItem('username_key');
          this.image = localStorage.getItem('image_key');
          this.requests = localStorage.getItem('requests-count');
          this.isLogged = true;

          this.notificator.showSuccess('Login', 'Success');

          this.router.navigate(['user']);
        } else {
          this.notificator.showError('Login error', result.error);
        }
      });
  }

  logoutUser() {
    this.isLogged = false;
    this.userService.logout()
      .subscribe((res) => {
        if (res && res.error) {
          this.notificator.showError('Logout error', res.error);
        }
      });
    this.router.navigate(['home']);
  }
  onChange(degree: boolean) {
    this.requests = this.requests -= 1;
  }
}
