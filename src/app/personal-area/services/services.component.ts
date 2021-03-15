import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Performer } from 'src/app/models/Performer';
import { Service } from 'src/app/models/Service';
import { PerformersCardService } from 'src/app/services/performers-card.service';
import { ServicesService } from 'src/app/services/services.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

  public servicesForm: FormGroup;
  public services$: Observable<Service[]>;
  public card: Performer;
  public isChanged = false;

  constructor(public fb: FormBuilder,
              private srvSrv: ServicesService,
              private cardSrv: PerformersCardService) {}

  ngOnInit(): void {
    this.services$ = this.srvSrv.services$;
    this.cardSrv.getPerformersCardById('7wx8WNLYh66KXGGSIl9N')
      .subscribe(data => {
        this.card = data;
        this.initForm(this.card.services)
      });

  }

  initForm(srv: any[]) {
    this.servicesForm = this.fb.group({
      services: this.fb.array([])
    });
    srv.map(data => this.addService(data.id, data.low.toString(), data.standart.toString(), data.premium.toString()));    
    this.isChanged = false;
  }

  submit() {
    let currentServices = this.arrayService.map(srv => {
      return {
        id: srv.get('service').value,
        low: srv.get('low').value === 'true' ? true : false,
        standart: srv.get('standard').value === 'true' ? true : false,
        premium: srv.get('premium').value === 'true' ? true : false
      }
    });
    let currentCard = new Performer({ ...this.card, services: currentServices});
    this.cardSrv.updatePerformersCard(currentCard);
  }

  get arrayService(): any {
    return this.servicesForm.get('services')['controls']
  }

  deleteElement(array, i: number) {
    array.splice(i, 1);
    this.isChanged = true;
  }

  addService(service = '', low = '', standard = '', premium = '') {
    this.arrayService.push(this.fb.group({
      service: [service],
      low: [low],
      standard: [standard],
      premium: [premium]
    }));
    this.isChanged = true;
  }
  
  drop(event: CdkDragDrop<string[]>) {   
    moveItemInArray(this.arrayService, event.previousIndex, event.currentIndex); 
    this.isChanged = true;
  }

	switchElem(array: Array<any>, i: number, path: string) {
		if (path === 'up') {
			if (i > 0) {
				let temp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = temp
			}
		} else {
			if (array.length > i + 1) {
				let temp = array[i + 1]
				array[i + 1] = array[i]
				array[i] = temp
			}
		}
  	}

}