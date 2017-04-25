import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ApiService } from '../api/api.service'
import { User }       from './user';

@Injectable()
export class UserService {
  
  private loggedIn = false;

  private user;

  private api;

  constructor(private api: ApiService) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {

    let user      = new User();
    user.name     = email;
    user.password = password;

    this.api.setUser(user);

    return this.api.get('/v1/token')
      .map(res => res.json())
      .map((res) => {
        if (res.token) {
          localStorage.setItem('auth_token', res.token);
          this.loggedIn = true;
          return res.token;
        }
        return false;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUser() {
    return this.user;
  }
}