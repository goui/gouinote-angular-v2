import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nickname: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSignInClick() {
    // TODO sign in
  }

}
