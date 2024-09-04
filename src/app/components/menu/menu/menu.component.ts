import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

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
