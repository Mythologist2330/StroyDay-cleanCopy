import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, map } from 'rxjs/operators';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit { 
  
  public categories$: Observable<Category[]>;
  public services$: Observable<Service[]>;
  public id: string;

  public title = 'Создание новой категории услуг';
  public currentCategory: Category = new Category({    
    title: '',
    text: '',
    parent: '',
    services: [],
    isActive: false
  })

  constructor(private servicesSrv: ServicesService,
              private catSrv: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.catSrv.getCategoryById(this.id).subscribe(
      category => {
          if (category) {
            this.currentCategory = category;
            this.title = 'Редактирование категории: ' + this.currentCategory.title;
          }
          
      })
    this.categories$ = this.catSrv.categories$;
    this.services$ = this.servicesSrv.services$;
  }

  saveForm(e: Event) {
    e.preventDefault();
    this.checkParent();
    this.checkCreateOrUpdate(this.id)
      .then(() => this.router.navigate(['admin/tree']))
  }

  checkCreateOrUpdate(id: string): Promise<void> {
    if (this.id === 'new') {
      return this.catSrv.createCategory(this.currentCategory)
    } else {
      return this.catSrv.updateCategory(this.id, this.currentCategory)
    }
  }

  checkParent() {
    if (!this.currentCategory.parent) {
      this.currentCategory.parent = 'Отсутствует';
    }
  }

  getCategoriesBesidesYouself(): Observable<Category[]> {
    return this.categories$.pipe(
      map(categories => categories.filter(cat => cat.id !== this.id))
    )
  }

  cancel(e: Event) {
    e.preventDefault();
    this.router.navigate(['admin/tree'])
  }

  deleteCategory(id: string) {
    combineLatest(this.hasChild(id), this.hasService(id))
      .toPromise()
      .then(
        ([hasChild, hasService]) => {
          if (hasChild || hasService) {
            alert('У этой категории есть вложенности! Нельзя удалять!')
          } else {
            this.catSrv.deleteCategory(id)
              .then(
                () => this.router.navigate(['admin/tree'])
              )
          } 
        }
    )      
  }

  hasChild(id: string): Observable<boolean> {
    return this.categories$.pipe(
      map(categories => !!(categories.find(cat => cat.parent === id))),
      first()
    )
  }

  hasService(id: string): Observable<boolean> {
    return this.services$.pipe(
      map(services => !!(services.find(srv => srv.parent === id))),
      first()
    )
  }
}
