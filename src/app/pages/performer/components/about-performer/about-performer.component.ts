import { Component, Input } from "@angular/core";
import { Performer } from "src/app/models/Performer";

@Component({
    selector: 'app-about-performer',
    templateUrl: './about-performer.component.html',
    styleUrls: ['./about-performer.component.scss']
})

export class AboutPerformer {

    @Input() card: Performer;
    public openCloseComponent = true;
    showFullInfo = false;
    linkFullInfo(): string {
        return this.showFullInfo ? 'Скрыть' : 'Показать полностью';
    }

}