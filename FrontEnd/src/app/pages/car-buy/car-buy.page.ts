import { Component, NgZone, OnInit } from '@angular/core';
import { Producto } from 'src/app/localCarrito/producto.model';

@Component({
  selector: 'app-car-buy',
  templateUrl: './car-buy.page.html',
  styleUrls: ['./car-buy.page.scss'],
})
export class CarBuyPage implements OnInit {
  public products: Array<Producto>;
  public numArticulos: number;
  public total: number;
  constructor(private zone: NgZone) {
   }
    ngOnInit() {
      
    }
     ngDoCheck(){
      if((JSON.parse(localStorage.getItem("carrito")))!=null){
      this.total=0;
      this.products= JSON.parse(localStorage.getItem("carrito"));
      this.numArticulos= this.products["datos"].length;
      for(let i=0; i<this.numArticulos;i++){
        this.total += this.products["datos"][i]["producto"]["precio"];
      }
    }else{
      this.numArticulos=0;
      this.total=0;
      this.products=null;
    }
    }  
}
