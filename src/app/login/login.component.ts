import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() isSignIn: boolean;

  readonly CREATE_ACCOUNT_TEXT = 'Create account';
  readonly SIGN_IN_TEXT = 'Sign in';

  nickname: string;
  password: string;

  buttonText: string;

  constructor() { }

  ngOnInit() {
    this.buttonText = this.isSignIn ? this.SIGN_IN_TEXT : this.CREATE_ACCOUNT_TEXT;
  }

  onSubmit() {
    console.log('logged in!');
    // TODO sign in
  }

}
