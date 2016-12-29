import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import  { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.css']
})
export class ServerTestComponent implements OnInit {
  private text: Observable<{}>

  constructor(private http: Http) {
   }

  ngOnInit() {
    this.text = this.http.get('api/test')
      .map((response: Response) => {
        return response.json();
      });
  }
}
