import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerformersCardService } from '../../services/performers-card.service';
import { ReviewService } from 'src/app/services/review.service';
import { OrderService } from 'src/app/services/order.service';
import { MapService } from 'src/app/services/map.service';
import { Performer } from 'src/app/models/Performer';
import { Marker } from 'leaflet';
import { first, switchMap, tap } from 'rxjs/operators';
import { Review } from 'src/app/models/Review';

@Component({
    selector: 'app-performer',
    templateUrl: './performer.component.html',
    styleUrls: ['./performer.component.scss']
})

export class PerformerComponent implements OnInit{
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
        this.id = this.activatedRoute.snapshot.params.id

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

    
    getRating(): number {
        if (!this.reviews) {
            return 0
        }
        let reviewsWithRating = this.reviews.filter(reply => reply.rating !== null);
        if (!reviewsWithRating.length) {
            return 0;
        }
        let sum = reviewsWithRating.reduce((sum, order) => sum + order.rating, 0)
        let median = sum/this.reviews.length;
        return median
    }
}
