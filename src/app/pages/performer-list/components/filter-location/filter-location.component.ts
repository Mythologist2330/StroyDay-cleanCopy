import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilter } from '../../../../interfaces/IFilter';
import { IMetroStation, IStation } from '../../../../interfaces/IMetro';
import { LocationService } from 'src/app/services/location.service';


@Component({
	selector: 'app-filter-location',
	templateUrl: './filter-location.component.html',
	styleUrls: ['./filter-location.component.scss']
})
export class FilterLocationComponent implements OnInit {

	@Input() locationFilters: IFilter[];
	@Output() location = new EventEmitter();
	@Output() sendFilter = new EventEmitter();
	
	public cityFilter: IFilter;
	public metroFilter: IFilter;
	public districtFilter: IFilter;
	public stations: IStation[] = [];
	public district: string[] = [];
	public toggle = false;
	constructor(private locationSrv: LocationService) {}

	setFilter(value: string, field: string) {
		const currentfilter = this.locationFilters.find(filter => filter.field === field);
		currentfilter.checked = [value];
		this.sendFilter.emit(currentfilter);
		if (field === 'city') {
			this.metroFilter.selector.splice(1, this.metroFilter.selector.length);
			this.districtFilter.selector.splice(1, this.districtFilter.selector.length);
			this.setFilter('0', 'metro');
			this.getMetroStations();
			this.setFilter('0', 'district');
			this.getDistricts()
		}
	}

	getMetroStations(): void {
		if (this.cityFilter.checked[0] === '0') {
			return
		}
		this.locationSrv.getMetro(this.cityFilter.checked[0])
			.subscribe((metro: IMetroStation[]) => {
				metro[0].stations.map(station => {
					this.metroFilter.selector.push({text: station.title, value: station.title})
				})
			})
	}

	getDistricts(): void {
		if (this.cityFilter.checked[0] === '0') {
			return
		}
		this.locationSrv.getDistricts(this.cityFilter.checked[0]).subscribe((district) => {
			district[0].districts.map((val: string) => {
				this.districtFilter.selector.push({text: val, value: val});
			})
		})
	}

	ngOnInit(): void {
		this.cityFilter = this.locationFilters.find(filter => filter.field === 'city');
		this.metroFilter = this.locationFilters.find(filter => filter.field === 'metro');
		this.districtFilter = this.locationFilters.find(filter => filter.field === 'district');
		this.getDistricts()
		this.getMetroStations();
	}

}
