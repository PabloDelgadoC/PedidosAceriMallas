import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Services } from 'src/app/services/services';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.scss'],
})


export class FormularioModalComponent{

  rating:number=0
  selected_value;
  constructor(private modalCrtl: ModalController, private navParams: NavParams,
              private services: Services) {

  }

  dismissModal(){
    this.modalCrtl.dismiss();
  }

  guardarValoracion(){        
    let data={
      servicio:this.selected_value,
      usuario:localStorage.getItem("usuario"),
      calificacion:this.rating
    }
    this.services.postForm(data).subscribe(result=>{
      if(result["resp"]=="exito")
        this.dismissModal()
      else
        this.dismissModal()
    })
  }

}
