import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
	selector: 'app-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.scss'],
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

export class FiltersComponent implements OnInit {

	@Input() checked: string[];
	@Input() toggleFilters: boolean;
    @Input() toggleOverlay: boolean;
    @Output() invertToggleFilters = new EventEmitter();
    @Output() invertToggleOverlay = new EventEmitter();
	@Output() setChecked = new EventEmitter();

	public categories: Category[];
	public number: number;
	public popup = [];
	public searchText = '';
	public someRange = [1, 8];

	filterLocation = false;
	filterServices = false;
	filterPriceLevel = false;
	filterContract = false;
	filterTypeOfPerformer = false;
	filterOrderSum = false;
	filterOrderStatus = false;

	constructor(public catSrv: CategoryService) {}

	ngOnInit(): void {
		this.catSrv.categories$.subscribe(data => this.categories = data);
	}

    setToggles(): void {
        this.toggleFilters = false;
        this.invertToggleFilters.emit(this.toggleFilters)

		if (window.innerWidth < 1276) {
			this.toggleOverlay = false;
			this.invertToggleOverlay.emit(this.toggleOverlay)
		}
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

	setLeftValue() {
		console.log('!')
	}

    onOffScroll(event) {
        let html = event.path.filter(pathElem => pathElem.localName === 'html')
        let body = event.path.filter(pathElem => pathElem.localName === 'body')

        if (html[0].style.overflow === 'hidden') {
            html[0].style.overflow = 'auto'
        } else {
            html[0].style.overflow = 'hidden'
        }

        if (body[0].style.overflow === 'hidden') {
            body[0].style.overflow = 'auto'
        } else {
            body[0].style.overflow = 'hidden'
        }
    }

}