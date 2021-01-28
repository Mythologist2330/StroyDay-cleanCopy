import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilter } from '../../../../interfaces/IFilter';
import { LocationService } from '../../../../services/location.service';
import { IStation } from '../../../../interfaces/IMetro';


@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrls: ['./filter-location.component.scss']
})
export class FilterLocationComponent implements OnInit {

  @Input() filter: IFilter;
  @Output() location = new EventEmitter();
  @Output() sendFilter = new EventEmitter();

  public stations: IStation[] = [];
  public district: string[] = [];
  public toggle = false;
  constructor(private locationSrv: LocationService) { }

  getDistrict() {
    // this.filterSrv.metroSpb.map(line => {
    //   line.station.map(station => {
    //     this.stations.push(station.title)
    //   })
    // });
    // return this.stations;
  }

  setCity(e) {
    let city = e.target.value
    this.filter.checked = [city];
    this.sendFilter.emit(this.filter);
    if (city == 'Санкт-Петербург') {
      this.locationSrv.getMetro(city).subscribe(metro => this.stations = metro.stations)
    } else { this.stations = [] }
  }

  ngOnInit(): void {
    if (this.filter.checked[0] === 'Санкт-Петербург') {
      this.locationSrv.getMetro(this.filter.checked[0]).subscribe(metro => this.stations = metro.stations)
    }
  }

}
