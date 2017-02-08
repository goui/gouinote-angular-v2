import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../service/network-service';
import { User } from '../model/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.networkService.getUserList().subscribe(
      next => {
        this.users = next;
      },
      error => {
        alert(JSON.stringify(error));
      },
      () => {
        // do nothing
      }
    );
  }

}
