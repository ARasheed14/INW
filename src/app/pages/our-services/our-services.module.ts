import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurServicesPageRoutingModule } from './our-services-routing.module';

import { OurServicesPage } from './our-services.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurServicesPageRoutingModule,
    HeaderModule
  ],
  declarations: [OurServicesPage]
})
export class OurServicesPageModule {}
