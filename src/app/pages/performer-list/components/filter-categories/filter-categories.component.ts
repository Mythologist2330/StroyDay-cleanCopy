import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

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

	@Input() checked: string[];
	@Output() setChecked = new EventEmitter();
	public categories: Category[];
	public toggle = false;
	public number: number;
	public searchText = ''
	public popup = []

	constructor(public catSrv: CategoryService) { }

	ngOnInit(): void {
		this.catSrv.categories$.subscribe(data => this.categories = data)		
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
