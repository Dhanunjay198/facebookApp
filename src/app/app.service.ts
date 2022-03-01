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
      firstName: 'Ramesh',
      email: 'abc',
      password: '1234',
      otp: 100,
      posts: [
        {
          title: 'New year wishes',
          content: 'Greetings, I wish you all happy new year',
          time: '02/28/2022, 4:00:00 PM',
        },
      ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagSIpNvrU1N3lvzrWDoSf5oJzABckJ3HbMw&usqp=CAU',
    },
    {
      firstName: 'Suresh',
      email: 'xyz',
      password: '3456',
      otp: 200,
      posts: [
        {
          title: 'Daily wish',
          content: 'Hello, Good Morning',
          time: '03/01/2022, 12:35:00 PM',
        },
      ],
      imageUrl:
        'https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png',
    },
    {
      firstName: 'Rani',
      email: 'pqr',
      password: '0000',
      otp: 300,
      posts: [
        {
          title: 'New Beginnings',
          content: 'I would like to inform I have joined a new Company',
          time: '02/017/2022, 4:00:00 PM',
        },
      ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU',
    },
  ];
  constructor() {}
  setUsers(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  addUsers(user: AccountModel) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
