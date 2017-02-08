import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../service/network-service';
import { User } from '../model/user';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() user: User;

  notes: Note[];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.networkService.getNoteList().subscribe(
      next => {
        this.notes = next;
      },
      error => {
        alert(JSON.stringify(error));
      },
      () => {
        // TODO
        console.log(this.notes);
      }
    );
  }

}
