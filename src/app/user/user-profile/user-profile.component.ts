import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserService } from '../../services/';
import { Notificator } from '../../utils/';

@Component({
  providers: [UserService, Notificator ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private user;
  private fileToUpload;
  private addPhotoShown = false;

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
      });
  }

  confirm(event) {
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
          console.log(this.user);
          localStorage.setItem('requests-count', this.user['requests'].length);
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

  toggleAddPhoto() {
    this.addPhotoShown = !this.addPhotoShown;
  }

  onChange(event) {
    this.fileToUpload = event.srcElement.files[0];
  }

  upload() {
    if (this.fileToUpload['type'].indexOf('image') < 0) {
      this.notificator.showError('Invalid file', 'Must choose image file.');
      return;
    }

    this.service.uploadImage(this.fileToUpload, this.user['username'])
      .subscribe(res => {
        if (res.error) {
          this.notificator.showError('Upload image error', res.error);
          return;
        } else if (!res.result) {
          this.notificator.showError('Server is busy', 'Try again later');
          return;
        }

        this.notificator.showSuccess('Photo uploaded', 'Successfully');
        console.log(res.result);
      });
  }
}
