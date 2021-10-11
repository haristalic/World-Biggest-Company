import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {

  constructor() { }

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
