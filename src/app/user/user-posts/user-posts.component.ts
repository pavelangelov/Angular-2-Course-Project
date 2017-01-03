import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs/Rx';
import { } from 'rxjs/add/operator/map';

import { Notificator } from '../../utils/';
import { PostService } from '../../services/';

@Component({
  providers: [Notificator, PostService],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  private postContent: string;
  private posts: [{}];

  constructor(private service: PostService, private notificator: Notificator, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('username_key')) {
      this.router.navigate(['/home']);
    } else {
      let username = localStorage.getItem('username_key');
      this.service.getPosts(username)
        .subscribe(res => {
          if (res.error) {
            this.notificator.showError('Posts error', res.error);
            this.posts = [{}];
          } else {
            res.result.forEach(x => {
              if (x.likesFrom.some(u => u === username)) {
                x.isLiked = true;
              } else {
                x.isLiked = false;
              }
            });
            this.posts = res.result;
          }
        });
    }
  }

  createPost() {
    if (!this.postContent || this.postContent.length < 1) {
      this.notificator.showError('Post content', 'Cannot be empty');
      return;
    }
    let username = localStorage.getItem('username_key');

    this.service.createPost(username, this.postContent)
      .subscribe(res => {
        if (res.success) {
          this.posts.push(res.post);
          this.notificator.showSuccess('Post created', 'Successfully');
        } else if (res.error) {
          this.notificator.showError('Create post error', res.error);
        } else {
          this.notificator.showError('Server is busy', 'Try again later');
        }
      });
  }

  dislike(event) {
    let postId = event.toElement.id,
      username = localStorage.getItem('username_key');
    let post = this.posts.find(x => x['_id'] === postId);
    this.service.decreaseLikes(postId, username)
      .subscribe(res => {
        if (res.success) {
          post['isLiked'] = false;
          post['likes'] -= 1;
        } else if (res.error) {
          this.notificator.showError('Like post error', res.error);
        } else {
          this.notificator.showError('Server is busy', 'Try again later');
        }
      });
  }

  like(event) {
    let postId = event.toElement.id,
      username = localStorage.getItem('username_key');
    let post = this.posts.find(x => x['_id'] === postId);

    this.service.increaseLikes(postId, username)
      .subscribe(res => {
        if (res.success) {
          post['isLiked'] = true;
          post['likes'] += 1;
        } else if (res.error) {
          this.notificator.showError('Like post error', res.error);
        } else {
          this.notificator.showError('Server is busy', 'Try again later');
        }
      });
  }
}
