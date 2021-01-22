import { Component } from "@angular/core";

@Component({
    selector: 'app-posted-applications',
    templateUrl: './posted-applications.component.html',
    styleUrls: ['./posted-applications.component.scss']
})

export class PostedApplicationsComponent {

    openCloseComponent: boolean = false
    applications: any = [
        {
            title: 'Сделать дизайн-план детской комнаты',
            price: 'по договоренности',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше...',
            date: '22 января 2020',
            views: 540,
            reviews: '13 ответов'
        },
        {
            title: 'Дизайн-проект частного дома',
            price: '13 000 ₽',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше...',
            date: '22 января 2020',
            views: 540,
            reviews: '13 ответов'
        },
        {
            title: 'Сделать дизайн-план детской комнаты',
            price: 'по договоренности',
            description: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше...',
            date: '22 января 2020',
            views: 540,
            reviews: '13 ответов'
        }
    ]

}