import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.scss'],
  animations: [
    trigger('toggleTree', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      }))
    ])
  ]
})
export class FilterCategoriesComponent implements OnInit {

  @Input() categories: [];
  @Input() checked: string[];
  @Output() setChecked = new EventEmitter()
  public toggle = false;
  public number: number;
  public searchText = ''
  public popup = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.categories)
    
  }

  setSearch(value) {
    this.popup = [];
    if (value.length < 2) {
      return
    }
    this.categories.map((cat: any) => {
      const sub = cat.subServices.filter(sub => {
        if (sub.title.toLowerCase().includes(value.toLowerCase())) {
          this.popup.push(sub.title);
        }
      })      
    })
    if (!this.popup.length) {
      this.popup.push('Ничего не найдено')
    }
    console.log(this.popup)
  }

  addCheck(value) {
    this.popup = [];
    if (value === 'Ничего не найдено') {
      return
    }    
    if (!this.checked.includes(value)) {
      this.setCategories(value);
      console.log('!')
    }    
    this.searchText = value;
  }

  setCategories(value) {
    if (this.checked.includes(value)) {
      this.checked = this.checked.filter(val => val.toLowerCase() !== value.toLowerCase())
    } else {
      this.checked.push(value);
    }
    this.setChecked.emit(this.checked);
  }

  isChecked(value) {
    if (this.checked) {
      return this.checked.includes(value);
    }    
  }

  setToggle(i) {
    console.log(i)
  }

  resetCheckboxes() {
    this.checked = [];
    this.setChecked.emit(this.checked)
  }

}
