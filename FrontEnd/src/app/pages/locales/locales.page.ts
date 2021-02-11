import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Services } from 'src/app/services/services';
import { Constanst } from '../../constants/constanst';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {
 
  public locals:any = null;

  constructor(
    private router: Router,
    private _service: Services,
    public loadingCtrl: LoadingController,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl .create({
      message: 'Cargando...',
    });
    await loading.present();
    this._service.getProducts(Constanst.URL + '/api/locals')
      .subscribe( (res:any) => {
        this.locals = res.LOCALS;
      },
      (err) => {
        console.log('ERROR TO GET PRODUCTS OR DID NOT ARRIVE SERVER RESPOND: ', err);
      });
    loading.dismiss();
  }

  seleccionar_direccion(lat:string, lng:string) {
    localStorage.setItem('coordx',lat);
    localStorage.setItem('coordy', lng);
    this.router.navigate(['tabs/locales/local']);
  }

}
