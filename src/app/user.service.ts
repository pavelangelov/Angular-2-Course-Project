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
          localStorage.setItem('auth_key', res.auth_key);
          localStorage.setItem('username_key', res.username_key);
          localStorage.setItem('image_key', res.image_key);
          this.loggedIn = true;
        }

        return res;
      });
  }

  logout() {
    localStorage.removeItem('auth_key');
    localStorage.removeItem('username_key');
    localStorage.removeItem('image_key');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
