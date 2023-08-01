import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:4000');
  public login(strUser: String){
    this.socket.emit('send-nickname', strUser);
  }

  public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  public getNewMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}