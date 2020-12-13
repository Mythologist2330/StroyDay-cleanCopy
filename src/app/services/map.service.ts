import { Injectable } from '@angular/core';
import { tileLayer, latLng, icon, Map, MapOptions, Marker, LatLng, Icon, Popup, Polyline, MarkerOptions } from 'leaflet';

export interface SlideMarker extends Marker {
  slideTo?(latLng: LatLng, options: SlideMarkerOptions): this;
}
export interface SlideMarkerOptions extends MarkerOptions {
  duration: number;
}

@Injectable({
  providedIn: 'root'
})

export class MapService {
  map: Map;
  mapOptions: MapOptions;
  icon: Icon;
  targetMarker: SlideMarker;
  targetMarkers: SlideMarker[] = [];
  marker: Marker;
  markers: Marker[] = [];
  polyline: Polyline;
  polylines: Polyline[] = [];
  popup: Popup;
  latLng: LatLng;
  latLngArray: LatLng[] = [];
  layersControl = {
    baseLayers: {
      Схема: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      Спутник: tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {})
    }
  };
  color: string;

  constructor() {}

  updateMap(): void {
    this.map.invalidateSize();
  }

  onMapReady(map: Map): void {
    this.map = map;
  }

  initializeMapOptions(): void {
    this.mapOptions = {
      center: latLng(59.93575245264131, 30.316257476806644),
      zoom: 12,
      layers: [
        tileLayer(
          `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
          {
            maxZoom: 18,
          })
      ],
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

  createMarker(latLng: LatLng, textPopup: string , icon: Icon, IMEI?: string): Marker {
    return new Marker(latLng, { title: IMEI } )
      .setIcon(icon)
      .bindPopup(textPopup);
  }

  getMylocation(): void {
    this.map.locate({ setView: true, enableHighAccuracy: true });
  }
}