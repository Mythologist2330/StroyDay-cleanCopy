import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Performer } from 'src/app/models/Performer';
import { ServicesService } from 'src/app/services/services.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent implements OnInit {

    @Input() performer: Performer;
    public showFullInfo = false;
    public ownCategories: string[] = [];

    constructor(private router: Router,
                private servicesSrv: ServicesService,
                private catSrv: CategoryService) {}

    ngOnInit(): void {
        this.getOwnCategories();
    }

    linkFullInfo(): string {
        return this.showFullInfo ? 'Скрыть' : 'Показать полностью';
    }

    goToBasicInfo() {
        this.router.navigate(['personalArea/' + this.performer.id + '/basicInfo'])
    }

    getOwnCategories() {
        this.performer.services.map(service => {
            this.servicesSrv.getServiceById(service.id)
                .pipe(
                    switchMap(srv => this.catSrv.getCategoryById(srv.parent)),
                    map(category => category.title),
                    tap(title => this.ownCategories.push(title))                    
                )
                .subscribe()
        })
    }

}