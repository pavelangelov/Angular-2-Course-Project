import { Component, OnInit } from '@angular/core';

import { ViewModel } from '../registration/registration-model';

@Component({
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserDetailsComponent implements OnInit {
  private model: ViewModel;
  constructor() { 
    
  }

  ngOnInit() {
    //set login user in system

    // this.model = new ViewModel();
  }

  onSubmit() {
    // validate input parameters
    //    if valid -> send to server and register new user
    //    else -> show error message
    
    console.log("Input parameters:");
    console.log(this.model);
  }
}
