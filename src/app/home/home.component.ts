import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
import { AccountModel, PostModel } from '../create-account/account.model';
import CommonUtilites from '../shared/common.utilities';

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
  copyPosts: PostModel[] = [];
  ngOnInit(): void {
    this.appService.showSearch.next(true);
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.assignPostValues(this.appService.users);
  }

  assignPostValues(inputUsers: AccountModel[]): void {
    this.copyPosts = [];
    inputUsers.forEach((user) =>
      user.posts?.forEach((post) => {
        if (!(user.email === this.currentUser.email)) {
          if (post.time) {
            post.calcTime = CommonUtilites.calcTime(post.time);
            post.timeStamp =
              new Date().getTime() - new Date(post.time).getTime();
          }

          post.imageUrl = user.imageUrl;
          post.firstName = user.firstName;
          post.id = user.id;

          this.copyPosts.push(post);
        }
      })
    );
    this.copyPosts.sort((a, b) => Number(a.timeStamp) - Number(b.timeStamp));
    this.posts = this.copyPosts.slice();
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
