import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Service } from "src/app/models/Service";
import { ServicesService } from 'src/app/services/services.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

    public openCloseComponent: boolean = true;
    public services: Service[] = [];
    public servicesAll: Service[] = [];
    public servicesLow: Service[] = [];
    public servicesStandart: Service[] = [];
    public servicesComplete: Service[] = [];

    constructor(private serviceSrv: ServicesService) {
    }

    ngOnInit(): void {
        this.serviceSrv.getAllServices()
            .pipe(
                map(services => services.map(service => new Service(service)))                
            )
            .subscribe(services => {
                this.services = services;
                this.servicesAll = services;
                this.servicesLow = services.filter(service => service.getSegments().includes('эконом'));
                this.servicesStandart = services.filter(service => service.getSegments().includes('стандарт'));
                this.servicesComplete = services.filter(service => service.getSegments().includes('премиум'));
        })
    }

    setFilter(e) {
        const segment = e.target.value;
        if (segment === 'эконом') {
            this.services = this.servicesLow
        } else if (segment === 'стандарт') {
            this.services = this.servicesStandart
        } else if (segment === 'премиум') {
            this.services = this.servicesComplete
        } else return
    }

}