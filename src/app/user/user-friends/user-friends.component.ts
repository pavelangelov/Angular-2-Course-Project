import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/';
import { Notificator } from '../../utils/';

@Component({
  providers: [UserService, Notificator],
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {
  private user = {};
  private friends = [];

  constructor(private router: Router, private service: UserService, private notificator: Notificator) { }

  ngOnInit() {
    if (!localStorage.getItem('username_key')) {
      this.router.navigate(['/home']);
    } else {
      let username = localStorage.getItem('username_key');
      this.service.getUserByUsername(username)
        .subscribe(res => {
          if (res.error) {
            this.notificator.showError('Getting friends error', res.error);
            return;
          } else if (!res.success) {
            this.notificator.showError('Server is busy', 'Try again later');
            return;
          }

          this.user = res.result;
          this.friends = this.user['friends'];
        });
    }
  }

}
