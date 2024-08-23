import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController, IonCard, IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;
  @ViewChild('square',  { read: ElementRef }) square: ElementRef;

  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
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
    this.animation.play();
  }
}
