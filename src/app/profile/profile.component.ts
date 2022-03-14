import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { AccountModel, PostModel } from '../create-account/account.model';
import CommonUtilites from '../shared/common.utilities';

// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id?: number;
  profile: PostModel[] = [];
  profileUser = new AccountModel();
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => (this.id = param['id']));
    // console.log(this.id);
    this.profileUser = this.appService.users.filter(
      (user) => user.id === Number(this.id)
    )[0];

    this.appService.showSearch.next(false);
    this.assignValues();
  }
  assignValues() {
    this.profileUser.posts?.forEach((post) => {
      if (post.time) {
        post.calcTime = CommonUtilites.calcTime(post.time);
      }
      post.firstName = this.profileUser.firstName;
    });
  }
}
