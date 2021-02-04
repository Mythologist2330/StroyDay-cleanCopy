import { Component, Input } from '@angular/core';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-basicInfo',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent{

    @Input() performer: Performer

}