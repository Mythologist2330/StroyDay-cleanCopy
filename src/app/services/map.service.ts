import { Injectable } from '@angular/core';
import { tileLayer, latLng, icon, Map, MapOptions, Marker, LatLng, Icon, Popup, Polyline } from 'leaflet';
import { Performer } from '../models/Performer';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  map: Map;
  mapOptions: MapOptions;
  icon: Icon;
  marker: Marker;
  markers: Marker[] = [];
  polyline: Polyline;
  polylines: Polyline[] = [];
  popup: Popup;
  latLng: LatLng;
  latLngArray: LatLng[] = [];
  color: string;

  constructor() {
  }

  updateMap(): void {
    this.map.invalidateSize();
  }

  onMapReady(map: Map): void {
    this.map = map;
  }

  showMetro(metro) {
    const icon = this.createIcon('/assets/images/marker.png', [30, 36], [15, 36]);
    metro.map(line => {
      line.station.map(station => {
        const latLng = new LatLng(station.lat, station.lng);
        this.createMarker(latLng, station.title, icon)
          .addTo(this.map)
      })
    })
  }

  showPerformers(perf: Performer[]): Marker[] {
    this.markers.map(marker => marker.removeFrom(this.map));
    this.markers = [];

    const icon = this.createIcon('/assets/images/marker.png', [30, 36], [15, 0]);
    perf.map(card => {
      const latLng = new LatLng(card.location.lat, card.location.lng);
      this.markers.push(this.createMarker(latLng, card.description.title, icon, card.logo, card.getLocation() ));        
    });
    return this.markers
  }

  createLatLng(lat: number, lng: number): LatLng {
    return new LatLng(lat, lng);
  }

  initializeMapOptions(): void {
    this.mapOptions = {
      center: latLng(59.93575245264131, 30.316257476806644), // Сюда будут подставляться координаты нашего н.п.
      layers: [
        tileLayer(
          `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
          {
            maxZoom: 18,
          })
      ]
    };
  }

  removeAllFromMap(): void {
    this.polyline.removeFrom(this.map);
    this.markers.map(marker => {
        marker.removeFrom(this.map);
    });
  }

  createIcon(url: string, size: [number, number], anchor: [number, number]): Icon {
    return icon({
      iconUrl: url,
      iconSize: size,
      iconAnchor: anchor
    });
  }

  createPolyline(latLngArray: LatLng[], color: string = '#ff9900'): Polyline {
    const polyline = new Polyline(latLngArray, {color});
    this.polylines.push(polyline);
    return polyline;
  }

  createMarker(latLng: LatLng, title: string , icon?: Icon, logo?: string, adress?: string): Marker {
    if (!icon) {
      const icon = this.createIcon('/assets/images/marker.png', [30, 36], [15, 36]);
    }
    return new Marker(latLng, { title } )
      .setIcon(icon)
      .bindPopup(`
        <div style="display: flex;">
          <div class="logo">
            <img style="border-radius: 50%; border: 1px solid #ccc" src='${logo}'>
          </div>
          <div>
            <p style="margin: 5px 1rem 10px; font-weight: 500; font-size: 14px; font-family: Roboto; color: #334D6E; text-decoration: underline">${title}</p>
            <p style="margin: 0 1rem; font-size: 12px; font-family: Roboto">${adress}</p>
          </div>
        </div>
        `)
  }

  getMylocation(): void {
    this.map.locate({ setView: true, enableHighAccuracy: true });
  }
}