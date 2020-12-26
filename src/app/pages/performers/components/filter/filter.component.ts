import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilter } from '../../../../interfaces/IFilter';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter: IFilter;
  @Output() sendFilter = new EventEmitter<IFilter>();
  public toggle = false; 

  constructor() {
  }

  ngOnInit(): void {
  }
  
  sendData(e): void {
    console.log(e);
    this.filter.checked = [e.value];
    this.sendFilter.emit(this.filter);
  }

  resetFilter(): void {
      this.filter.checked = ['0'];
      this.sendFilter.emit(this.filter);
  }
}
