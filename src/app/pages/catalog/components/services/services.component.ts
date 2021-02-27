import { Component } from "@angular/core";
import { IBreadcrumb } from "src/app/interfaces/IBreadcrumb";
import { CategoryService } from 'src/app/services/category.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

    public breadcrumbs: IBreadcrumb[] = [{
        title: 'Услуги',
        link: '/pages/services'
    }]

    constructor(public catSrv: CategoryService,
                public srvSrv: ServicesService) {

    }

}