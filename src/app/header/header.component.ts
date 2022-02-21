import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() logOff = new EventEmitter<boolean>();
  showModal = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout(e: any) {
    e.preventDefault();

    this.showModal = true;
    // if (!this.showModal) this.router.navigate(['']);
  }
  onLogOff() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['']);
  }
}
