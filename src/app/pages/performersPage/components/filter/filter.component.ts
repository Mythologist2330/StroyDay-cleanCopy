import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter: {title: string, selector: string[], type: string};

  public toggle = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  resetFilter(): void {
      console.log('Reset filter: ' + this.filter.title + '!')
  }
}
