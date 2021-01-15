import { Component } from "@angular/core";

@Component({
    selector: 'app-completeApplications',
    templateUrl: './complete-applications.component.html',
    styleUrls: ['./complete-applications.component.scss']
})

export class completeApplicationsComponent {

    applications: any = [
        {
            title: '3D-проектирование детской комнаты',
            price: '15 000 ₽',
            date: '22 января 2020',
            rating: 5.0,
            segment: 'премиум'
        },
        {
            title: '3D-проектирование детской',
            price: '15 000 ₽',
            date: '22 января 2020',
            rating: 5.0,
            segment: 'премиум'
        },
        {
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: '15 000 ₽',
            date: '22 января 2020',
            rating: 5.0,
            segment: 'эконом',
            images: [
                '../../../../../assets/images/performer/image-complete-application.png',
                '../../../../../assets/images/performer/image-complete-application.png',
                '../../../../../assets/images/performer/image-complete-application.png'
            ]
        },
        {
            title: 'Производство отделочных работ с преминением особой',
            price: '15 000 ₽',
            date: '22 января 2020',
            rating: 5.0,
            segment: 'стандарт'
        },
        {
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: '15 000 ₽',
            date: '22 января 2020',
            rating: 5.0,
            segment: 'премиум'
        },
        {
            title: '3D-проектирование детской',
            price: '15 000 ₽',
            date: '22 января 2020',
            rating: 5.0,
            segment: 'премиум',
            images: [
                '../../../../../assets/images/performer/image-complete-application.png',
                '../../../../../assets/images/performer/image-complete-application.png',
                '../../../../../assets/images/performer/image-complete-application.png'
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

}