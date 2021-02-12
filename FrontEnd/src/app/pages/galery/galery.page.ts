import { Component, OnInit } from '@angular/core';

import { LoadingController, ModalController } from '@ionic/angular';

import { Services } from 'src/app/services/services';
import { Constanst } from '../../constants/constanst';
import { ModalGaleryPage } from '../modal-galery/modal-galery.page';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  public galeria:any;

  constructor(
    public loadingCtrl: LoadingController,
    private _service: Services,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl .create({
      message: 'Cargando...',
    });
    await loading.present();
    this._service.getProducts(Constanst.URL + '/api/galery')
      .subscribe( (res:any) => {
        this.galeria = res.IMG;
      },
      (err) => {
        console.log('ERROR TO GET GALERY OR DID NOT ARRIVE SERVER RESPOND: ', err);
      });
    loading.dismiss();
  }

  public async showImg(img:any) {
    const modalProduct = await this.modalCtrl.create({
      component: ModalGaleryPage,
      componentProps: {
        img: img.img,
        nombre: img.nombre.toUpperCase(),
        descripcion: img.descripcion
      }
    });
    await modalProduct.present();
  }

}
