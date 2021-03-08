import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { Observable, fromEvent, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  public profileToogle = false
  public menuToggle = false;
  public currentCategory: Category;
  public searchText = '';
  @ViewChild('input') input: ElementRef;

  constructor(public catSrv: CategoryService,
              private srvSrv: ServicesService,
              private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
          filter(Boolean),
          debounceTime(400),
          distinctUntilChanged(),
          tap(() => this.searchText = this.input.nativeElement.value)
      )
      .subscribe();
    }

  getResult(): Observable<any[]> {
    return combineLatest([this.catSrv.categories$, this.srvSrv.services$], (categories, services) => {
      return [
        ...categories.filter(cat => cat.title.toLowerCase().includes(this.searchText.toLowerCase())),
        ...services.filter(srv => srv.title.toLowerCase().includes(this.searchText.toLowerCase()))
      ] 
    });
  }

  chooseCategory(cat: Category) {
    this.currentCategory = cat;
  }

  getEven(subcat: Category[]) {
    return subcat.filter(item => subcat.indexOf(item) % 2 === 0)
  }

  getOdd(subcat: Category[]) {  
    return subcat.filter(item => subcat.indexOf(item) % 2 !== 0)
  }

  goToCategory(point: Category | Service) {
    if (point instanceof Category) {
      this.router.navigate(['pages/services/service-catalog/' + point.id]);
    } else {      
      this.router.navigate(['pages/service/' + point.id]);
    }
    this.menuToggle = false;
    this.searchText = null;
    this.input.nativeElement.value = null;
  }

  openCloseBurgerMenu(event) {
    if (event.view.innerWidth <= 767) {

      event.path.filter((containerBurgerMenu) => {
        if (containerBurgerMenu.className === 'header-devide-top') {
          for (let burgerMenu of containerBurgerMenu.children) {
            if (burgerMenu.className === 'menu') {

              if (burgerMenu.style.left === '0%') {
                burgerMenu.style.left = '-120%'
              } else {
                burgerMenu.style.left = '0%'
              }

            }

            if(burgerMenu.className === 'button-services') {

              if (burgerMenu.style.left === 'calc(0% - 16px)') {
                burgerMenu.style.left = '-120%'
              } else {
                burgerMenu.style.left = 'calc(0% - 16px)'
              }

            }
          }
        }

        if (containerBurgerMenu.localName === ('html' || 'body')) {
          if (containerBurgerMenu.style.overflow === 'hidden') {
            containerBurgerMenu.style.overflow = 'auto';
          } else {
            containerBurgerMenu.style.overflow = 'hidden';
          }
        }
      })
    }
  }


  navigationModuleToggleMobile(event) {

    if (event.view.innerWidth <= 767) {

      event.path.filter((navigationModuleContainer) => {

        if (navigationModuleContainer.className === 'header-devide-top') {
          for (let navigationModule of navigationModuleContainer.children) {
            if (navigationModule.className === 'navigation-module-window') {

              this.menuToggle = true

              if (navigationModule.style.right === '-16px') {
                navigationModule.style.right = 'calc(-100% - 48px)'

                setTimeout(() => {
                  this.menuToggle = false
                }, 200);

              } else {
                setTimeout(() => {
                  navigationModule.style.right = '-16px'
                }, 0);
              }
            }
          }
        }
      })
    }
  }
}
