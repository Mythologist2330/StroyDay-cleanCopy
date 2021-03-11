import { Component, Input } from '@angular/core';
import { OwnService } from 'src/app/models/OwnService';
import { Service } from 'src/app/models/Service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss']
})

export class ServiceCategoriesComponent {

    @Input() srv: {id: string, low: boolean, standart: boolean, premium: boolean}[];
    public services: OwnService[] = [];

    constructor(private serviceSrv: ServicesService) {
    }

    ngOnInit(): void {
        this.serviceSrv.services$
            .subscribe(services => {
                this.services = this.getOwnServices(services);
                console.log(this.services);
        })
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

    getServiceCountBySegment(services: Service[]): number {
        let count = 0;
        services.map(service => count += service.subServices.length);
        return count;
    }

}