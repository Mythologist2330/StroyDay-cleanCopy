import { Component, Input } from '@angular/core';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-profile-face',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileFaceComponent{

    @Input() performer: Performer;

    getCountOrders(status: string): number {
        return this.performer.orders.filter(order => order.status === status).length
    }

    getCountReviews(): number {
        let count = 0;
        this.performer.orders.map(order => order.reviews ? count += order.reviews.length : 0);
        return count;
    }

}