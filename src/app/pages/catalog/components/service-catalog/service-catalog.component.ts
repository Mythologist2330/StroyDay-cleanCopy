import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { Category } from "src/app/models/category";
import { IBreadcrumb } from "src/app/interfaces/IBreadcrumb";
import { ServicesService } from 'src/app/services/services.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-service-catalog',
    templateUrl: './service-catalog.component.html',
    styleUrls: ['./service-catalog.component.scss']
})

export class ServiceCatalogComponent implements OnInit {

    public id: string;
    public category$: Observable<Category>;
    public breadcrumbs: IBreadcrumb[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                public catSrv: CategoryService,
                public srvSrv: ServicesService) {}

    ngOnInit() {
        this.category$ = this.activatedRoute.params.pipe(
            tap(data => {
                this.id = data.id;
                this.initBreadcrumbs(data.id)
            }),
            switchMap((data) => this.catSrv.getCategoryById(data.id)),
        )
    }
    
    initBreadcrumbs(id: string): void {
        this.catSrv.getChainCategoryById(id)
            .then(data => {
                this.breadcrumbs = this.getFromCategoryToBreadcrumbs(data);
                this.breadcrumbs.unshift({
                    title: 'Услуги',
                    link: 'pages/services'
                });
            });
    }

    getFromCategoryToBreadcrumbs(categories: Category[]): IBreadcrumb[] {
        return categories.map(cat => {
            return {
                title: cat.title,
                link: 'pages/services/service-catalog/' + cat.id
            }
        })
    }

    goToCategory(id: string) {
        this.router.navigate(['pages/services/service-catalog/' + id]);
    }
}