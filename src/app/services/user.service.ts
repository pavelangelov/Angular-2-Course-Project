import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_key');
  }

  register(user: Object) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('api/register', JSON.stringify(user), { headers })
      .map(res => res.json());
  }

  login(username, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('api/login', JSON.stringify({ username, password }), { headers })
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_key', res.authKey);
          localStorage.setItem('username_key', res.username);
          localStorage.setItem('image_key', res.image);
          let requests;
          if (res.requests) {
            requests = res.requests.length;
          } else {
            requests = 0;
          }
          localStorage.setItem('requests-count', requests);
          this.loggedIn = true;
        }

        return res;
      });
  }

  logout() {
    let username = localStorage.getItem('username_key');
    localStorage.removeItem('auth_key');
    localStorage.removeItem('username_key');
    localStorage.removeItem('image_key');
    localStorage.removeItem('requests-count');
    this.loggedIn = false;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/logout', JSON.stringify({ username }), { headers })
      .map(res => res.json())
      .map(res => {
        if (res.success) {
          return null;
        }

        return res;
      });
  }

  findUsers(username: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`api/users/${username}`, { headers })
      .map(res => res.json());
  }

  getUserByUsername(username: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`api/user/${username}`, { headers })
        .map(res => res.json());
  }

  sendRequest(reciever: string, request) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/user/send-request', JSON.stringify({ reciever, request }), { headers })
      .map(res => res.json());
  }

  confirmRequest(firstUser, secondUser, requestId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/user/confirm-request', JSON.stringify({ firstUser, secondUser, requestId}), { headers })
      .map(res => res.json());

  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
