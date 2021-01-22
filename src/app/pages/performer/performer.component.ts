import { Component, OnInit } from '@angular/core';
import { PerformersCardService } from '../../services/performers-card.service';
import { ActivatedRoute } from '@angular/router';
import { Performer } from 'src/app/models/Performer';
import { IComment } from 'src/app/interfaces/IComment';
import { Review } from 'src/app/models/Review';

@Component({
    selector: 'app-performer',
    templateUrl: './performer.component.html',
    styleUrls: ['./performer.component.scss']
})

export class PerformerComponent implements OnInit{
    public id: string;
    public card: Performer;

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
