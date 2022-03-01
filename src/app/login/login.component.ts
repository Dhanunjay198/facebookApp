import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel } from '../create-account/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formModel = new AccountModel();
  users: AccountModel[] = [];
  error!: string;
  inputType?: boolean;
  show_eye?: boolean;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    // // this.appService.addUser.subscribe((data) => {
    // //   this.appService.users.push(data);
    this.appService.setUsers();
    this.users = JSON.parse(localStorage.getItem('users') || '{}');
    // });
  }

  onFormSubmit(formData: NgForm, e: any) {
    if (!formData.invalid) {
      e.preventDefault();
      this.validate();
    }
  }
  validate() {
    // console.log('click', this.formModel.email, this.formModel.password);
    this.users.forEach((user) => {
      if (
        this.formModel.email === user.email &&
        this.formModel.password === user.password
      ) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['/home']);
      } else {
        this.error = 'Invalid credentials';
      }
    });
  }
  onCreateAccount() {
    this.router.navigate(['/new']);
  }
  onShowPassword() {
    this.inputType = !this.inputType;
    this.show_eye = !this.show_eye;
  }
  onForgotPassword(e: any) {
    e.preventDefault();
    this.router.navigate(['/password']);
  }
  onResetField() {
    this.formModel = new AccountModel();
    // console.log(this.formModel.email, this.formModel.password);
  }
}
