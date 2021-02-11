import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { Services } from 'src/app/services/services';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.scss'],
})


export class FormularioModalComponent{

  rating:number;
  selected_value;
  constructor(
    private modalCrtl: ModalController,
    private toastController: ToastController,
    private services: Services
  ) { }

  closeModal() {
    this.modalCrtl.dismiss();
  }

  guardarValoracion(){        
    let data={
      servicio:this.selected_value,
      usuario:localStorage.getItem("usuario"),
      calificacion:this.rating
    };

    this.services.postForm(data).subscribe( async result => {
      var toast = null;
      if(result["resp"]=="exito"){
        this.closeModal();
        toast = await this.toastController.create({
          message: 'Se ha enviado su calificación con éxito',
          duration: 3000,
          position: 'top',
          cssClass: 'dark-trans'
        });
        toast.present();
      }
      else{
        this.closeModal();
        toast = await this.toastController.create({
          message: 'No se ha enviado su calificación',
          duration: 3000,
          position: 'top',
          cssClass: 'dark-trans'
        });
        toast.present();
      }
    });
  }

}
