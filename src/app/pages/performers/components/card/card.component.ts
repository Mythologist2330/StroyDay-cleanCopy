import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    isMobile = false;
    public isFavorite = false;
    @Input() card: any

    constructor() { }

    ngOnInit(): void {
        if (window.innerWidth <= 767) { this.isMobile = true }
    }
}