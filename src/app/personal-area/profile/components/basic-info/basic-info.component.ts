import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent{

    @Input() performer: Performer;
    public showFullInfo = false;

    constructor(private router: Router) {}

    linkFullInfo(): string {
        return this.showFullInfo ? 'Скрыть' : 'Показать полностью';
    }

    goToBasicInfo() {
        this.router.navigate(['personalArea/' + this.performer.id + '/basicInfo'])
    }

}