import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FacebookApp';
  show!: string;
  logOut!:boolean

  onShowHome(show: any) {
    this.show = show;
  }
  onLogoff(e:boolean){
this.logOut=e;
  }
}
