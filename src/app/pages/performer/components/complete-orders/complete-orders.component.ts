import { Component, Input, OnInit } from "@angular/core";
import { first, map } from "rxjs/operators";
import { Order, Segment, Status } from "src/app/models/Order";
import { OrderService } from 'src/app/services/order.service';

@Component({
    selector: 'app-complete-orders',
    templateUrl: './complete-orders.component.html',
    styleUrls: ['./complete-orders.component.scss']
})

export class CompleteOrdersComponent implements OnInit {

    @Input() performerId: string
    public openCloseComponent = true;
    public leftColumn: Order[] = [];
    public rightColumn: Order[] = [];
    public orders: Order[] = [];
    public ordersAll: Order[] = [];
    public ordersLow: Order[] = [];
    public ordersStandart: Order[] = [];
    public ordersPremium: Order[] = [];
    
    constructor(private orderSrv: OrderService) {
    }

    getColor(segment) {
        if (segment === 'эконом') {
            return '#F8601F'
        } else if (segment === 'стандарт') {
            return '#0D6FE3'
        } else if (segment === 'премиум') {
            return '#9F8C66'
        }
    }

    //* Это пиздец какой костыль дальше попер

    setFilter(e) {
        const segment = e.target.value;
        if (segment === 'low') {
            this.orders = this.ordersLow
        } else if (segment === 'standart') {
            this.orders = this.ordersStandart
        } else if (segment === 'premium') {
            this.orders = this.ordersPremium
        } else {
            this.orders = this.ordersAll
        }
    }

    ngOnInit(): void {
        this.orderSrv.getAllOrders(this.performerId)
        .pipe(
            map(orders => {
                orders = orders.filter(order => order.status === Status.complete);
                return orders.map(order => new Order(order))
            }),
            first()
            )
        .subscribe(orders => {
            this.orders = orders;
            this.ordersAll = orders;
            this.ordersLow = orders.filter(order => order.segment[0] === Segment.low);
            this.ordersStandart = orders.filter(order => order.segment[0] === Segment.standart);
            this.ordersPremium = orders.filter(order => order.segment[0] === Segment.premium);

            for (let serialNumber = 0; serialNumber < this.orders.length; serialNumber++) {
                if(serialNumber % 2 === 0) {
                    this.rightColumn.push(new Order(this.orders[serialNumber]))
                } else {
                    this.leftColumn.push(new Order(this.orders[serialNumber]))
                }
            }
        })
    }
}