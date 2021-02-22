import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Service } from 'src/app/models/Service';
import { CategoryService } from 'src/app/services/category.service';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public categories: Category[] = [];

  public services$: Observable<Service[]>;
  public categories$: Observable<Category[]>;

  constructor(public servicesSrv: ServicesService,
              public catSrv: CategoryService,
              private router: Router) {
   }

  ngOnInit(): void {
      this.services$ = this.servicesSrv.services$;
      this.categories$ = this.catSrv.categories$;
  }

  goToCreateCategory() {
    this.router.navigate(['admin/edit-category/new']);
  }

  goToCreateService() {
    this.router.navigate(['admin/edit-service/new']);
  }

}
