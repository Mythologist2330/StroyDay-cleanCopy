import { Component } from "@angular/core";

@Component({
    selector: 'app-posted-orders',
    templateUrl: './posted-orders.component.html',
    styleUrls: ['./posted-orders.component.scss']
})

export class PostedOrdersComponent{

    orders: any = [
        {
            title: 'Дизайн-проект частного дома',
            price: '13 000 ₽',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетител...',
            createdAt: 1,
            views: 540,
            reviews: 13
        },
        {
            title: 'Сделать дизайн-план детской комнаты',
            price: '13 000 ₽',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетител...',
            createdAt: 1,
            views: 540,
            reviews: 13
        },
        {
            title: 'Сделать дизайн-план детской комнаты',
            price: '13 000 ₽',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетител...',
            createdAt: 1,
            views: 540,
            reviews: 13
        }
    ]

}