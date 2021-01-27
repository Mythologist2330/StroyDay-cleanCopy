import { Component, Input, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Order, Status } from "src/app/models/Order";
import { OrderService } from 'src/app/services/order.service';

@Component({
    selector: 'app-posted-orders',
    templateUrl: './posted-orders.component.html',
    styleUrls: ['./posted-orders.component.scss']
})

export class PostedOrdersComponent implements OnInit {

    @Input() authorId: string;
    public openCloseComponent: boolean = true;
    public orders: Order[] = [];
    public ordersAll: Order[] = [];
    public ordersActive: Order[] = [];
    public ordersComplete: Order[] = [];

    constructor(private orderSrv: OrderService) {        
    }

    setFilter(e) {
        const sortBy = e.target.value;
        if (sortBy === 'active') {
            this.orders = this.ordersActive;
        } else if (sortBy === 'complete') {
            this.orders = this.ordersComplete
        } else {
            this.orders = this.ordersAll
        }

    }

    ngOnInit(): void {
        this.orderSrv.getAllOrders(this.authorId)
            .pipe(
                map(orders => {
                    orders = orders.filter(order => order.authorId === this.authorId);
                    return orders.map(order => new Order(order));
                })
            ).subscribe(orders => {
                this.orders = orders;
                this.ordersAll = orders;
                this.ordersActive = orders.filter(order => order.status === Status.active);
                this.ordersComplete = orders.filter(order => order.status === Status.complete);
            })
    }

}