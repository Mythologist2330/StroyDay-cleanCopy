import { Component } from "@angular/core";

@Component({
    selector: 'app-about-performer',
    templateUrl: './about-performer.component.html',
    styleUrls: ['./about-performer.component.scss']
})

export class AboutPerformer {

    public openCloseComponent:boolean = true;
    showFullAdditionalInfo: boolean = false

    aboutPerformer: any = {
        departureArea: 'Южный район, Северный район, Юго-восточный район, Подберезовики, Дзержинский район',
        metro: 'Перечисление станций метро',
        lead: 'Константинопольский Константин Константинович',
        tel: '+7 888 473-23-22',
        email: 'example@gmail.com',
        additionalInfo: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.'
    }

}