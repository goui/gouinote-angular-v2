import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NetworkService } from '../service/network-service';
import { ExceptionHandler } from '../exception/exception-handler';
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
  buttonText: string;
  submitted = false;

  user = new User();
  nickname: string;
  password: string;

  exceptionHandler = new ExceptionHandler();

  constructor(
    private networkService: NetworkService,
    private router: Router) { }

  ngOnInit() {
    this.buttonText = this.isSignIn ? this.SIGN_IN_TEXT : this.CREATE_ACCOUNT_TEXT;
  }

  onSubmit() {
    this.submitted = true;
    this.user.nickname = this.nickname;
    this.user.password = this.password;

    if (this.isSignIn) {
      this.signIn();
    } else {
      this.createAccount();
    }
  }

  signIn() {
    this.networkService.signIn(this.user.nickname, this.user.password).subscribe(
      next => {
        this.user = next;
      },
      error => {
        this.submitted = false;
        const message = this.exceptionHandler.getMessage(error);
        console.log(message);
        alert(message);
      },
      () => {
        this.onCompleted();
      }
    );
  }

  createAccount() {
    this.networkService.createAccount(this.user).subscribe(
      next => {
        this.user = next;
      },
      error => {
        this.submitted = false;
        const message = this.exceptionHandler.getMessage(error);
        console.log(message);
        alert(message);
      },
      () => {
        this.onCompleted();
      }
    );
  }

  onCompleted() {
    this.submitted = false;
    localStorage.setItem('nickname', this.user.nickname);
    localStorage.setItem('password', this.user.password);
    this.router.navigateByUrl('/main');
  }

}
