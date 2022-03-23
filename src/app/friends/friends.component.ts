import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel, PostModel } from '../create-account/account.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  currentUser = new AccountModel();
  displayUser!: AccountModel[];
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.displayUser = this.appService.users.filter(
      (user) => user.email !== this.currentUser.email
    );
    console.log(this.displayUser);
  }
  onViewProfile(e: any, post: PostModel) {
    e.preventDefault();
    console.log(post);
    this.router.navigate(['/profile'], { queryParams: { id: post.id } });
  }
}
