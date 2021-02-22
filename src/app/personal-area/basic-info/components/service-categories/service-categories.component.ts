import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Segment } from 'src/app/models/Order';
import { Service } from 'src/app/models/Service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss']
})

export class ServiceCategoriesComponent {

  public services: Service[] = [];
  public servicesAll: Service[] = [];
  public servicesLow: Service[] = [];
  public servicesStandart: Service[] = [];
  public servicesPremium: Service[] = [];

  constructor(private serviceSrv: ServicesService) {
  }

  ngOnInit(): void {
      this.serviceSrv.services$
          .subscribe(services => {
              this.services = services;
              this.servicesAll = services;

              this.servicesLow = services.map((service) => {
                  return new Service({...service, subServices: service.getServiceBySegment(Segment.low)})
              });

              this.servicesStandart = services.map((service) => {
                  return new Service({...service, subServices: service.getServiceBySegment(Segment.standart)})
              });

              this.servicesPremium = services.map((service) => {
                  return new Service({...service, subServices: service.getServiceBySegment(Segment.premium)})
              });
      })
  }

  getServiceCountBySegment(services: Service[]): number {
      let count = 0;
      services.map(service => count += service.subServices.length);
      return count;
  }

  setFilter(e) {
      const segment = e.target.value;
      if (segment === 'эконом') {
          this.services = this.servicesLow
      } else if (segment === 'стандарт') {
          this.services = this.servicesStandart
      } else if (segment === 'премиум') {
          this.services = this.servicesPremium
      } else {
          this.services = this.servicesAll
      }
  }

}