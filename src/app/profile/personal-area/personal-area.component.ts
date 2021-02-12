import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Performer } from 'src/app/models/Performer';
import { PerformersCardService } from 'src/app/services/performers-card.service';

@Component({
    selector: 'app-personalArea',
    templateUrl: './personal-area.component.html',
    styleUrls: ['./personal-area.component.scss']
})

export class PersonalAreaComponent implements OnInit{

    public id: string;
    public performer: Performer

    constructor(
        private performerSrv: PerformersCardService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id
        this.performerSrv.getPerformersCardById(this.id).subscribe(
            (data) => {
                console.log(data)
                this.performer = data
            }
        )
    }

}