import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-galery',
  templateUrl: './modal-galery.page.html',
  styleUrls: ['./modal-galery.page.scss'],
})
export class ModalGaleryPage implements OnInit {

  @Input() img: string;
  @Input() nombre: string;
  @Input() descripcion: number;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

}
