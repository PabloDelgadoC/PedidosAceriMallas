import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {

  images = ['assets/img/logo.png', 'assets/img/logo2.png','assets/img/fondo.png'];

  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
