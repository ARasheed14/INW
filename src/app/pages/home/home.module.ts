import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule
  ],
  declarations: [HomePage, FooterComponent, PortfolioComponent]
})
export class HomePageModule {}
