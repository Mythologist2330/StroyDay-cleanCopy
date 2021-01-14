import { Component } from "@angular/core";

@Component({
    selector: 'app-authorBlog',
    templateUrl: './author-blog.component.html',
    styleUrls: ['./author-blog.component.scss']
})

export class authorBlogComponent {

    cards: any = [
        {
            image: '../../../../../assets/images/performer/bathroom.png',
            tag: 'Дизайн кухни',
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            date: '22 января 2020',
            views: 540,
            likes: 32
        },
        {
            image: '../../../../../assets/images/performer/bathroom.png',
            tag: 'Дизайн ванной',
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            date: '22 января 2020',
            views: 540,
            likes: 32
        },
        {
            image: '../../../../../assets/images/performer/bathroom.png',
            tag: 'Дизайн кухни',
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            date: '22 января 2020',
            views: 540,
            likes: 32
        },
        {
            image: '../../../../../assets/images/performer/bathroom.png',
            tag: 'Дизайн ванной',
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            date: '22 января 2020',
            views: 540,
            likes: 32
        }
    ]

}