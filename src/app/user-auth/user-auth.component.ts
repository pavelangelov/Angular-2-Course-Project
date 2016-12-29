import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  private username: string = 'Aaa';
  private password: string = 'Bbb';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log('Router')
    console.log(this.router);
  }

}
