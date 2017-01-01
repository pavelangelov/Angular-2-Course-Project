import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent implements OnInit {
  private results: any;

  constructor() { }

  ngOnInit() {
  }

}
