import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/';
import { Notificator } from '../../utils/';

@Component({
  providers: [UserService, Notificator],
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.css']
})
export class UserGalleryComponent implements OnInit {
  private user = {};
  private images = [];

  constructor(private router: Router, private service: UserService, private notificator: Notificator) { }

  ngOnInit() {
    if (!localStorage.getItem('username_key')) {
      this.router.navigate(['/home']);
    } else {
      let username = localStorage.getItem('username_key');
      this.service.getUserByUsername(username)
        .subscribe(res => {
          if (res.error) {
            this.notificator.showError('Loading gallery error', res.error);
            return;
          } else if (!res.success) {
            this.notificator.showError('Server is busy', 'Try again later');
            return;
          }

          this.user = res.result;
          this.images = this.user['images'];
        });
    }
  }

  setProfilePicture(event) {
    let imageUrl = event.toElement.id;
    this.service.updateProfilePicture(this.user['username'], imageUrl)
      .subscribe(res => {
        if (res.error) {
          this.notificator.showError('Updating profile error', res.error);
          return;
        } else if (!res.success) {
          this.notificator.showError('Server is busy', 'Try again later');
          return;
        }

        this.notificator.showSuccess('Profile picture', 'Updated successfully');
        this.user = res.result;
        localStorage.setItem('image_key', this.user['profileImage']);
        this.router.navigate(['/']);
      });
  }
}
