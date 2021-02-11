import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayOptionsPageRoutingModule } from './pay-options-routing.module';

import { PayOptionsPage } from './pay-options.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayOptionsPageRoutingModule,
    ComponentModule,
  ],
  declarations: [PayOptionsPage]
})
export class PayOptionsPageModule {}
