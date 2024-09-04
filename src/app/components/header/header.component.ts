import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  public rightMenu = [
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Our Services'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact' 
    }
   ];

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {}

  toggleSideMenu() {
    this.menuCtrl.open();
  }
}
