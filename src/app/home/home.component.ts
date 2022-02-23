import { ThrowStmt } from '@angular/compiler';
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
    this.appService.users.forEach((a) =>
      a.posts?.forEach((a) => {
        this.posts.push(a);
      })
    );
  }
}
