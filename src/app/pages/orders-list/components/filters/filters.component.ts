import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
	selector: 'app-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {

	@Output() setChecked = new EventEmitter();
	@Input() checked: string[];
	@Input() toggle;
	public categories: Category[];
	public number: number;
	public popup = [];
	public searchText = '';

	constructor(public catSrv: CategoryService) {}

	ngOnInit(): void {
		this.catSrv.categories$.subscribe(data => this.categories = data);
	}

	filterLocation = false;
	filterServices = false;
	filterPriceLevel = false;
	filterContract = false;
	filterTypeOfPerformer = false;
	filterOrderSum = false;
	filterOrderStatus = false;

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

	setSearch(value) {
	  this.popup = [];
	  if (value.length < 2) {
		return
	  }
	  this.categories.filter(cat => {
		  if (cat.title.toLowerCase().includes(value.toLowerCase())) {
			this.popup.push(cat.title);
		  }  
	  })
	  if (!this.popup.length) {
		this.popup.push('Ничего не найдено')
	  }
	}

	addCheck(value) {
	  this.popup = [];
	  if (value === 'Ничего не найдено') {
		return
	  }    
	  if (!this.checked.includes(value)) {
		this.setCategories(value);
	  }    
	  this.searchText = value;
	}

	resetCheckboxes() {
	  this.checked = [];
	  this.setChecked.emit(this.checked)
	}

}