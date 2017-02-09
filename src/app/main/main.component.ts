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
  connectedNickname: string;

  constructor(
    private networkService: NetworkService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.connectedNickname = localStorage.getItem('nickname');
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
      if (this.noteContent.length > 0) {
        this.addNote();
      } else {
        // TODO alert user note is empty
      }
    }, (reason) => {
      // do nothing
    });
  }

  addNote() {
    this.networkService.addNote(localStorage.getItem('nickname'), this.noteContent).subscribe(
      next => {
        // do nothing
      },
      error => {
        alert(JSON.stringify(error));
      },
      () => {
        // TODO reload notes
      }
    );
  }

  onLogOutClick() {
    localStorage.setItem('nickname', '');
  }

}
