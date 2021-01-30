import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalMapaPageRoutingModule } from './local-mapa-routing.module';

import { LocalMapaPage } from './local-mapa.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalMapaPageRoutingModule,
    ComponentModule,
  ],
  declarations: [LocalMapaPage]
})
export class LocalMapaPageModule {}
