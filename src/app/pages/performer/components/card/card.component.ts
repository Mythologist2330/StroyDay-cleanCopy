import { Component, Input } from '@angular/core';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent{
    
    public isFavorite = false;
    public shrinkHeader = false;
    @Input() card: Performer;
    @Input() rating: number;

    ngOnInit(): void {
        this.animateHeader();
    }

    animateHeader(): void {
        window.onscroll = () => this.shrinkHeader = (window.pageYOffset > 800) ? true : false;
    };
}