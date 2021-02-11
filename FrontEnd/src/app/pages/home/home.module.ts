import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentModule } from '../../component/component.module';
import { PipesModule } from '../../pipes/pipes.module';
import { BannerPage } from '../banner/banner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentModule,
    PipesModule,
  ],
  declarations: [
    HomePage,
    BannerPage
  ]
})
export class HomePageModule {}
