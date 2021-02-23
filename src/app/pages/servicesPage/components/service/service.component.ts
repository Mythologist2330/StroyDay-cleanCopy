import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Service } from "src/app/models/Service";
import { ServicesService } from 'src/app/services/services.service';

export interface IFoundServicesSegment{
    priceFrom: string
    typeOfSegment: string
    foundPerformers: string
    color: string
    backgroundColor: string
}

export interface IGalleryLastWorks{
    logo: string
    title: string
    rating: string
}

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceSpecificComponent implements OnInit {

    public id: string;
    public srv$: Observable<Service>

    constructor(private activatedRoute: ActivatedRoute,
                public srvSrv: ServicesService) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.srv$ = this.srvSrv.getServiceById(this.id)
    }

    foundServicesSegment: IFoundServicesSegment[] = [
        {priceFrom: '8392', typeOfSegment: 'эконом', foundPerformers: '1844 исполнителя', color: '#F8601F', backgroundColor: 'rgba(248, 96, 31, 0.05)'},
        {priceFrom: '13 392', typeOfSegment: 'стандарт', foundPerformers: '620 исполнителей', color: '#0D6FE3', backgroundColor: 'rgba(13, 111, 227, 0.05)'},
        {priceFrom: '24 392', typeOfSegment: 'премиум', foundPerformers: '245 исполнителей', color: '#9F8C66', backgroundColor: 'rgba(159, 140, 102, 0.05)'}
    ]

    galleryLastWorks: IGalleryLastWorks[] = [
        {
            logo: '../../../../../assets/images/logo.performersPage.png',
            title: 'Архитектурное бюро ZROBYM Architects',
            rating: '5.0'
        },
        {
            logo: '../../../../../assets/images/logo.performersPage.png',
            title: 'Архитектурное бюро ZROBYM Architects',
            rating: '5.0'
        },
        {
            logo: '../../../../../assets/images/logo.performersPage.png',
            title: 'Архитектурное бюро ZROBYM Architects',
            rating: '5.0'
        },
        {
            logo: '../../../../../assets/images/logo.performersPage.png',
            title: 'Архитектурное бюро ZROBYM Architects',
            rating: '5.0'
        }
    ]

}