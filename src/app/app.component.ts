import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public webPages = [
    { title: 'About Us', url: '/folder/inbox', icon: 'home' },
    { title: 'Our Services', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Examples', url: '/folder/favorites', icon: 'heart' },
    { title: 'Contact', url: '/folder/archived', icon: 'archive' }
  ];
  
  constructor() {}
}
