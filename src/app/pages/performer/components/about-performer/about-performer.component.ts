import { Component, Input } from "@angular/core";
import { Performer } from "src/app/models/Performer";

@Component({
    selector: 'app-about-performer',
    templateUrl: './about-performer.component.html',
    styleUrls: ['./about-performer.component.scss']
})

export class AboutPerformer {

    public openCloseComponent:boolean = true;
    public showFullAdditionalInfo: boolean = false;
    @Input() card: Performer;

}