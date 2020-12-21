import { Component } from "@angular/core";

export interface IServiceCatalog{
    title: string
    amountOfPerformers: number
}

@Component({
    selector: 'app-serviceCatalog',
    templateUrl: './serviceCatalog.component.html',
    styleUrls: ['./serviceCatalog.component.scss']
})

export class ServiceCatalogComponent{

    serviceCatalog: IServiceCatalog[] = [
        {title: 'Архитектурное проектирование', amountOfPerformers: 380},
        {title: 'Визуализация интерьера', amountOfPerformers: 380},
        {title: '3D-проектирование', amountOfPerformers: 380},
        {title: 'Готовые проекты', amountOfPerformers: 380},
        {title: 'Визуализация интерьера', amountOfPerformers: 380},
        {title: '3D-проектирование', amountOfPerformers: 380},
        {title: 'Архитектурное проектирование', amountOfPerformers: 380},
        {title: 'Визуализация интерьера', amountOfPerformers: 380},
        {title: '3D-проектирование', amountOfPerformers: 380},
        {title: 'Архитектурное проектирование', amountOfPerformers: 380},
        {title: 'Визуализация интерьера', amountOfPerformers: 380},
        {title: '3D-проектирование', amountOfPerformers: 380}
    ]
}