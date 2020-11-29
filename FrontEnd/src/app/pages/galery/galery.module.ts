import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryPageRoutingModule } from './galery-routing.module';

import { GaleryPage } from './galery.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleryPageRoutingModule,
    ComponentModule,
  ],
  declarations: [GaleryPage]
})
export class GaleryPageModule {}
