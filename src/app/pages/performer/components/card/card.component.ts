import { Component, Input } from '@angular/core';
import { Performer } from 'src/app/models/Performer';

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

    ngOnInit(): void {
        this.animateHeader();
        if (window.innerWidth <= 767) { this.isMobile = true }
    }

    animateHeader(): void {
        window.onscroll = () => this.shrinkHeader = (window.pageYOffset > 800) ? true : false;
    };
}