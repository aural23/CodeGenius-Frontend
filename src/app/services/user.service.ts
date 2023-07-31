import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get('http://localhost:4000/users', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  getUser(id: String) {
    return this._http.get('http://localhost:4000/users/' + id, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getChat(user_loged: String, user_requested: String) {
    return this._http.get('http://localhost:4000/chats/' + user_loged+"/"+ user_requested, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getChatDetail(id: String) {
    return this._http.get('http://localhost:4000/chatDetails/' + id, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  postComment(body:any){
    return this._http.post('http://localhost:4000/chatDetails/', body, {
      observe: 'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  Proceedregister(inputdata:any): Observable<any> {
    return this._http.post('http://localhost:4000/users/', inputdata, {
      observe: 'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
    }
}
