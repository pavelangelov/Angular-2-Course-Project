import { Component } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  providers: [UserService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-2 Social Network';
}
