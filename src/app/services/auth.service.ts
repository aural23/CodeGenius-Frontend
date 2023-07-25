import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.http.post<any>(`${this.apiUrl}/login`, { name: username, user_password: password }).subscribe(
        (response) => {
          console.log("RESPONSE", response)
          if (response.success) {
            resolve(true);
          } else {
            resolve(false); 
          }
        },
        (error) => {
          // Handle error response
          console.error('Failed to login:', error);
          resolve(false);
        }
      );
    });
  }

}
