import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { AppService } from '../app.service';
import { AccountModel, PostModel } from '../create-account/account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) {}
  content?: string;
  posts: PostModel[] = [];
  ngOnInit(): void {
    this.appService.users.forEach((user) =>
      user.posts?.forEach((post) => {
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
        this.posts.push(post);
      })
    );
  }
  onViewProfile() {}
}
