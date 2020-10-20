import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarBuyPageRoutingModule } from './car-buy-routing.module';

import { CarBuyPage } from './car-buy.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarBuyPageRoutingModule,
    ComponentModule,
  ],
  declarations: [CarBuyPage]
})
export class CarBuyPageModule {}
