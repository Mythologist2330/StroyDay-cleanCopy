import { Component, Input } from '@angular/core';
import { IPerformersCard } from 'functions/src/IPerformersCard';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent{
    
    public isFavorite = false;
    @Input() card: IPerformersCard;
}