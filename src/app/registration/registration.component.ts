import { Component, OnInit } from '@angular/core';

import { ViewModel} from './registration-model';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private model: ViewModel;
  constructor() { 
    this.model = new ViewModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    // validate input parameters
    //    if valid -> send to server and register new user
    //    else -> show error message
    
    console.log("Input parameters:");
    console.log(this.model);
  }
}
