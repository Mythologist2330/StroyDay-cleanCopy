import { Component, Input } from '@angular/core';
import { Marker } from 'leaflet';

@Component({
    selector: 'app-map-location',
    templateUrl: './map-location.component.html',
    styleUrls: ['./map-location.component.scss']
})

export class MapLocationComponent{

    openCloseComponent = false;
    @Input() markers: Marker[];

}