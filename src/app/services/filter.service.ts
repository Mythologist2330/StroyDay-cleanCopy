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
          value: '1', 
          text: 'Москва'
        },
        {
          value: '2', 
          text: 'Санкт-Петербург'
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
        field: 'price',
        title: 'Уровень цен',
        checked: ['0'],
        selector: [{
          value: '0', 
          text: 'Не имеет значения'
        },{
          value: '1', 
          text: 'Эконом'
        },
        {
          value: '2', 
          text: 'Стандарт'
        },
        {
          value: '3', 
          text: 'Премиум'
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

  readonly metroSpb = [
    {
      title: 'Линия 1',
      station: [
        {
          title: 'Проспект Ветеранов',
          lat: 59.84188,
          lng: 30.251543
        },
        {
          title: 'Ленинский проспект',
          lat: 59.851677,
          lng: 30.268279
        },
        {
          title: 'Автово',
          lat: 59.867369,
          lng: 30.261345
        },
        {
          title: 'Кировский завод',
          lat: 59.879726,
          lng: 30.261908
        },
        {
          title: 'Нарвская',
          lat: 59.901169,
          lng: 30.274676
        },
        {
          title: 'Балтийская',
          lat: 59.907245,
          lng: 30.299217
        },
        {
          title: 'Технологический институт-1',
          lat: 59.916799,
          lng: 30.318967
        },
        {
          title: 'Пушкинская',
          lat: 59.920757,
          lng: 30.329641
        },
        {
          title: 'Владимирская',
          lat: 59.927467,
          lng: 30.347875
        },
        {
          title: 'Площадь Восстания',
          lat: 59.931483,
          lng: 30.36036
        },
        {
          title: 'Чернышевская',
          lat: 59.944558,
          lng: 30.359754
        },
        {
          title: 'Площадь Ленина',
          lat: 59.955725,
          lng: 30.355957
        },
        {
          title: 'Выборгская',
          lat: 59.97111,
          lng: 30.347553
        },
        {
          title: 'Лесная',
          lat: 59.98477,
          lng: 30.344201
        },
        {
          title: 'Площадь Мужества',
          lat: 59.999655,
          lng: 30.366595
        },
        {
          title: 'Политехническая',
          lat: 60.008926,
          lng: 30.370952
        },
        {
          title: 'Академическая',
          lat: 60.012763,
          lng: 30.395706
        },
        {
          title: 'Гражданский проспект',
          lat: 60.03481,
          lng: 30.418087
        },
        {
          title: 'Девяткино',
          lat: 60.049799,
          lng: 30.442248
        },
        {
          title: 'Девяткино',
          lat: 60.049799,
          lng: 30.442248
        }
      ]
    },
    {
      title: 'Линия 2',
      station: [
        {
          title: 'Купчино',
          lat: 59.829887,
          lng: 30.375399
        },
        {
          title: 'Звёздная',
          lat: 59.833228,
          lng: 30.349616
        },
        {
          title: 'Московская',
          lat: 59.852192,
          lng: 30.322206
        },
        {
          title: 'Парк Победы',
          lat: 59.86659,
          lng: 30.321712
        },
        {
          title: 'Электросила',
          lat: 59.879425,
          lng: 30.318658
        },
        {
          title: 'Московские Ворота',
          lat: 59.891924,
          lng: 30.317751
        },
        {
          title: 'Фрунзенская',
          lat: 59.906155,
          lng: 30.317509
        },
        {
          title: 'Технологический институт-2',
          lat: 59.916622,
          lng: 30.318505
        },
        {
          title: 'Сенная площадь',
          lat: 59.927090,
          lng: 30.320378
        },
        {
          title: 'Невский проспект',
          lat: 59.935601,
          lng: 30.327134
        },
        {
          title: 'Горьковская',
          lat: 59.956323,
          lng: 30.318724
        },
        {
          title: 'Петроградская',
          lat: 59.966465,
          lng: 30.311432
        },
        {
          title: 'Чёрная речка',
          lat: 59.985574,
          lng: 30.300792
        },
        {
          title: 'Пионерская',
          lat: 60.002576,
          lng: 30.296791
        },
        {
          title: 'Удельная',
          lat: 60.016707,
          lng: 30.315421
        },
        {
          title: 'Озерки',
          lat: 60.037141,
          lng: 30.321529
        },
        {
          title: 'Проспект Просвещения',
          lat: 60.051416,
          lng: 30.332632
        },
        {
          title: 'Парнас',
          lat: 60.06715,
          lng: 30.334128
        }        
      ]
    },
    {
      title: 'Линия 3',
      station: [
        {
          title: 'Приморская',
          lat: 59.948545,
          lng: 30.234526
        },
        {
          title: 'Василеостровская',
          lat: 59.942927,
          lng: 30.278159
        },
        {
          title: 'Гостиный Двор',
          lat: 59.934049,
          lng: 30.333772
        },
        {
          title: 'Маяковская',
          lat: 59.931612,
          lng: 30.35491
        },
        {
          title: 'Площадь Александра Невского-1',
          lat: 59.924314,
          lng: 30.385102
        },
        {
          title: 'Елизаровская',
          lat: 59.896705,
          lng: 30.423637
        },
        {
          title: 'Ломоносовская',
          lat: 59.877433,
          lng: 30.441951
        },
        {
          title: 'Пролетарская',
          lat: 59.865275,
          lng: 30.47026
        },
        {
          title: 'Обухово',
          lat: 59.848795,
          lng: 30.457805
        },
        {
          title: 'Рыбацкое',
          lat: 59.830943,
          lng: 30.500455
        }
      ]
    },
    {
      title: 'Линия 4',
      station: [
        {
          title: 'Улица Дыбенко',
          lat: 59.907573,
          lng: 30.483292
        },
        {
          title: 'Проспект Большевиков',
          lat: 59.919819,
          lng: 30.466908
        },
        {
          title: 'Ладожская',
          lat: 59.93244,
          lng: 30.439474
        },
        {
          title: 'Новочеркасская',
          lat: 59.92933,
          lng: 30.412918
        },
        {
          title: 'Площадь Александра Невского-2',
          lat: 59.92365,
          lng: 30.383471
        },
        {
          title: 'Лиговский проспект',
          lat: 59.920747,
          lng: 30.355245
        },
        {
          title: 'Достоевская',
          lat: 59.928072,
          lng: 30.345746
        },
        {
          title: 'Спасская',
          lat: 59.926839,
          lng: 30.319752
        },
      ]
    },
    {
      title: 'Линия 5',
      station: [
        {
          title: 'Международная',
          lat: 59.869966,
          lng: 30.379045
        },
        {
          title: 'Бухарестская',
          lat: 59.883681,
          lng: 30.369673
        },
        {
          title: 'Волковская',
          lat: 59.896265,
          lng: 30.35686
        },
        {
          title: 'Обводный канал',
          lat: 59.914697,
          lng: 30.349361
        },
        {
          title: 'Звенигородская',
          lat: 59.922304,
          lng: 30.335784
        },
        {
          title: 'Садовая',
          lat: 59.927008,
          lng: 30.317456
        },
        {
          title: 'Адмиралтейская',
          lat: 59.935877,
          lng: 30.314886
        },
        {
          title: 'Спортивная-1',
          lat: 59.952078,
          lng: 30.291312
        },
        {
          title: 'Спортивная-2',
          lat: 59.950365,
          lng: 30.287356
        },
        {
          title: 'Чкаловская',
          lat: 59.950365,
          lng: 30.287356
        },
        {
          title: 'Крестовский остров',
          lat: 59.971838,
          lng: 30.259427
        },
        {
          title: 'Старая Деревня',
          lat: 59.989228,
          lng: 30.255169
        },
        {
          title: 'Комендантский проспект',
          lat: 60.008356,
          lng: 30.258915
        },
      ]
    }
  ]

  constructor() { }

}
