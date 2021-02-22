import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Service } from 'src/app/models/Service';
import { CategoryService } from 'src/app/services/category.service';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() category: Category;
  public services$: Observable<Service[]>;
  public categories$: Observable<Category[]>;
  public toggle = false;

  constructor(public servicesSrv: ServicesService,
              public catSrv: CategoryService,
              private router: Router) {}

  ngOnInit(): void {
    this.services$ = this.servicesSrv.services$;
    this.categories$ = this.catSrv.categories$;
  }

  goToEditCategory(id: string) {
    this.router.navigate(['admin/edit-category', id]);
  }

  goToEditService(id: string) {
    this.router.navigate(['admin/edit-service', id]);
  }
}
