import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/take';

import { UserService, PostService } from '../services/';
import { Notificator } from '../utils/';

@Component({
  providers: [UserService, PostService, Notificator],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: {};
  private posts: [{}];
  private username: string;
  private areShowedPosts: boolean = false;

  constructor(
    private service: UserService,
    private postService: PostService,
    private notificator: Notificator,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.take(1)
      .subscribe(data => {
        this.username = data['username'];
        let currentUser = localStorage.getItem('username_key');
        if (this.username === currentUser) {
          this.router.navigate(['/user/profile']);
        } else {
          this.service.getUserByUsername(this.username)
            .subscribe(res => {
              if (res.error) {
                this.notificator.showError('Load profile error', res.error);
                return;
              }

              this.user = res.result;
            });
        }
      });
  }

  showPosts() {
    if (!this.posts || !this.posts.length) {
      this.postService.getPosts(this.username)
        .subscribe(res => {
          if (res.error) {
            this.notificator.showError('Loading posts error', res.error);
            return;
          }

          this.areShowedPosts = true;
          this.posts = res.result;
        });
    } else {
      this.areShowedPosts = true;
    }
  }
  hidePosts() {
    this.areShowedPosts = false;
  }
}
