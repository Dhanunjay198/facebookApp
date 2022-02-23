import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountModel, PostModel } from './create-account/account.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  addUser = new BehaviorSubject<AccountModel>({});
  users: AccountModel[] = [
    {
      email: 'abc',
      password: '1234',
      posts: [{ content: 'Abc Posted a photo', time: '2 hrs ago' }],
    },
    {
      email: 'xyz',
      password: '3456',
      posts: [{ content: 'xyz commented on a post', time: '45 mins ago' }],
    },
    {
      email: 'pqr',
      password: '0000',
      posts: [{ content: 'pqr liked a photo', time: '1 hr ago' }],
    },
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
