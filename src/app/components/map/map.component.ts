import { Component, Input, OnInit } from '@angular/core';
import { Map, Marker } from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() markers: Marker[];
  map: Map;
  public fullscreenOptions: {[key:string]:any} = {
    position: 'topleft',
    title: 'Во весь экран',
    titleCancel: 'Свернуть',
  };

  constructor(public mapSrv: MapService) {

   }

  onMapReady(map: Map): void {
    this.map = map;
    this.setCenter(this.markers);
    this.map.on('click', (e: any) => {
      console.log(e.latlng)
    });
  }

  setCenter(markers: Marker[]) {
    if (!markers.length) {
      return
    }
    let sumLat = 0;
    let sumLng = 0;
    markers.map(marker => {
      sumLat += marker.getLatLng().lat;
      sumLng += marker.getLatLng().lng;
    });
    let count = markers.length;
    let medianLat = sumLat / count;
    let medianLng = sumLng / count;
    let center = this.mapSrv.createLatLng(medianLat, medianLng);
    this.map.setView(center, 12);
  }

  ngOnInit(): void {
    this.mapSrv.initializeMapOptions();
    

  }



  
}
