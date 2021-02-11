import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.page.html',
  styleUrls: ['./modal-product.page.scss'],
})
export class ModalProductPage implements OnInit {

  @Input() img: string;
  @Input() nombre: string;
  @Input() precio: string;
  @Input() descripcion: number;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  addCar() {
    this.modalCtrl.dismiss();
  }

}
