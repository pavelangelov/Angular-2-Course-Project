import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/';
import { Notificator } from '../utils/';

@Component({
  providers: [UserService, Notificator],
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent implements OnInit {
  private users: any;

  constructor(private service: UserService, private notificator: Notificator) { }

  ngOnInit() {
  }

  searchPeople(search: string) {
    if (search && search.length > 2) {
      this.service.findUsers(search)
        .subscribe(res => {
          if (res.error) {
            this.notificator.showError('Search error', res.error);
            return;
          }
          let currentUser = localStorage.getItem('username_key');
          this.users = res.result.filter(x => x['username'] !== currentUser);
        });
    } else {
      this.users = [];
    }
  }
}
