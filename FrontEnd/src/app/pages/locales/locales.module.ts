import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalesPageRoutingModule } from './locales-routing.module';

import { LocalesPage } from './locales.page';
import { ComponentModule } from '../../component/component.module';
import { LocalMapaPage } from './local-mapa/local-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalesPageRoutingModule,
    ComponentModule,
  ],
  declarations: [
    LocalesPage,
    LocalMapaPage,
  ]
})
export class LocalesPageModule {}
