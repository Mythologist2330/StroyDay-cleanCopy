import { Component, Input } from '@angular/core';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent{
    
    public isFavorite = false;
    @Input() card: Performer;
    @Input() rating: number;
}