import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPerformersCard } from '../interfaces/IPerformersCard';

@Injectable({
  providedIn: 'root'
})

export class PerformersCardService {

  constructor(private http: HttpClient) { }

  data = [
    {
      "gallery":[
        "../../../assets/images/living-room.performersPage.jpg",
        "../../../assets/images/living-room.performersPage.jpg",
        "../../../assets/images/living-room.performersPage.jpg",
        "../../../assets/images/living-room.performersPage.jpg"
      ],
      "logo":"../../../assets/images/logo.performersPage.png",
      "description":{
        "header":"Архитектурное бюро ZROBYM Architects",
        "rating":"5.0",
        "location":"Москва, СВАО, ул. Тверская, д. 16, оф. 8",
        "metro":"Щелковская",
        "activity":"Оформление и дизайн",
        "contract":"Работает по договору",
        "face":"Юридичекое лицо",
        "info":"Архитектурное бюро MS Architects специализируется на градостроительных концепциях, архитектурном..."
      },
      "statistics":{
        "amountCompletedOrders":356,
        "prices":"Премиум",
        "rating":{"likes":211,"dislikes":4},
        "ordersInProgress":3,
        "online":"Был в сети два дня назад"
      }
    },

    {
      "gallery":[
        "../../../assets/images/living-room.performersPage.jpg",
        "../../../assets/images/living-room.performersPage.jpg",
        "../../../assets/images/living-room.performersPage.jpg",
        "../../../assets/images/living-room.performersPage.jpg"
      ],
      "logo":"../../../assets/images/logo.performersPage.png",
      "description":{
        "header":"Архитектурное бюро ZROBYM Architects",
        "rating":"5.0",
        "location":"Москва, СВАО, ул. Тверская, д. 16, оф. 8",
        "metro":"Щелковская",
        "activity":"Оформление и дизайн",
        "contract":"Работает по договору",
        "face":"Юридичекое лицо",
        "info":"Архитектурное бюро MS Architects специализируется на градостроительных концепциях, архитектурном..."
      },
      "statistics":{
        "amountCompletedOrders":356,
        "prices":"Премиум",
        "rating":{"likes":211,"dislikes":4},
        "ordersInProgress":3,
        "online":"Был в сети два дня назад"
      }
    }
]




  getAllPerformersCard(): Observable<IPerformersCard[]> {


    return new Observable<IPerformersCard[]>(() => {this.data})
    
    //return this.http.get<IPerformersCard[]>('../dataTest.json')

  }





}
