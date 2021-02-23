import { Component } from "@angular/core";
import { CategoryService } from 'src/app/services/category.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent {
    constructor(public catSrv: CategoryService,
                public srvSrv: ServicesService) {

    }

}