import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-local-mapa',
  templateUrl: './local-mapa.page.html',
  styleUrls: ['./local-mapa.page.scss'],
})
export class LocalMapaPage implements OnInit {

  map: Leaflet.Map;
  propertyList = [];

  constructor() { }

  ngOnInit() {
  }

  /*ionViewDidEnter() {
    this.map = new Leaflet.Map('mapId3').setView([-2.112597, -78.1109], 16);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '....'
    }).addTo(this.map);

    fetch('./assets/data.json')
      .then(res => res.json())
      .then(data => {
        this.propertyList = data.properties;
        this.leafletMap();
      })
      .catch(err => console.error(err));
  }

  leafletMap() {
    for (const property of this.propertyList) {
      Leaflet.marker([property.lat, property.long]).addTo(this.map)
        .bindPopup(property.city)
        .openPopup();
    }
  }

  ionViewWillLeave() {
    this.map.remove();
  }*/

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Leaflet.Map('mapId3').setView([12.972442, 77.594563], 13);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '... '
    }).addTo(this.map);

    const markPoint = Leaflet.marker([12.972442, 77.594563]);
    markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
    this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
