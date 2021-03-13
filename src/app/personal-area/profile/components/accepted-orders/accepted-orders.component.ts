import { Component, Input } from "@angular/core";
import { Order } from "src/app/models/Order";

@Component({
    selector: 'app-accepted-orders',
    templateUrl: './accepted-orders.component.html',
    styleUrls: ['./accepted-orders.component.scss']
})

export class AcceptedOrdersComponent{

    @Input() orders: Order[];

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