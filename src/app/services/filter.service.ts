import { Injectable } from '@angular/core';
import { IFilter } from '../interfaces/IFilter'

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  
  filters: IFilter[] = [ {
        field: 'city',
        title: 'Город',
        checked: ['0'],
        selector: [{
          value: '0', 
          text: 'Не выбран'
        },
        {
          value: 'Москва', 
          text: 'Москва'
        },
        {
          value: 'Санкт-Петербург', 
          text: 'Санкт-Петербург'
        }],
        type: 'select'
    },
    {
      field: 'district',
      title: 'Район',
      checked: ['0'],
      selector: [{
        value: '0', 
        text: 'Не выбран'
      },
      {
        value: 'Адмиралтейский', 
        text: 'Адмиралтейский'
      },
      {
        value: 'Василеостровский', 
        text: 'Василеостровский'
      },
      {
        value: 'Выборгский', 
        text: 'Выборгский'
      },
      {
        value: 'Калининский', 
        text: 'Калининский'
      },
      {
        value: 'Кировский', 
        text: 'Кировский'
      },
      {
        value: 'Колпинский', 
        text: 'Колпинский'
      },
      {
        value: 'Красногвардейский', 
        text: 'Красногвардейский'
      },
      {
        value: 'Красносельский', 
        text: 'Красносельский'
      },
      {
        value: 'Кронштадтский', 
        text: 'Кронштадтский'
      },
      {
        value: 'Курортный', 
        text: 'Курортный'
      },
      {
        value: 'Московский', 
        text: 'Московский'
      },
      {
        value: 'Невский', 
        text: 'Невский'
      },
      {
        value: 'Петроградский', 
        text: 'Петроградский'
      },
      {
        value: 'Петродворцовый', 
        text: 'Петродворцовый'
      },
      {
        value: 'Приморский', 
        text: 'Приморский'
      },
      {
        value: 'Пушкинский', 
        text: 'Пушкинский'
      },
      {
        value: 'Фрунзенский', 
        text: 'Фрунзенский'
      },
      {
        value: 'Центральный', 
        text: 'Центральный'
      }],
      type: 'select'
    },
    {
        field: 'stars',
        title: 'Рейтинг исполнителя',
        checked: ['0'],
        selector: [{
          value: '0', 
          text: 'Не выбран'
        },
        {
          value: '1', 
          text: '1.0 и больше'
        },
        {
          value: '2', 
          text: '2.0 и больше'
        }, 
        {
          value: '3', 
          text: '3.0 и больше'
        },
        {
          value: '4', 
          text: '4.0 и больше'
        },
        {
          value: '5', 
          text: '5.0'
        }],
        type: 'radio'
    },
    {
        field: 'price',
        title: 'Уровень цен',
        checked: ['0'],
        selector: [{
          value: '0', 
          text: 'Не имеет значения'
        },{
          value: 'Эконом', 
          text: 'Эконом'
        },
        {
          value: 'Стандарт', 
          text: 'Стандарт'
        },
        {
          value: 'Премиум', 
          text: 'Премиум'
        }],
        type: 'radio'
    },
    {
        field: 'discount',
        title: 'Скидка',
        checked: ['0'],
        selector: [
          {
            value: '0', 
            text: 'Не имеет значения'
          },
          {
            value: 'yes', 
            text: 'Да'
          },
          {
            value: 'no', 
            text: 'Нет'
          }],
        type: 'radio'
    },
    {
        field: 'feedback',
        title: 'Положительные отзывы',
        checked: ['0'],
        selector: [
          {
            value: '0', 
            text: 'Не выбрано'
          },
          {
            value: '5', 
            text: 'Не менее 5'
          },
          {
            value: '10', 
            text: 'Не менее 10'
          },
          {
            value: '15', 
            text: 'Не менее 15'
          },
          {
            value: '20', 
            text: 'Не менее 20'
          }],
        type: 'radio'
    },
    {
        field: 'contract',
        title: 'Договор',
        checked: ['0'],
        selector: [
          {
            value: '0', 
            text: 'Не имеет значения'
          },
          {
            value: 'true', 
            text: 'Да'
          },
          {
            value: 'false', 
            text: 'Нет'
          }],
        type: 'radio'
    },
    { 
        field: 'face',
        title: 'Тип профиля',
        checked: ['0'],
        selector: [
          {
            value: '0', 
            text: 'Не имеет значения'
          },
          {
            value: '1', 
            text: 'Юридическое лицо'
          },
          {
            value: '2', 
            text: 'Индивид. предприниматель'
          },
          {
            value: '3', 
            text: 'Физическое лицо'
          }],
        type: 'radio'
    },
    {
        field: 'ordersInProgress',
        title: 'Заказов в работе',
        checked: ['0'],
        selector: [{
          value: '0', 
          text: 'Не выбрано'
        },
        {
          value: '3', 
          text: 'Не более 3'
        },
        {
          value: '5', 
          text: 'Не более 5'
        }, 
        {
          value: '10', 
          text: 'Не более 10'
        },
        {
          value: '15', 
          text: 'Не более 15'
        }],
        type: 'radio'
    },
    {
        field: 'activity',
        title: 'Активность исполнителя',
        checked :['0'],
        selector: [
          {
            value: '0', 
            text: 'Не выбрано'
          },
          {
            value: 'hour', 
            text: 'Каждый час'
          },
          {
            value: 'day', 
            text: 'Раз в день'
          },
          {
            value: 'week', 
            text: 'Раз в неделю'
          },
          {
            value: 'rarely', 
            text: 'Очень редко'
          }],
        type: 'radio'
    }
  ];

  constructor() { }

}
