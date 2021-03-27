import { Component, Input } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Performer } from 'src/app/models/Performer';
import { ServicesService } from 'src/app/services/services.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent{
    
    @Input() card: Performer;
    @Input() rating: number;
    public isFavorite = false;
    public shrinkHeader = false;
    public isMobile = false;
    public ownServices: string[] = [];
    ownPrices: number[] = []

    constructor(private servicesSrv: ServicesService) {}

    ngOnInit(): void {
        this.animateHeader();
        if (window.innerWidth <= 767) { this.isMobile = true };

        this.getOwnCategories();
    }

    animateHeader(): void {
        window.onscroll = () => this.shrinkHeader = (window.pageYOffset > 800) ? true : false;
    };

    getOwnCategories() {
        this.card.services.map(service => {
            this.servicesSrv.getServiceById(service.id)
                .pipe(
                    tap(srv => this.ownPrices.push(Math.min(+srv.cost.low, +srv.cost.standart, +srv.cost.premium))), 
                    tap(srv => this.ownServices.push(srv.title))                    
                )
                .subscribe()
        })
    }

    getMinPrice() {
        return "от " + Math.min(...this.ownPrices) + ' ₽'
    }
}