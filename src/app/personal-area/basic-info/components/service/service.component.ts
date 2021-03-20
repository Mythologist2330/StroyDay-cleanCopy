import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {

    @Input() service: Service;
    isMobile: boolean;

    ngOnInit() {
		if (window.innerWidth < 768) {
			this.isMobile = true
		} else {
            this.isMobile = false
        }
    }

}