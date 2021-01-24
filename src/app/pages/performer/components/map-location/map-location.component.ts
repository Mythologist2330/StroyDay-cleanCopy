import { Component, Input } from '@angular/core';
import { Marker } from 'leaflet';

@Component({
    selector: 'app-map-location',
    templateUrl: './map-location.component.html',
    styleUrls: ['./map-location.component.scss']
})

export class MapLocationComponent{

    public openCloseComponent:boolean = true;
    @Input() markers: Marker[];

}