import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marker } from 'leaflet';
import { first, switchMap, tap } from 'rxjs/operators';
import { Performer } from 'src/app/models/Performer';
import { Review } from 'src/app/models/Review';
import { MapService } from 'src/app/services/map.service';
import { OrderService } from 'src/app/services/order.service';
import { PerformersCardService } from 'src/app/services/performers-card.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{

    public id: string;
    public card: Performer;
    public rating: number;
    public reviews: Review[];
    public markers: Marker[];

    constructor (
        private performersSrv: PerformersCardService,
        private reviewSrv: ReviewService,
        private orderSrv: OrderService,
        private activatedRoute: ActivatedRoute,
        private mapSrv: MapService,
    ) {}

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.parent.params.id
        console.log(this.activatedRoute)
        this.performersSrv.getPerformersCardById(this.id)
        .pipe(
            tap(card => {
                this.card = card;
                this.markers = this.mapSrv.showPerformers([card])
            }),
            switchMap(card => this.reviewSrv.getAllReview(card.id)),
            tap(reviews => this.reviews = reviews),
            switchMap(() => this.orderSrv.getAllOrders(this.card.id)),
            tap(orders => this.card.orders = orders),
            first()
        )
        .subscribe()
    }

}