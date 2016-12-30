import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { ViewModel } from './registration-model';
import { UserService } from '../user.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private model: ViewModel;

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

  constructor(private userService: UserService, private _service: NotificationsService) {
    this.model = new ViewModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    // validate input parameters
    //    if valid -> send to server and register new user
    //    else -> show error message
    this.userService.register(this.model)
      .subscribe(res => {
        if (res.success) {
          this._service.success(
            'Registration',
            'Completed',
            {
              timeOut: 2000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
            });
        } else {
          this._service.error(
            'Registration error',
            res.error,
            {
              timeOut: 3000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false
            });
        }
      });
  }
}
