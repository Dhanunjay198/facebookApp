import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel } from '../create-account/account.model';
import { FormModel } from '../formModel';

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
    this.appService.fetchUsers();
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
    this.users.forEach((a) => {
      if (
        this.formModel.email === a.email &&
        this.formModel.password === a.password
      ) {
        localStorage.setItem('loggedInUser', JSON.stringify(a));
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
}
