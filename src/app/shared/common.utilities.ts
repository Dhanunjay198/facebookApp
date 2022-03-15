import { Component, OnInit } from '@angular/core';
import { AccountModel, PostModel } from '../create-account/account.model';
@Component({
  selector: 'app-commonUtilites',
  template: '',
})
export default class CommonUtilites implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  static calcTime(time: string): string {
    let calculatedTime = '';
    const day =
      (new Date().getTime() - new Date(time).getTime()) / (24 * 60 * 60 * 1000);
    console.log(day);
    if (day < 1) {
      if (Math.trunc(day * 24) < 1) {
        calculatedTime = Math.trunc(day * 24 * 60) + 'minutes ago';
      } else {
        calculatedTime =
          Math.trunc(day * 24) === 1
            ? Math.trunc(day * 24) + ' hour ago'
            : Math.trunc(day * 24) + ' hours ago';
      }
    }
    if (day >= 1 && day < 7) {
      calculatedTime =
        Math.trunc(day) === 1
          ? Math.trunc(day) + ' day ago'
          : Math.trunc(day) + ' days ago';
    }
    if (day >= 7) {
      calculatedTime =
        Math.trunc(day / 7) === 1
          ? Math.trunc(day / 7) + ' week ago'
          : +Math.trunc(day / 7) + ' weeks ago';
    }
    return calculatedTime;
  }
}
