import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Segment } from 'src/app/models/Order';
import { OwnService } from 'src/app/models/OwnService';
import { Service } from 'src/app/models/Service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
    selector: 'app-service-list',
    templateUrl: './service-list.component.html',
    styleUrls: ['./service-list.component.scss']
})

export class ServiceListComponent implements OnInit, OnDestroy {

    @Input() srv: {id: string, low: boolean, standart: boolean, premium: boolean}[];
    public allServices: OwnService[];
    public services: OwnService[];
    public servicesSub$: Subscription;
    public segment = 'all';

    constructor(private serviceSrv: ServicesService) {
    }

    ngOnInit(): void {
        this.servicesSub$ = this.serviceSrv.services$
            .pipe(
                map(services => services.length ? this.getOwnServices(services) : []),
                tap(data => this.allServices = data),
                map(services => services.filter(srv => this.segment !== 'all' ? srv[this.segment] : true)),
                tap(data => this.services = data),
            )
            .subscribe()
    }

    ngOnDestroy() {
        this.servicesSub$.unsubscribe()
    }

    getOwnServices(services: Service[]): OwnService[]  {
        return <OwnService[]>this.srv.map(v => {
            return new OwnService({
                ...services.find(service => service.id === v.id),
                low: v.low,
                standart: v.standart,
                premium: v.premium
            })
        })
    }

    getServiceBySegment(services: OwnService[], segment: string): OwnService[] {
        return services.filter(service => service[segment]);
    }

    changeSegment(segment: string): void {
        this.segment = segment;
        this.serviceSrv.renderServicesSub()
    }

}