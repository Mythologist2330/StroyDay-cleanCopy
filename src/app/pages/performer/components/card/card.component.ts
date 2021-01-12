import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent{
    
    public isFavorite = false;

    card: any = {
        logo: '../../../assets/images/logo.performersPage.png',
        description: {
            header: 'Архитектурное бюро ZROBYM Architects',
            stars: '5.0',
            activity: 'Оформление и дизайн, строительство, восстановление фасадов, отделка жилых помещений',
            location: 'Москва, СВАО, ул. Тверская, д. 16, оф. 8',
            metro: 'Щелковская'
        },
        statistics: {
            amountCompletedOrders: 356,
            prices: 'Премиум',
            rating: {
                likes: 211,
                dislikes: 4
            },
            ordersInProgress: 3
        }
    }

}