import { Component } from "@angular/core";

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

    showService: boolean = false

    services: any = [
        {
            title: 'Ремонт под ключ',
            segments: ['эконом', 'стандарт', 'премиум'],
            price: 'от 35 000 ₽',
            subServices: [
                {
                    title: 'Дизайн-проект квартиры до 50 кв. м.',
                    segment: 'стандарт',
                    price: 'от 30 000 ₽',
                },
                {
                    title: 'Дизайн детской комнаты',
                    segment: 'премиум',
                    price: 'от 33 000 ₽',
                }
            ]
        },
        {
            title: 'Ремонт детской комнаты',
            segments: ['стандарт', 'премиум'],
            price: 'от 15 000 ₽',
            subServices: [
                {
                    title: 'Дизайн-проект квартиры до 50 кв. м.',
                    segment: 'стандарт',
                    price: 'от 30 000 ₽',
                },
                {
                    title: 'Дизайн детской комнаты',
                    segment: 'премиум',
                    price: 'от 33 000 ₽',
                }
            ]
        },
        {
            title: 'Архитектура промышленных зданий',
            segments: ['стандарт', 'премиум'],
            price: 'от 5 000 ₽',
            subServices: [
                {
                    title: 'Дизайн-проект квартиры до 50 кв. м.',
                    segment: 'стандарт',
                    price: 'от 30 000 ₽',
                },
                {
                    title: 'Дизайн детской комнаты',
                    segment: 'премиум',
                    price: 'от 33 000 ₽',
                }
            ]
        },
        {
            title: 'Архитектура помещений',
            segments: ['стандарт'],
            price: 'от 12 000 ₽',
            subServices: [
                {
                    title: 'Дизайн-проект квартиры до 50 кв. м.',
                    segment: 'стандарт',
                    price: 'от 30 000 ₽',
                },
                {
                    title: 'Дизайн детской комнаты',
                    segment: 'премиум',
                    price: 'от 33 000 ₽',
                }
            ]
        },
        {
            title: 'Дизайн-проект',
            segments: ['стандарт', 'премиум'],
            price: 'от 30 000 ₽',
            subServices: [
                {
                    title: 'Дизайн-проект квартиры до 50 кв. м.',
                    segment: 'стандарт',
                    price: 'от 30 000 ₽',
                },
                {
                    title: 'Дизайн детской комнаты',
                    segment: 'премиум',
                    price: 'от 33 000 ₽',
                }
            ]
        },
        {
            title: 'Архитектура помещений',
            segments: ['эконом', 'стандарт', 'премиум'],
            price: 'от 35 000 ₽',
            subServices: [
                {
                    title: 'Дизайн-проект квартиры до 50 кв. м.',
                    segment: 'стандарт',
                    price: 'от 30 000 ₽',
                },
                {
                    title: 'Дизайн детской комнаты',
                    segment: 'премиум',
                    price: 'от 33 000 ₽',
                }
            ]
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