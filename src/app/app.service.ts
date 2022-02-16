import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountModel } from './create-account/account.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  addUser = new BehaviorSubject<AccountModel>({});
  users: AccountModel[] = [
    { email: 'abc', password: '1234' },
    { email: 'xyz', password: '3456' },
    { email: 'pqr', password: '0000' },
  ];
  constructor() {}
  fetchUsers(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  addUsers(user: AccountModel) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
