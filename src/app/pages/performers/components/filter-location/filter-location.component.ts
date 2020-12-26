import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrls: ['./filter-location.component.scss']
})
export class FilterLocationComponent implements OnInit {

  @Input() stations: string[];
  @Output() location = new EventEmitter();

  public toggle = false;
  constructor() { }

  addLocation(event) {
    this.location.emit(event);
  }

  ngOnInit(): void {
  }

}
