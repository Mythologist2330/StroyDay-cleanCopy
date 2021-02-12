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
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить. В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту',
            segments: ['эконом', 'стандарт'],
            amountOfPhotos: 12,
            views: 540,
            reviews: 13
        },
        {
            title: 'Дизайн-проект детской',
            price: '13 000 ₽',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить. В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту',
            segments: ['эконом', 'стандарт'],
            amountOfPhotos: 12,
            views: 540,
            reviews: 13
        },
        {
            title: 'Дизайн-проект квартиры',
            price: '13 000 ₽',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить. В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту',
            segments: ['эконом', 'стандарт'],
            amountOfPhotos: 12,
            views: 540,
            reviews: 13
        }
    ]

    getColor(segment) {
        if (segment === 'эконом') {
            return '#F8601F'
        } else if (segment === 'стандарт') {
            return '#0D6FE3'
        } else if (segment === 'премиум') {
            return '#9F8C66'
        }
    }

    getBackground(segment) {
        if (segment === 'эконом') {
            return 'linear-gradient(0deg, rgba(248, 96, 31, 0.2), rgba(248, 96, 31, 0.2)), #FFFFFF'
        } else if (segment === 'стандарт') {
            return 'linear-gradient(0deg, rgba(13, 111, 227, 0.2), rgba(13, 111, 227, 0.2)), #FFFFFF'
        } else if (segment === 'премиум') {
            return 'linear-gradient(0deg, rgba(159, 140, 102, 0.2), rgba(159, 140, 102, 0.2)), #FFFFFF'
        }
    }

}