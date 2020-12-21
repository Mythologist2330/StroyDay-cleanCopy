import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public pager: Array<number> = null;

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.pager = new Array(this.data.count)
  }

}
