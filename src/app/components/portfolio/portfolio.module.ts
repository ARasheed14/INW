import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
