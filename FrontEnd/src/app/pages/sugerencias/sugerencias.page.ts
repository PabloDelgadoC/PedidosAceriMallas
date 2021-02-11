import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Services } from 'src/app/services/services';
import { Constanst } from '../../constants/constanst';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {


  constructor(
    private _service: Services,
    private toastController: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  public EnviarSugerencia() {
    const sugerencia: any = {
      sugerencia: (document.getElementById('sugerencia') as HTMLInputElement).value
    };
    this._service.postRecomendation(Constanst.URL + '/sugerencias/create', sugerencia)
    .subscribe(async (res:any) => {
      var toast = null;
      if(res.STATUS === 'OK') {
        if(localStorage.getItem("usuario")){
          toast = await this.toastController.create({
            message: res.MESSAGE,
            duration: 3000,
            position:'top',
            cssClass: 'dark-trans'
          });
          toast.present();
        }
        else{
          toast = await this.toastController.create({
            message: 'No ha iniciado sesión',
            duration: 3000,
            position:'top',
            cssClass: 'dark-trans'
          });
          toast.present();
        }
      }else {
        toast = await this.toastController.create({
          message: 'No se ha podido enviar la sugerencia, intente mas tarde',
          duration: 3000,
          position:'top',
          cssClass: 'dark-trans'
        });
        toast.present();
      }
      this.router.navigate(['tabs/assistant']);
    },
    (err) => {
      console.log('ERROR AL CREAR LA SUGERENCIA O NO HAY RESPUESTA EN EL SERVER: ', err);
    });
  }


}
