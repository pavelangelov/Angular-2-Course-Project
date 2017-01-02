import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { ViewModel } from './registration-model';
import { UserService } from '../services/user.service';
import { Validator, Notificator } from '../utils';

@Component({
  providers: [Validator, Notificator],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private model: ViewModel;

  constructor(private userService: UserService, private validator: Validator, private notificator: Notificator) {
    this.model = new ViewModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    try {
      this.validator.validateCredentials(this.model.username, this.model.password);
    } catch (error) {
      this.notificator.showError('Registration error', error.message);
      return;
    }

    try {
      this.validator.validateName(this.model.firstname, 'Firstname');
      this.validator.validateName(this.model.lastname, 'Lastname');
    } catch (error) {
      this.notificator.showError('Registration error', error.message);
      return;
    }

    this.userService.register(this.model)
      .subscribe(res => {
        if (res.success) {
          this.notificator.showSuccess('Registration', 'Completed');
        } else {
          this.notificator.showError('Registration error', res.error);
        }
      });
  }
}
