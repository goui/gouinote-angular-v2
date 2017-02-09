import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Note } from '../model/note';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class NetworkService {

    readonly BASE_URL = 'http://192.168.0.135:8080/';

    headers = new Headers();

    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    createAccount(user): Observable<User> {
        return this.http.post(this.BASE_URL + 'user/createAccount', user, this.headers)
            .map((res: Response) => res.json());
    }

    signIn(nickname, password): Observable<User> {
        const data = new URLSearchParams();
        data.append('nickname', nickname);
        data.append('password', password);
        return this.http.post(this.BASE_URL + 'user/signIn', data, this.headers)
            .map((res: Response) => res.json());
    }

    getUserList(): Observable<User[]> {
        return this.http.get(this.BASE_URL + 'user/getAllUsers')
            .map((res: Response) => res.json());
    }

    getNoteList(): Observable<Note[]> {
        return this.http.get(this.BASE_URL + 'note/getAllNotes')
            .map((res: Response) => res.json());
    }

    getUser(nickname): Observable<User> {
        return this.http.get(this.BASE_URL + 'user/' + nickname)
            .map((res: Response) => res.json());
    }

    addNote(username, noteContent): Observable<Boolean> {
        const note = new Note();
        note.content = noteContent;
        note.nickname = username;
        return this.http.post(this.BASE_URL + 'user/addNote?nickname=' + username, note, this.headers)
            .map((res: Response) => res.json());
    }

}
