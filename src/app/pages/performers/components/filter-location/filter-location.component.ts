import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilter } from '../../../../interfaces/IFilter';


@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrls: ['./filter-location.component.scss']
})
export class FilterLocationComponent implements OnInit {

  @Input() stations: string[];
  @Input() filter: IFilter;
  @Output() location = new EventEmitter();
  @Output() sendFilter = new EventEmitter();

  public toggle = false;
  constructor() { }

  setFilter(e) {
    this.filter.checked = [e.target.value];
    this.sendFilter.emit(this.filter);
    console.log(this.filter)
  }

  ngOnInit(): void {
  }

}
