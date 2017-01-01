import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

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

  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };

  constructor(private router: Router, private userService: UserService, private _service: NotificationsService) {
  }

  ngOnInit() {
    this.isLogged = this.userService.isLoggedIn();
    if (this.isLogged) {
      this.username = localStorage.getItem('username_key');
      this.image = localStorage.getItem('image_key');
      this.isLogged = true;
    }
  }

  loginUser(username: string, password: string) {
    this.userService.login(username, password)
      .subscribe((result) => {
        if (result.success) {
          this.username = localStorage.getItem('username_key');
          this.image = localStorage.getItem('image_key');
          this.isLogged = true;

          this._service.success(
            'Login',
            'Success',
            {
              timeOut: 2000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false,
              maxLength: 10
            });
          this.router.navigate(['user']);
        } else {
          this._service.error(
            'Login error',
            result.error,
            {
              timeOut: 3000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
            });
        }
      });
  }

  logoutUser() {
    this.isLogged = false;
    this.userService.logout();
    this.router.navigate(['home']);
  }
}
