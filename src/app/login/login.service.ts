import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] = [];
  auth: string = '';
  userLogin: User[] = [
    { id: 1, user: '2024', password: '2024', role: 'user' },
    { id: 2, user: '564', password: '123456', role: 'adm' },
  ];

  constructor() {}

  userAuth(user: Partial<User>): string {
    if (user.user === '2024' && user.password === '2024') {
      this.auth = 'user';
      return this.auth;
    }
    if (user.user === '564' && user.password === '123456') {
      this.auth = 'adm';
      return this.auth;
    }
    return '';
  }
}
