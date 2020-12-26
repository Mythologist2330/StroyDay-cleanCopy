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

  constructor(public mapSrv: MapService) {

   }

  ngOnInit(): void {
    this.mapSrv.initializeMapOptions();
    if (this.map) {
      this.markers.map(marker => {
        marker.addTo(this.mapSrv.map)
      })
    }
    console.log(this.map)
  }



  
}
