import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-service-point',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent {

    @Input() service: Service;

}