import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/take';

import { UserService } from '../services/';
import { Notificator } from '../utils/';

@Component({
  providers: [UserService, Notificator],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: {};
  private username: string;

  constructor(private service: UserService,
    private notificator: Notificator,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.take(1)
      .subscribe(data => {
        console.log(data);
        this.username = data['username'];
        this.service.getUserByUsername(this.username)
          .subscribe(res => {
            if (res.error) {
              this.notificator.showError('Load profile error', res.error);
              return;
            }
            console.log(res);
            this.user = res.result;
          });
      });

  }

}
