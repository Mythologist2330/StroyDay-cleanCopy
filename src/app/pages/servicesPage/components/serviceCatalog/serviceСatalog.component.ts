import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";
import { Category } from "src/app/models/category";
import { ServicesService } from 'src/app/services/services.service';
import { CategoryService } from 'src/app/services/category.service';
import { switchMap, tap } from "rxjs/operators";

@Component({
    selector: 'app-serviceCatalog',
    templateUrl: './serviceCatalog.component.html',
    styleUrls: ['./serviceCatalog.component.scss']
})

export class ServiceCatalogComponent implements OnInit {

    public id: string;
    public category$: Observable<Category>;
    public breadcrumbs: {title: string, link: string}[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                public catSrv: CategoryService,
                public srvSrv: ServicesService) {}

    ngOnInit() {
        this.category$ = this.activatedRoute.params.pipe(
            tap(data => this.id = data.id),
            switchMap((data) => this.catSrv.getCategoryById(data.id)),
            tap(cat => this.getBreadcrumbs(cat))
        )
    }
    
  getBreadcrumbs(category: Category) {
      this.breadcrumbs = [];
      this.breadcrumbs.push({
          title: category.title,
          link: 'pages/services/service-catalog/' + category.id
      })

      this.breadcrumbs.unshift({
          title: 'Услуги',
          link: 'pages/services'
      });

      console.log(category)
  }

    goToCategory(id: string) {
        this.router.navigate(['pages/services/service-catalog/' + id]);
    }
}