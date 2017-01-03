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
  private posts = [];
  private username: string;
  private areShowedPosts: boolean = false;
  private currentUser;
  private postContent: string;

  constructor(
    private service: UserService,
    private postService: PostService,
    private notificator: Notificator,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('username_key');
    this.route.params.take(1)
      .subscribe(data => {
        this.username = data['username'];
        if (this.username === this.currentUser) {
          this.router.navigate(['/user/profile']);
        } else {
          this.service.getUserByUsername(this.username)
            .subscribe(res => {
              if (res.error) {
                this.notificator.showError('Load profile error', res.error);
                return;
              }

              if (res.result['friends'].some(f => f['username'] === this.currentUser)) {
                res.result.isFriend = true;
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

  sendFriendshiRequest() {
    let request = {
      requestUser: this.currentUser,
      requestUserImage: localStorage.getItem('image_key')
    };

    this.service.sendRequest(this.user['username'], request)
      .subscribe(res => {
        if (res.error) {
          this.notificator.showError('Sending request error', res.error);
          return;
        } else if (!res.success) {
          this.notificator.showError('Sending request error', res.message);
          return;
        }

        this.notificator.showSuccess('Request send', 'Successfully');
      });
  }

  createPost() {
    let  targetUser = this.user['username'];

    this.postService.createPost(this.currentUser, this.postContent, targetUser)
      .subscribe(res => {
        if (res.error) {
          this.notificator.showError('Creating post error', res.error);
          return;
        } else if (!res.success) {
          this.notificator.showError('Sending request error', res.message);
          return;
        }

        this.notificator.showSuccess('Post created', 'Successfully');
        this.posts.unshift(res.result);
      });
  }
}
