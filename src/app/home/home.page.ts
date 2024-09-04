import { Component, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('square', { read: ElementRef }) square: ElementRef;
  @ViewChild('title', { read: ElementRef }) title: ElementRef;

  public menuType: string = 'overlay';
  private headTitle: Animation;
  private subTitle: Animation;
  public portfolioList = [
    {
      name: 'Portfolio 1',
      url: '',
      image: '',
    },
    { 
      name: 'Portfolio 2' 
    }, 
    { 
      name: 'Portfolio 3'
     }];
     
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
     ]

  constructor(private animationCtrl: AnimationController, public menuCtrl: MenuController) { }

  ngAfterViewInit() {

    this.headTitle = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(1000)
      .iterations(10)
      .direction('alternate')
      .fromTo('color', '#8c8c8c', 'red');

    this.subTitle = this.animationCtrl
      .create()
      .addElement(this.square.nativeElement)
      .fill('none')
      .duration(2000)
      .iterations(10)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    this.runAnimation();
  }

  runAnimation() {
    this.headTitle.play();
    this.subTitle.play();
  }

  toggleSideMenu() {
    this.menuCtrl.open();
  }
}
