import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3001'

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient) { }

  userLogIn (user: any) {
    return this.http.post<{user: any}>(this.apiUrl + '/auth/login', user).pipe(tap(({user}) => this.currentUser = { ...user }))
  }

  signupUser(user: any) {
    return this.http.post(this.apiUrl + '/auth/register', user)
  }

  getAuthToken() {
    return window.localStorage.getItem('token')
  }

  verifiedUser(token : string) {
    return this.http.get<any>(this.apiUrl + '/auth/user')
  }
  getLoggedInUserId(): number | undefined {
    const userId = localStorage.getItem('loggedInUserId');
    if (userId) {
      return parseInt(userId, 10); // Parsez l'ID en tant que nombre
    } else {
      return undefined; // Renvoie undefined si aucun utilisateur n'est connecté
    }
  }
}


