import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ViewModel } from '../../registration/registration-model';

@Component({
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem('username_key')) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/user/home']);
    }
  }
}
