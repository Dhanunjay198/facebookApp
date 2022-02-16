import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() logOff = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout(e: any) {
    e.preventDefault();
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['']);
  }
}
