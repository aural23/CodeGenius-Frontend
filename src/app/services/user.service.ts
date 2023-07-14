import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get('https://code-genius-backend.onrender.com/users', {
      observe: 'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }



}
