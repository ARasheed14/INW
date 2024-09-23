import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public webPages = [
    { title: 'About Us', url: '/about', icon: 'home' },
    { title: 'Our Services', url: '/our-services', icon: 'paper-plane' },
    { title: 'portfolio', url: '/portfolio', icon: 'heart' },
    { title: 'Contact', url: '/contact-us', icon: 'archive' }
  ];
  
  constructor() {}
}
