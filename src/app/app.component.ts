import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  providers: [UserService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Header of our site!';
}
