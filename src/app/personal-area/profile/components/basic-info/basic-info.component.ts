import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Performer } from 'src/app/models/Performer';
import { ServicesService } from 'src/app/services/services.service';
import { CategoryService } from 'src/app/services/category.service';
import { Service } from 'src/app/models/Service';

@Component({
    selector: 'app-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent implements OnInit {

    @Input() performer: Performer;
    public showFullInfo = false;
    public ownServices: string[] = [];

    constructor(private router: Router,
                private servicesSrv: ServicesService) {}

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
                    map(srv => srv.title),
                    tap(title => this.ownServices.push(title))                    
                )
                .subscribe()
        })
    }
}