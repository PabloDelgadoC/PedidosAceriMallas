import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

import { Services } from 'src/app/services/services';
import { Constanst } from '../../constants/constanst';
import { ModalProductPage } from '../modal-product/modal-product.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public products: any = null;
  public textToFilter: string;
  public flag: boolean = false;
  public segment: string = '';
  public searchDisable:boolean = false;

  constructor(
    private _service: Services,
    public loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl .create({
      message: 'Cargando...',
    });
    await loading.present();
    this._service.getProducts(Constanst.URL + '/api/products')
      .subscribe( (res:any) => {
        this.products = res.PRODUCTS;
      },
      (err) => {
        console.log('ERROR TO GET PRODUCTS OR DID NOT ARRIVE SERVER RESPOND: ', err);
      });
    loading.dismiss();
  }

  segmentChanged(event) {
    this.segment = event.detail.value;
    if ( this.segment === "") {
      this.flag = false;
      this.searchDisable = false;
    }
    else{
      this.flag = true;
      this.searchDisable = true;
    }
  }

  onSearchChange(event) {
    this.textToFilter = event.detail.value;
  }

  async showProduct(product:any) {
    const modalProduct = await this.modalCtrl.create({
      component: ModalProductPage,
      componentProps: {
        img: product.img,
        nombre: product.nombre.toUpperCase(),
        precio: product.precio,
        descripcion: product.descripcion
      }
    });
    await modalProduct.present();
  }

}
