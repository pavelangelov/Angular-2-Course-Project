import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/';
import { Notificator } from '../../utils/';

@Component({
  providers: [UserService, Notificator ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private user;

  constructor(private service: UserService, private notificator: Notificator) {
  }

  ngOnInit() {
    let username = localStorage.getItem('username_key');
    this.service.getUserByUsername(username)
      .subscribe(res => {
        if (res.error) {
          this.notificator.showError('Loading profile error', res.error);
          return;
        } else if (!res.success) {
          this.notificator.showError('Server is busy', 'Try again later');
          return;
        }
        this.user = res.result;
        console.log(this.user);
      });
  }

  confirm(event) {
    console.log('Confirm request');
    let requestId = event.toElement.id,
        currentUser = {
      username: this.user['username'],
      image: this.user['profileImage']
    };
    let request = this.user['requests'].find(r => r['_id'] === requestId),
      otherUser = {
        username: request['requestUser'],
        image: request['requestUserImage']
      };
    this.service.confirmRequest(currentUser, otherUser, requestId)
      .subscribe(res => {
        if (res.error) {
          this.notificator.showError('Confirm error', res.error);
          return;
        } else if (!res.success) {
          this.notificator.showError('Server is busy', 'Try again later');
          return;
        } else {
          this.notificator.showSuccess('Request', 'Confirmed');
          this.user = res.result;
        }
      });
  }

  hasRequests() {
    if (!this.user || !this.user['requests']) {
      return false;
    } else if (this.user['requests'].length < 1) {
      return false;
    }

    return true;
  }
}
