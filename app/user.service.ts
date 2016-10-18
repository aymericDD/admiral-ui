import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ApiService } from './api.service'
import { User }       from './user';

@Injectable()
export class UserService {
  
  private loggedIn = false;

  private user;

  constructor(private api: ApiService) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {

    let user      = new User();
    user.name     = email;
    user.password = password;

    this.api.setUser(user);

    return this.api.get('/version')
      .map(res => res.json())
      .map((res) => {
        alert('Alllééé');
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res.success;
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