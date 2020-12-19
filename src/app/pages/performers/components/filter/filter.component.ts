import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilter } from '../../../../interfaces/IFilter';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter: IFilter;
  @Output() sendFilter = new EventEmitter();
  public toggle = false; 

  constructor() {
  }

  ngOnInit(): void {
  }
  
  sendData(e): void {
    this.sendFilter.emit({field: this.filter.field, value: e.value});
  }

  resetFilter(): void {
      console.log('Reset filter: ' + this.filter.title + '!')
  }
}
