import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel } from '../create-account/account.model';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id?: number;
  search?: boolean;
  profileUser = new AccountModel();
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => (this.id = param['id']));
    // console.log(this.id);
    this.profileUser = this.appService.users.filter(
      (user) => user.id === Number(this.id)
    )[0];
  }
}
