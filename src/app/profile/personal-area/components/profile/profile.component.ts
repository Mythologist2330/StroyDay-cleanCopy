import { Component, Input } from '@angular/core';
import { Performer } from 'src/app/models/Performer';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent{

    @Input() performer: Performer;

}