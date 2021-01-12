import { Component, OnInit } from '@angular/core';
import { PerformersCardService } from '../../services/performers-card.service';

@Component({
    selector: 'app-performer',
    templateUrl: './performer.component.html',
    styleUrls: ['./performer.component.scss']
})

export class PerformerComponent implements OnInit{

    sliderImages: string[] = [
        '/assets/images/performer/slider-1.png',
        '/assets/images/performer/slider-2.jpg',
        '/assets/images/performer/slider-3.jpg'
    ]

    constructor (private performersSrv: PerformersCardService) {}

    ngOnInit() {
        // this.performersSrv.getAllPerformersCard().subscribe((cards) => {
        //     console.log(cards)
        // })
    }

}
