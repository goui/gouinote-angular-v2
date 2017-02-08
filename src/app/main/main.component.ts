import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetworkService } from '../service/network-service';
import { User } from '../model/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[];
  noteContent: string;

  constructor(
    private networkService: NetworkService,
    private modalService: NgbModal) { }

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

  openNoteModal(content) {
    this.noteContent = '';
    this.modalService.open(content).result.then((result) => {
      // TODO add note
      console.log(this.noteContent);
    }, (reason) => {
      // do nothing
    });
  }

}
