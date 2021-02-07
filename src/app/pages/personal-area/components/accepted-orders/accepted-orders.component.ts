import { Component, OnInit } from "@angular/core";
import { Order, Segment, Status } from "src/app/models/Order";

@Component({
    selector: 'app-acceptedOrders',
    templateUrl: './accepted-orders.component.html',
    styleUrls: ['./accepted-orders.component.scss']
})

export class AcceptedOrdersComponent implements OnInit{

    leftColumn: Order[] = []
    rightColumn: Order[] = []
    orders: Order[] = [
        new Order({
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: 15000,
            createdAt: 122,
            rating: 5,
            segment: [Segment.low],
            status: Status.inProgress
        }),
        new Order({
            title: 'Капитальный ремонт квартиры',
            price: 15000,
            createdAt: 122,
            rating: 5,
            segment: [Segment.premium],
            status: Status.complete
        }),
        new Order({
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: 15000,
            createdAt: 122,
            rating: 5,
            segment: [Segment.low],
            status: Status.inProgress
        }),
        new Order({
            title: 'Капитальный ремонт квартиры в сталинской многоэтажке',
            price: 15000,
            createdAt: 122,
            rating: 5,
            segment: [Segment.standart],
            status: Status.complete
        })
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
        if (status === Status.inProgress) {
            return '#46AA32'
        } else {
            return '#8594A8'
        }
    }

    ngOnInit() {
        for (let serialNumber = 0; serialNumber < this.orders.length; serialNumber++) {
            if(serialNumber % 2 === 0) {
                this.leftColumn.push(new Order(this.orders[serialNumber]))
            } else {
                this.rightColumn.push(new Order(this.orders[serialNumber]))
            }
        }
    }

}