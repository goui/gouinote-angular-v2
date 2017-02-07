import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../service/model-service';
import { User } from '../model/user';

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

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.buttonText = this.isSignIn ? this.SIGN_IN_TEXT : this.CREATE_ACCOUNT_TEXT;
  }

  onSubmit() {
    const user = new User();
    user.nickname = this.nickname;
    user.password = this.password;

    if (this.isSignIn) {
      console.log(user.nickname + ' signed in.');
    } else {
      console.log(user.nickname + '\'s account created.');
    }
    // TODO sign in
    this.modelService.setConnectedUser(user);
  }

}
