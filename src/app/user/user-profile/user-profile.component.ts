import { Component, OnInit } from '@angular/core';

import { ViewModel } from '../../registration/registration-model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private model: ViewModel;
  private image = localStorage.getItem('image_key');
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    //set login user in system

    this.model = new ViewModel();
    this.model.username = localStorage.getItem('username_key');

    this.userService.getUserByUserName(this.model.username);
  }

  onSubmit() {
    // validate input parameters
    //    if valid -> send to server and register new user
    //    else -> show error message

    console.log('Input parameters:');
    console.log(this.model);
  }
}
