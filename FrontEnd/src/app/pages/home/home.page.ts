import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/services';
import { Constanst } from '../../constants/constanst';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public products: any = null;

  constructor(
    private _service: Services
  ) { }

  ngOnInit() {
    this._service.getProducts(Constanst.URL + '/api/products')
      .subscribe( (res:any) => {
        this.products = res.PRODUCTS;
      },
      (err) => {
        console.log('ERROR TO GET PRODUCTS OR DID NOT ARRIVE SERVER RESPOND: ', err);
      });
  }

}
