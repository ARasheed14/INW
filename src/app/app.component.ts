import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public webPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About Us', url: '/about', icon: 'chatbubbles' },
    { title: 'Our Services', url: '/our-services', icon: 'paper-plane' },
    { title: 'portfolio', url: '/projects', icon: 'heart' },
    { title: 'Contact', url: '/contact-us', icon: 'calendar' }
  ];
  
  constructor() {}
}
