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
      posts: [
        {
          title: 'New year wishes',
          content: 'Greetings, I wish you all happy new year',
          time: '02/24/2022, 4:00:00 PM',
        },
      ],
      imageUrl:
        'https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg',
    },
    {
      firstName: 'Suresh',
      email: 'xyz',
      password: '3456',
      posts: [
        {
          title: 'Daily wish',
          content: 'Hello, Good Morning',
          time: '02/22/2022, 4:00:00 PM',
        },
      ],
      imageUrl:
        'https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png',
    },
    {
      firstName: 'Rani',
      email: 'pqr',
      password: '0000',
      posts: [
        {
          title: 'New Beginnings',
          content: 'I would like to inform I have joined a new Company',
          time: '02/15/2022, 4:00:00 PM',
        },
      ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU',
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
