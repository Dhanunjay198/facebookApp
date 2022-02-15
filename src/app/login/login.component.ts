import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  error!: string;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    // // this.appService.addUser.subscribe((data) => {
    // //   this.appService.users.push(data);
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
    this.appService.users.forEach((a) => {
      if (
        this.formModel.email === a.email &&
        this.formModel.password === a.password
      )
        this.router.navigate(['/home']);
      else {
        this.error = 'Invalid credentials';
      }
    });
  }
  onCreateAccount() {
    this.router.navigate(['/new']);
  }
}
