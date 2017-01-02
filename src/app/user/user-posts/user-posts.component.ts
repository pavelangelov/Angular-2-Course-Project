import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {} from 'rxjs/add/operator/map';

import { Notificator } from '../../utils/';
import { PostService } from '../../services/';

@Component({
  providers: [Notificator, PostService],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  private postContent: string;
  private posts: Observable<{}>;
  constructor(private service: PostService, private notificator: Notificator) { }

  ngOnInit() {
    // let username = localStorage.getItem('username_key');
    // this.service.getPosts(username)
    //   .map()
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
          this.notificator.showSuccess('Post created', 'Successfully');
        } else if (res.error) {
          this.notificator.showError('Create post error', res.error);
        } else {
          this.notificator.showError('Server is busy', 'Try again later');
        }
      });
  }
}
