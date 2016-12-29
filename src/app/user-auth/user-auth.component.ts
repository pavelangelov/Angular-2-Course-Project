import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  private isLogged: boolean = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }
}
