import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    public isFavorite = false;
    @Input() card: any

    constructor() { }

    ngOnInit(): void {
        console.log(this.card);
    }
}