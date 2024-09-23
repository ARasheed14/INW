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
      name: 'Home',
      route: '/home'
    },
    {
      name: 'About',
      route: '/about'
    },
    {
      name: 'Our Services',
      route: '/our-services'
    },
    {
      name: 'Portfolio',
      route: '/portfolio'
    },
    {
      name: 'Contact',
      route: '/contact-us'
    }
   ];

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {}

  toggleSideMenu() {
    this.menuCtrl.open();
  }
}
