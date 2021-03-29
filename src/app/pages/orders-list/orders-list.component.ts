import { Component, OnInit } from '@angular/core';
import { ITag } from 'src/app/interfaces/ITag';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})

export class OrdersListComponent implements OnInit {

  public toggleFilters = false;
  public toggleOverlay = false;
  public shrinkHeader = false;
  public tags: ITag[] = [];

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

  ngOnInit(): void {
    this.animateHeader();
  }

  animateHeader(): void {
    window.onscroll = () => this.shrinkHeader = (window.pageYOffset > 100) ? true : false;
  };


  ////////// Одинаковые функции
  invertToggleFilters(e) {
    this.toggleFilters = e;
  }

  invertToggleOverlay(e) {
    this.toggleOverlay = e;
  }
  /////////

}