import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugerenciasPageRoutingModule } from './sugerencias-routing.module';

import { SugerenciasPage } from './sugerencias.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugerenciasPageRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
  ],
  declarations: [SugerenciasPage]
})
export class SugerenciasPageModule {}
