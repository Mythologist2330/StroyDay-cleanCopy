import { Component } from "@angular/core";

@Component({
    selector: 'app-acceptedOrders',
    templateUrl: './accepted-orders.component.html',
    styleUrls: ['./accepted-orders.component.scss']
})

export class AcceptedOrdersComponent {

    orders: any = [
        {
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: '15 000 ₽',
            createdAt: 122,
            rating: 5,
            segment: ['эконом'],
            status: 'В работе'
        },
        {
            title: 'Капитальный ремонт квартиры',
            price: '15 000 ₽',
            createdAt: 122,
            rating: 5,
            segment: ['премиум'],
            status: 'Завершен'
        },
        {
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: '15 000 ₽',
            createdAt: 122,
            rating: 5,
            segment: ['эконом'],
            status: 'В работе'
        },
        {
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: '15 000 ₽',
            createdAt: 122,
            rating: 5,
            segment: ['стандарт'],
            status: 'Завершен'
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

    getBackgroundColor(status) {
        if (status === 'В работе') {
            return '#46AA32'
        } else {
            return '#8594A8'
        }
    }

}