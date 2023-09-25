import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  marker!: L.Marker;
  baseMaps!: { "Open Street Map": L.TileLayer; "Esri World Imagery": L.TileLayer; "Carto DB Positron":L.TileLayer, "Topografi": L.TileLayer};
  // baseMaps!: L.BaseMaps;

  constructor() { }
  // ngOnInit() {

  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([35.76943, -5800081], 10)
    this.marker = L.marker([35.76943, -5800081]).addTo(this.map);
    this.marker.bindPopup('Era Cantik.').openPopup();

    const openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    const esriWorldImageryLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    const cartoDBPositronLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://carto.com/attributions">CARTO</a>'
    });
    const topographicLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});


    this.baseMaps = {
      "Open Street Map": openStreetMapLayer,
      "Esri World Imagery": esriWorldImageryLayer,
      "Carto DB Positron" : cartoDBPositronLayer,
      "Topografi" : topographicLayer
    };
    L.control.layers(this.baseMaps).addTo(this.map);
    openStreetMapLayer.addTo(this.map);

  }

}
