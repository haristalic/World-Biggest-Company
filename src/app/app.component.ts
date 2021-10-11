import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'global-company';
  statusClass = 'not-active';
  hideMenu(){
    this.statusClass = 'not-active';
    console.log('radi');

  }
  showMenu(){
    this.statusClass = 'active';
    console.log('radi');


  }
}
