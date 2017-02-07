import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickname: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('logged in!');
    // TODO sign in
  }

}
