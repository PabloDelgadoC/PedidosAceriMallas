import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

const iconRetinaUrl = '../../assets/img/marker-icon-2x.png';
const iconUrl = '../../assets/img/marker-icon.png';
const shadowUrl = '../../assets/img/marker-shadow.png';
const iconDefault = Leaflet.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Leaflet.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-local-mapa',
  templateUrl: './local-mapa.page.html',
  styleUrls: ['./local-mapa.page.scss'],
})
export class LocalMapaPage implements OnInit {

  map: Leaflet.Map;
  coordx:string = localStorage.getItem('coordx');
  coordy:string = localStorage.getItem('coordy')

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Leaflet.Map('map').setView([this.coordx, this.coordy], 15);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    Leaflet.marker([this.coordx, this.coordy]).addTo(this.map);
    //this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    localStorage.removeItem('coordx');
    localStorage.removeItem('coordy');
    this.map.remove();
  }

}
