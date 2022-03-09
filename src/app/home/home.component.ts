import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AppService } from '../app.service';
import { AccountModel, PostModel } from '../create-account/account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) {}
  content?: string;
  user: AccountModel[] = [];
  search = true;
  posts: PostModel[] = [];
  currentUser = new AccountModel();
  formModel = new AccountModel();

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.assignPostValues(this.appService.users);
  }

  assignPostValues(inputUsers: AccountModel[]): void {
    this.posts = [];
    inputUsers.forEach((user) =>
      user.posts?.forEach((post) => {
        if (!(user.email === this.currentUser.email)) {
          if (post.time) {
            const day =
              (new Date().getTime() - new Date(post.time).getTime()) /
              (24 * 60 * 60 * 1000);
            if (day < 1) {
              post.calcTime =
                Math.trunc(day * 24) === 1
                  ? Math.trunc(day * 24) + ' hour ago'
                  : Math.trunc(day * 24) + ' hours ago';
            }
            if (day >= 1 && day < 7) {
              post.calcTime =
                Math.trunc(day) === 1
                  ? Math.trunc(day) + ' day ago'
                  : Math.trunc(day) + ' days ago';
            }
            if (day >= 7) {
              post.calcTime =
                Math.trunc(day / 7) === 1
                  ? Math.trunc(day / 7) + ' week ago'
                  : +Math.trunc(day / 7) + ' weeks ago';
            }
          }

          post.imageUrl = user.imageUrl;
          post.firstName = user.firstName;
          post.id = user.id;
          this.posts.push(post);
        }
      })
    );
  }

  onViewProfile(e: any, post: PostModel) {
    e.preventDefault();

    this.router.navigate(['/profile'], {
      queryParams: { id: post.id },
    });
  }
  onUserData(userName: string) {
    let filteredUsers: AccountModel[] = [];
    filteredUsers = this.appService.users.filter((user) =>
      user.firstName?.toLowerCase().includes(userName.toLowerCase())
    );
    this.assignPostValues(filteredUsers);

    // this.posts = this.appService.users.filter((user) =>
    //   user.posts?.filter((post) => {
    //     // post.imageUrl = user.imageUrl;
    //     // post.firstName = user.firstName;
    //     // post.id = user.id;
    //     if (!(user.email === this.currentUser.email)) {
    //       console.log(post.firstName);
    //       user.posts.firstName?.toLowerCase().includes(userName.toLowerCase());
    //     }
    //   })
    // );
  }
}
