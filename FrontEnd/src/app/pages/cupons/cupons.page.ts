import { Component, OnInit } from '@angular/core';
import { BooleanValueAccessor, LoadingController } from '@ionic/angular';

import { Services } from 'src/app/services/services';
import { Constanst } from '../../constants/constanst';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  public cupons:any;

  constructor(
    private _service: Services,
    public loadingCtrl: LoadingController,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl .create({
      message: 'Cargando...',
    });
    await loading.present();
    this._service.getCupons(Constanst.URL + '/api/cupones')
      .subscribe( (res:any) => {
        this.cupons = res.CUPONS;
      },
      (err) => {
        console.log('ERROR TO GET PRODUCTS OR DID NOT ARRIVE SERVER RESPOND: ', err);
      });
    loading.dismiss();
  }

}
