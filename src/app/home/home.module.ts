import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../components/menu/menu/menu.component';
import { PortfolioComponent } from '../components/portfolio/portfolio/portfolio.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MenuComponent, PortfolioComponent]
})
export class HomePageModule {}
