import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-location',
  templateUrl: './filter-location.component.html',
  styleUrls: ['./filter-location.component.scss']
})
export class FilterLocationComponent implements OnInit {

  @Input() stations: string[];

  public toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

}
