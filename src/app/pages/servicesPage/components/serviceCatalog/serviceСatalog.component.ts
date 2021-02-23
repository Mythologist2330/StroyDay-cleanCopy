import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { Category } from "src/app/models/category";
import { ServicesService } from 'src/app/services/services.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-serviceCatalog',
    templateUrl: './serviceCatalog.component.html',
    styleUrls: ['./serviceCatalog.component.scss']
})

export class ServiceCatalogComponent implements OnInit {

    public id: string;
    public category$: Observable<Category>;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                public catSrv: CategoryService,
                public srvSrv: ServicesService) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(data => {
            this.id = data.id;
            this.category$ = this.catSrv.getCategoryById(data.id)
        })
    }

    goToCategory(id: string) {
        this.router.navigate(['pages/services/service-catalog/' + id]);
    }
}