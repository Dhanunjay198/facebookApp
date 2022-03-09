import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  displaySearch = true;
  postId?: number;
  @Output() userInput = new EventEmitter<string>();
  formModel = new AccountModel();
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    // console.log(this.displaySearch);
  }

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
    // this.postId = this.appService.users.filter(
    //   (user) =>
    //     user.firstName?.toLowerCase() ===
    //     this.formModel.firstName?.toLowerCase()
    // )[0].id;

    // this.router.navigate(['/profile'], {
    //   queryParams: { id: this.postId },
    // });
    this.userInput.emit(this.formModel.firstName);
  }
}
