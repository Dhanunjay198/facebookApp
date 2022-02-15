import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel } from './account.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  accountModel = new AccountModel();
  message?: string;
  constructor(private appService: AppService, private router: Router) {}
  ngOnInit(): void {}
  onCreateAccount(formData: NgForm, e: any) {
    if (!formData.invalid) {
      e.preventDefault();
      this.accountModel.password = this.accountModel.newPassword;
      this.appService.addUsers(this.accountModel);
      this.router.navigate(['']);
    }
  }
  passwordValidate() {
    // if (!this.accountModel.newPassword) {
    //   this.message = 'Please enter new password';
    // }
    if (this.accountModel.newPassword !== this.accountModel.confirmPassword) {
      this.message = "password doesn't match";
    }
  }
}
