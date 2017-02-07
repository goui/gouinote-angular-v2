import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() passedData: string;

  readonly DEFAULT_BUTTON_TEXT = 'Create account';

  nickname: string;
  password: string;

  buttonText: string;

  constructor() { }

  ngOnInit() {
    this.buttonText = this.passedData !== undefined ? this.passedData : this.DEFAULT_BUTTON_TEXT;
  }

  onSubmit() {
    console.log('logged in!');
    // TODO sign in
  }

}
