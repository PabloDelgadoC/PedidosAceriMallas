import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentModule } from '../../component/component.module';
import { FormularioModalComponent } from './formulario-modal.component';



@NgModule({
  declarations: [
    FormularioModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioModalModule,
    ComponentModule,
  ]
})
export class FormularioModalModule { }
