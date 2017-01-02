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
          this.loggedIn = true;
        }

        return res;
      });
  }

  getUserByUserName(username){
    let path = 'api/users/'+ username;

    return this.http.get(path)
      .map(res => res.json());
  }

  logout() {
    let username = localStorage.getItem('username_key');
    localStorage.removeItem('auth_key');
    localStorage.removeItem('username_key');
    localStorage.removeItem('image_key');
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

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
