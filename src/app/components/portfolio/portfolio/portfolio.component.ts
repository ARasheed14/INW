import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})


export class PortfolioComponent  implements OnInit {

  public portfolioList = [
    {
        name: 'Portfolio 1',
        url: '',
        image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
        name: 'Portfolio 2',
        url: '',
        image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
        name: 'Portfolio 3',
        url: '',
        image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    }];

  constructor() { }

  ngOnInit() {}

}
