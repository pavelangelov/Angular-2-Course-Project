import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { ViewModel } from './registration-model';
import { UserService } from '../user.service';
import { Validator } from '../validator';

@Component({
  providers: [Validator],
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

  constructor(private userService: UserService, private validator: Validator, private _service: NotificationsService) {
    this.model = new ViewModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    try {
      this.validator.validateCredentials(this.model.username, this.model.password);
    } catch (error) {
      this.showError('Registration error', error.message);
      return;
    }

    try {
      this.validator.validateName(this.model.firstname, 'Firstname');
      this.validator.validateName(this.model.lastname, 'Lastname');
    } catch (error) {
      this.showError('Registration error', error.message);
      return;
    }

    this.userService.register(this.model)
      .subscribe(res => {
        if (res.success) {
          this.showSuccess('Registration', 'Completed');
        } else {
          this.showError('Registration error', res.error);
        }
      });
  }

  private showSuccess(title: string, content: string) {
    this._service.success(
      title,
      content,
      {
        timeOut: 2000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false
      });
  }

  private showError(title: string, content: string) {
    this._service.error(
      title,
      content,
      {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false
      });
  }
}
