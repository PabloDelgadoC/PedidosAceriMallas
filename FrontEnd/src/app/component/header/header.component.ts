import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormularioModalComponent} from '../../pages/formulario-modal/formulario-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() titulo: string = '';

  constructor(private modalCtrl: ModalController) { }

  public async valoracion() {
    const modal= await this.modalCtrl.create({
      component: FormularioModalComponent
    });

    await modal.present();

    // Get returned data
    const { data } = await modal.onWillDismiss();
    if(data==undefined)
      return 0;
    
  }

}
