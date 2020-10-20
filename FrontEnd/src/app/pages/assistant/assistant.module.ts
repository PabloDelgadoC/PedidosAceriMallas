import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistantPageRoutingModule } from './assistant-routing.module';

import { AssistantPage } from './assistant.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistantPageRoutingModule,
    ComponentModule,
  ],
  declarations: [AssistantPage]
})
export class AssistantPageModule {}
