import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
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

export class OrdersComponent implements OnInit {

  @Input() checked: string[];
  @Output() setChecked = new EventEmitter();
  public categories: Category[];
  public toggle = false;
  public number: number;
  public searchText = ''
  public popup = []

  filterLocation = false;
  filterServices = false;
  filterPriceLevel = false;
  filterContract = false;
  filterTypeOfPerformer = false;
  filterOrderSum = false;
  filterOrderStatus = false;

  orders = [
    {
      title: 'Дизайн-проект частного дома',
      price: '13 000 ₽',
      description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить. В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту',
      service: 'Монтаж электрики',
      location: 'г. Москва, Центральный р-он, ул. Новая, д. 15 ',
      budget: '100 000 — 250 000 руб. ',
      periodOfExecution: 'до 25 января 2021',
      segments: ['эконом', 'стандарт'],
      date: 'В работе с 22 января 2021',
      amountOfPhotos: '12',
      views: '540',
      reviews: [{},{},{},{},{},{},{},{},{},{},{},{}]
    },
    {
      title: 'Дизайн-проект частного дома',
      price: '13 000 ₽',
      description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить. В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту',
      service: 'Монтаж электрики',
      location: 'г. Москва, Центральный р-он, ул. Новая, д. 15 ',
      budget: '100 000 — 250 000 руб. ',
      periodOfExecution: 'до 25 января 2021',
      segments: ['эконом', 'стандарт'],
      date: 'В работе с 22 января 2021',
      amountOfPhotos: '12',
      views: '540',
      reviews: [{},{},{},{},{},{},{},{},{},{},{},{}]
    },
    {
      title: 'Дизайн-проект частного дома',
      price: '13 000 ₽',
      description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить. В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту',
      service: 'Монтаж электрики',
      location: 'г. Москва, Центральный р-он, ул. Новая, д. 15 ',
      budget: '100 000 — 250 000 руб. ',
      periodOfExecution: 'до 25 января 2021',
      segments: ['эконом', 'стандарт'],
      date: 'В работе с 22 января 2021',
      amountOfPhotos: '12',
      views: '540',
      reviews: [{},{},{},{},{},{},{},{},{},{},{},{}]
    }
  ]

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