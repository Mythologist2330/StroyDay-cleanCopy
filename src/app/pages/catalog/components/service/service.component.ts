import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IBreadcrumb } from "src/app/interfaces/IBreadcrumb";
import { Category } from "src/app/models/category";
import { Service } from "src/app/models/Service";
import { CategoryService } from "src/app/services/category.service";
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
    public srv$: Observable<Service>;
    public breadcrumbs: IBreadcrumb[] = [];    

    constructor(private activatedRoute: ActivatedRoute,
                public srvSrv: ServicesService,
                private catSrv: CategoryService) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.srv$ = this.srvSrv.getServiceById(this.id)
            .pipe(
                tap(data => this.initBreadcrumbs(data))
            )
    }    

    initBreadcrumbs(srv: Service): void {
        this.catSrv.getChainCategoryById(srv.parent)
            .then(data => {
                this.breadcrumbs = this.getFromCategoryToBreadcrumbs(data);
                this.breadcrumbs.unshift({
                    title: 'Услуги',
                    link: 'pages/services'
                });
                this.breadcrumbs.push({
                    title: srv.title,
                    link: '/pages/service/' + srv.id
                })
            })
    }
    
    getFromCategoryToBreadcrumbs(categories: Category[]): IBreadcrumb[] {
        return categories.map(cat => {
            return {
                title: cat.title,
                link: 'pages/services/service-catalog/' + cat.id
            }
        })
    }

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