import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountModel, PostModel } from './create-account/account.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  addUser = new BehaviorSubject<AccountModel>({});
  showSearch = new BehaviorSubject<boolean>(false);

  users: AccountModel[] = [
    {
      id: 1,
      firstName: 'Ramesh',
      email: 'abc',
      password: '1234',
      otp: 100,
      livesIn: 'Vijayawada',
      DOB: '19-04-1997',

      posts: [
        {
          title: 'New year wishes',
          content: 'Greetings, I wish you all happy new year',
          time: '03/04/2022, 4:00:00 PM',
        },
      ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagSIpNvrU1N3lvzrWDoSf5oJzABckJ3HbMw&usqp=CAU',
    },
    {
      id: 2,
      firstName: 'Suresh',
      email: 'xyz',
      password: '3456',
      otp: 200,
      livesIn: 'Vuyyuru',
      DOB: '01-01-1999',
      posts: [
        {
          title: 'Daily wish',
          content: 'Hello, Good Morning',
          time: '03/14/2022, 12:35:00 PM',
        },
        {
          title: 'Test Post',
          content: 'Posting something',
          time: '03/23/2022, 4:36:00 PM',
        },
      ],
      imageUrl:
        'https://dp-client.com/CMS-NEW/assets/images/user/user11605616227.png',
    },
    {
      id: 3,
      firstName: 'Rani',
      email: 'pqr',
      password: '0000',
      otp: 300,
      livesIn: 'Hyderabad',
      DOB: '08-02-1998',
      posts: [
        {
          title: 'New Beginnings',
          content: 'I would like to inform I have joined a new Company',
          time: '03/23/2022, 9:00:00 AM',
        },
        {
          title: 'Excited to learn',
          content: 'I have enrolled for new dev coursed',
          time: '03/23/2022, 3:38:00 PM',
        },
      ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU',
    },
    {
      id: 4,
      firstName: 'suma',
      email: 'ooo',
      password: '1111',
      otp: 400,
      livesIn: 'Chennai',
      DOB: '28-04-1990',
      posts: [
        {
          title: 'Pleasant Day',
          content: 'Good day to relax',
          time: '03/17/2022, 9:00:00 AM',
        },
      ],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_5t1MKffw3fiEx40UzvagxvT0A31tu36tCaerv9YVfenlU2h-U8Nfmvg90M0Eo_9jgo&usqp=CAU',
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
