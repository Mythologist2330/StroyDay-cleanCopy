import { Component, OnInit } from '@angular/core';
import { PerformersCardService } from '../../services/performers-card.service';
import { ActivatedRoute } from '@angular/router';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-performer',
    templateUrl: './performer.component.html',
    styleUrls: ['./performer.component.scss']
})

export class PerformerComponent implements OnInit{
    private id: string;
    public card: Performer;
    sliderImages: string[] = [
        '/assets/images/performer/slider-1.png',
        '/assets/images/performer/slider-2.jpg',
        '/assets/images/performer/slider-3.jpg'
    ]

    constructor (
        private performersSrv: PerformersCardService,
        private activatedRoute: ActivatedRoute,
                ) {}

    ngOnInit() {  
        this.id = this.activatedRoute.snapshot.params.id

        this.performersSrv.getPerformersCardById(this.id)
            .subscribe((data: Performer) => {
                this.card = data;
                console.log(this.card)
            })
    }
}
