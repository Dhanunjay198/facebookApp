import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel } from '../create-account/account.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  accountModel = new AccountModel();
  message?: string;
  display = false;
  otpText?: string;
  passwordText?: string;
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {}
  onPasswordReset(formData: NgForm, e: any) {}
  onSendOtp(formData: NgForm) {
    const result = this.appService.users.map((user) => user.email);

    if (result.includes(this.accountModel.email)) {
      this.message = 'OTP Sent successfully';
      this.display = true;
    } else {
      this.message = 'Email not found';
    }
  }
  otpValidate() {
    if (
      !(
        this.appService.users.filter(
          (user) => user.email === this.accountModel.email
        )[0].otp === Number(this.accountModel.otp)
      )
    ) {
      this.otpText = 'Please enter correct OTP';
    } else {
      this.otpText = '';
    }
  }
  onPasswordValidate() {
    if (
      this.appService.users.filter(
        (user) => user.email === this.accountModel.email
      )[0].password === this.accountModel.newPassword
    ) {
      this.passwordText = 'New password must be different';
    } else {
      this.passwordText = '';
    }
  }
}
