import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  createPost(username, content, targetUser?) {
    let today = new Date(),
        date = `${today.toLocaleDateString()} at ${today.toLocaleTimeString()}`;
    let headers = new Headers(),
      postObj = {
        author: username,
        image: localStorage.getItem('image_key'),
        targetUser: targetUser,
        content: content,
        postDate: date
      };
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/post',
                  JSON.stringify(postObj),
                  { headers })
              .map(res => res.json());
  }

  getPosts(username: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-username', username);

    return this.http.get('api/posts', {headers})
      .map(res => res.json());
  }

  increaseLikes(postId: string, username: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('api/post/increase-likes',
                  JSON.stringify({postId, username}),
                  { headers })
                .map(res => res.json());
  }

  decreaseLikes(postId: string, username: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('api/post/decrease-likes',
                  JSON.stringify({postId, username}),
                  { headers })
                .map(res => res.json());
  }
}
