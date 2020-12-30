import { Component, Input, OnInit } from '@angular/core';
import { LatLng, Map, Marker } from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() markers: Marker[];
  public toggle = false;
  map: Map;
  public fullscreenOptions: {[key:string]:any} = {
    position: 'topleft',
    title: 'View Fullscreen',
    titleCancel: 'Exit Fullscreen',
  };

  constructor(public mapSrv: MapService) {

   }

  onMapReady(map: Map): void {
    this.map = map;
    this.map.on('click', (e: any) => {
      console.log(e.latlng)
    });
  }

  ngOnInit(): void {
    this.mapSrv.initializeMapOptions();
  }



  
}
