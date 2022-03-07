import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel } from '../create-account/account.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showModal = false;
  user: AccountModel[] = [];
  postId?: number;
  formModel = new AccountModel();
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {}

  onLogout(e: any) {
    e.preventDefault();

    this.showModal = true;
    // if (!this.showModal) this.router.navigate(['']);
  }
  onLogOff() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['']);
  }
  onSearch(e: any) {
    this.postId = this.appService.users.filter(
      (user) =>
        user.firstName?.toLowerCase() ===
        this.formModel.firstName?.toLowerCase()
    )[0].id;

    this.user = this.appService.users.filter((user) => user.id === this.postId);
    console.log(this.user);

    this.router.navigate(['/profile'], {
      queryParams: { id: this.postId },
    });
  }
}
