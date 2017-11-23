import { Injectable } from '@angular/core';
import {LoginForm} from '../model/login-form';

export const TOKEN_STORAGE_NAME = 'tp_token';
export const USERS_STORAGE_NAME = 'tp_users';

export class AuthToken {
  email: string;
}

export class User {
  email: string;
  password: string;

}

@Injectable()
export class AuthService {

  private _token: AuthToken;
  private users: User[] = [];


  get isLoggedIn() {
    return this._token !== undefined;
  }

  get token() {
    return this.token;
  }

  set token(token) {
    this._token = token;
  }

  constructor() {
    const tokenString = localStorage.getItem(TOKEN_STORAGE_NAME);
    this.token = tokenString ? JSON.parse(tokenString) : undefined;

    const usersString = localStorage.getItem(USERS_STORAGE_NAME);
    this.users = usersString ? JSON.parse(usersString) : [];
  }

  register(user: User) {
    this.users.push(user);
    localStorage.setItem(USERS_STORAGE_NAME, JSON.stringify(this.users));
  }

  login(formValue: LoginForm) {
    const registeredUser = this.users.find(user => user.email === formValue.email && user.password === formValue.password);
    if (registeredUser) {
      const token: AuthToken = {email: formValue.email};
      localStorage.setItem(TOKEN_STORAGE_NAME, JSON.stringify(token));
      this.token = token;
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(TOKEN_STORAGE_NAME);
    this.token = undefined;
  }

}
