import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/Service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  public services$: Observable<Service[]>;  
  public categories$: Observable<Category[]>;
  public id: string;

  public title = 'Создание новой услуги';
  public currentService = new Service({
    title: '',
    text: '',
    parent: '',
    cost: {
      low: null,
      standart: null,
      premium: null
    },
    isActive: false
  })

  constructor(private servicesSrv: ServicesService,    
              private catSrv: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;    
    this.categories$ = this.catSrv.categories$;
    this.servicesSrv.getServiceById(this.id).subscribe(
      srv => {
        if (srv) {
          this.currentService = srv;
          this.title = 'Редактирование услуги: ' + this.currentService.title;
        }          
      })
  }
  
  saveForm(e: Event) {
    e.preventDefault();
    this.checkCreateOrUpdate(this.id)
      .then(() => this.router.navigate(['admin/tree']))
  }  

  checkCreateOrUpdate(id: string): any {
    if (this.id !== 'new') {
      return this.servicesSrv.updateService(this.id, this.currentService)
    } else {
      return this.servicesSrv.createService(this.currentService)
    }
  }

  cancel(e: Event) {
    e.preventDefault();
    this.router.navigate(['admin/tree'])
  }

  deleteService(id: string) {
    this.servicesSrv.deleteService(id)
      .then(() => this.router.navigate(['admin/tree']))
  }

}
