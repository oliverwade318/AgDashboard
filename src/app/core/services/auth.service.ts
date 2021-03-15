import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import jwt_decode from "jwt-decode";

import { environment } from 'src/environments/environment'

import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, user);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/create`, user);
  }

  getSession(): string {
    return localStorage.getItem('accessToken');
  }

  getUserName(): string {
    return localStorage.getItem('username');
  }

  DecodeToken(token: string): any {
    return jwt_decode(token);
  }

  setSession(accessToken: string) {

    let decoded = this.DecodeToken(accessToken);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiresIn', decoded?.exp);
    localStorage.setItem('username', decoded?.username);
  }

  removeSession() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {

    if (localStorage.getItem('accessToken')?.length > 0) {

      const unixExpireDate = parseInt(localStorage.getItem('expiresIn'))

      if (unixExpireDate) {
        const expireDate = new Date(unixExpireDate * 1000);

        if (expireDate < new Date())
          return false;
        else
          return true
      }
    }
    else
      return false;
  }
}
