import { Component, OnInit } from '@angular/core';

import { Notificator } from '../../utils/';

@Component({
  providers: [Notificator],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  private postContent: string;
  constructor(private notificator: Notificator) { }

  ngOnInit() {
  }

  createPost() {
    if (!this.postContent || this.postContent.length < 1) {
      this.notificator.showError('Post content', 'Cannot be empty');
      return;
    }

    console.log(this.postContent);
  }
}
