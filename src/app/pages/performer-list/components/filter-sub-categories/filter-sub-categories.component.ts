import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Category {
  title: string;
  id: string;
  subServices: {
    title: string,
    id: string;
    subSubServices: {
      title: string,
      id: string;
    }[]
  }[]
}

@Component({
  selector: 'app-filter-sub-categories',
  templateUrl: './filter-sub-categories.component.html',
  styleUrls: ['./filter-sub-categories.component.scss']
})
export class FilterSubCategoriesComponent implements OnInit {

  @Input() category: Category;
  @Input() checkingSub: string[];
  public toggle = false;
  @Output() setChecking = new EventEmitter();

  constructor() { }

  setCategory(value) {
    this.setChecking.emit(value);
  }

  isChecked(value) {
    if (this.checkingSub) {
      return this.checkingSub.includes(value);
    }    
  }

  ngOnInit(): void {
  }

}
