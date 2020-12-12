import { Injectable } from '@angular/core';
import { IFilter } from '../interfaces/IFilter'

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  
  readonly filters: IFilter[] = [
    {
        title: 'Рейтинг исполнителя',
        selector: ['Не выбран', '1.0 и больше', '2.0 и больше', '3.0 и больше', '4.0 и больше', '5.0'],
        type: 'radio'
    },
    {
        title: 'Положительные отзывы',
        selector: ['Не выбрано', 'Не менее 5', 'Не менее 10', 'Не менее 15', 'Не менее 20'],
        type: 'radio'
    },
    {
        title: 'Скидка',
        selector: ['Не имеет значения', 'Да', 'Нет'],
        type: 'radio'
    },
    {
        title: 'Договор',
        selector: ['Не имеет значения', 'Да', 'Нет'],
        type: 'radio'
    },
    {
        title: 'Тип профиля',
        selector: ['Юридическое лицо', 'Индивид. предприниматель', 'Физическое лицо'],
        type: 'radio'
    },
    {
        title: 'Уровень цен',
        selector: ['Эконом', 'Стандарт', 'Премиум'],
        type: 'checkbox'
    },
    {
        title: 'Заказов в работе',
        selector: ['Не выбрано', 'Не более 3', 'Не более 60', 'Не более 10', 'Не более 15'],
        type: 'radio'
    },
    {
        title: 'Активность исполнителя',
        selector: ['Не выбрано', 'Каждый час', 'Раз в день', 'Раз в неделю', 'Очень редко'],
        type: 'radio'
    }
  ];

  constructor() { }

}
