import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Producto } from '../../localCarrito/producto.model';
@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.page.html',
  styleUrls: ['./modal-product.page.scss'],
})
export class ModalProductPage implements OnInit {

  public cantidad:number;
  @Input() img: string;
  @Input() nombre: string;
  @Input() precio: string;
  @Input() descripcion: string;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.cantidad = 1;
  }

  addCar() {
    let producto: Producto = {
      cantidad: this.cantidad,
      img: this.img,
      nombre: this.nombre,
      precio: parseInt(this.precio)*this.cantidad,
      descripcion: this.descripcion
    };
    var datosLocal = localStorage.getItem('carrito')
    var objeto = datosLocal==null?{datos:[]}:JSON.parse(datosLocal);
    objeto.datos.push({"producto": producto});
    localStorage.setItem("carrito", JSON.stringify(objeto))


    this.modalCtrl.dismiss();
  }
  goBack(){
    this.modalCtrl.dismiss();
  }
  sumar(){
    this.cantidad=this.cantidad+1;
    document.getElementById('valor').innerHTML = "$"+(this.cantidad*parseInt(this.precio)).toString();
    
  }
  restar(){
    if(this.cantidad!=1){
      this.cantidad=this.cantidad-1;
      document.getElementById('valor').innerHTML = "$"+(this.cantidad*parseInt(this.precio)).toString();
    }
    
  }
  disenio(){}
}
