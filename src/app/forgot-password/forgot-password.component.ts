import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../create-account/account.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  accountModel = new AccountModel();
  constructor() {}

  ngOnInit(): void {}
  onPasswordReset() {}
}
