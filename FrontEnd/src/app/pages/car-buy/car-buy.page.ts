import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-buy',
  templateUrl: './car-buy.page.html',
  styleUrls: ['./car-buy.page.scss'],
})
export class CarBuyPage implements OnInit {

  public numArticulos:number;
  public total:number;
  public products:any;

  constructor() { }

  ngOnInit() {
  }

}
